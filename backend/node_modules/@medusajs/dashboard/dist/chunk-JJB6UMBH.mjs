// src/components/common/sortable-list/sortable-list.tsx
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DotsSix } from "@medusajs/icons";
import { IconButton, clx } from "@medusajs/ui";
import {
  Fragment,
  createContext,
  useContext,
  useMemo,
  useState
} from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var List = ({
  items,
  onChange,
  renderItem
}) => {
  const [active, setActive] = useState(null);
  const [activeItem, activeIndex] = useMemo(() => {
    if (active === null) {
      return [null, null];
    }
    const index = items.findIndex(({ id }) => id === active.id);
    return [items[index], index];
  }, [active, items]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  const handleDragStart = ({ active: active2 }) => {
    setActive(active2);
  };
  const handleDragEnd = ({ active: active2, over }) => {
    if (over && active2.id !== over.id) {
      const activeIndex2 = items.findIndex(({ id }) => id === active2.id);
      const overIndex = items.findIndex(({ id }) => id === over.id);
      onChange(arrayMove(items, activeIndex2, overIndex));
    }
    setActive(null);
  };
  const handleDragCancel = () => {
    setActive(null);
  };
  return /* @__PURE__ */ jsxs(
    DndContext,
    {
      sensors,
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
      onDragCancel: handleDragCancel,
      children: [
        /* @__PURE__ */ jsx(Overlay, { children: activeItem && activeIndex !== null ? renderItem(activeItem, activeIndex) : null }),
        /* @__PURE__ */ jsx(SortableContext, { items, children: /* @__PURE__ */ jsx(
          "ul",
          {
            role: "application",
            className: "flex list-inside list-none list-image-none flex-col p-0",
            children: items.map((item, index) => /* @__PURE__ */ jsx(Fragment, { children: renderItem(item, index) }, item.id))
          }
        ) })
      ]
    }
  );
};
var dropAnimationConfig = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.4"
      }
    }
  })
};
var Overlay = ({ children }) => {
  return /* @__PURE__ */ jsx(
    DragOverlay,
    {
      className: "shadow-elevation-card-hover overflow-hidden rounded-md [&>li]:border-b-0",
      dropAnimation: dropAnimationConfig,
      children
    }
  );
};
var SortableItemContext = createContext(null);
var useSortableItemContext = () => {
  const context = useContext(SortableItemContext);
  if (!context) {
    throw new Error(
      "useSortableItemContext must be used within a SortableItemContext"
    );
  }
  return context;
};
var Item = ({
  id,
  className,
  children
}) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition
  } = useSortable({ id });
  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
      isDragging
    }),
    [attributes, listeners, setActivatorNodeRef, isDragging]
  );
  const style = {
    opacity: isDragging ? 0.4 : void 0,
    transform: CSS.Translate.toString(transform),
    transition
  };
  return /* @__PURE__ */ jsx(SortableItemContext.Provider, { value: context, children: /* @__PURE__ */ jsx(
    "li",
    {
      className: clx("transition-fg flex flex-1 list-none", className),
      ref: setNodeRef,
      style,
      children
    }
  ) });
};
var DragHandle = () => {
  const { attributes, listeners, ref } = useSortableItemContext();
  return /* @__PURE__ */ jsx(
    IconButton,
    {
      variant: "transparent",
      size: "small",
      ...attributes,
      ...listeners,
      ref,
      className: "cursor-grab touch-none active:cursor-grabbing",
      children: /* @__PURE__ */ jsx(DotsSix, { className: "text-ui-fg-muted" })
    }
  );
};
var SortableList = Object.assign(List, {
  Item,
  DragHandle
});

// src/components/inputs/chip-input/chip-input.tsx
import { XMarkMini } from "@medusajs/icons";
import { Badge, clx as clx2 } from "@medusajs/ui";
import { AnimatePresence, motion } from "motion/react";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState as useState2
} from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ChipInput = forwardRef(
  ({
    value,
    onChange,
    onBlur,
    disabled,
    name,
    showRemove = true,
    variant = "base",
    allowDuplicates = false,
    placeholder,
    className
  }, ref) => {
    const innerRef = useRef(null);
    const isControlledRef = useRef(typeof value !== "undefined");
    const isControlled = isControlledRef.current;
    const [uncontrolledValue, setUncontrolledValue] = useState2([]);
    useImperativeHandle(
      ref,
      () => innerRef.current
    );
    const [duplicateIndex, setDuplicateIndex] = useState2(null);
    const chips = isControlled ? value : uncontrolledValue;
    const handleAddChip = (chip) => {
      const cleanValue = chip.trim();
      if (!cleanValue) {
        return;
      }
      if (!allowDuplicates && chips.includes(cleanValue)) {
        setDuplicateIndex(chips.indexOf(cleanValue));
        setTimeout(() => {
          setDuplicateIndex(null);
        }, 300);
        return;
      }
      onChange?.([...chips, cleanValue]);
      if (!isControlled) {
        setUncontrolledValue([...chips, cleanValue]);
      }
    };
    const handleRemoveChip = (chip) => {
      onChange?.(chips.filter((v) => v !== chip));
      if (!isControlled) {
        setUncontrolledValue(chips.filter((v) => v !== chip));
      }
    };
    const handleBlur = (e) => {
      onBlur?.();
      if (e.target.value) {
        handleAddChip(e.target.value);
        e.target.value = "";
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        if (!innerRef.current?.value) {
          return;
        }
        handleAddChip(innerRef.current?.value ?? "");
        innerRef.current.value = "";
        innerRef.current?.focus();
      }
      if (e.key === "Backspace" && innerRef.current?.value === "") {
        handleRemoveChip(chips[chips.length - 1]);
      }
    };
    const shake = {
      x: [0, -2, 2, -2, 2, 0],
      transition: { duration: 0.3 }
    };
    return /* @__PURE__ */ jsxs2(
      "div",
      {
        className: clx2(
          "shadow-borders-base flex min-h-8 flex-wrap items-center gap-1 rounded-md px-2 py-1.5",
          "transition-fg focus-within:shadow-borders-interactive-with-active",
          "has-[input:disabled]:bg-ui-bg-disabled has-[input:disabled]:text-ui-fg-disabled has-[input:disabled]:cursor-not-allowed",
          {
            "bg-ui-bg-field-component hover:bg-ui-bg-field-component-hover": variant === "contrast",
            "bg-ui-bg-field hover:bg-ui-bg-field-hover": variant === "base"
          },
          className
        ),
        tabIndex: -1,
        onClick: () => innerRef.current?.focus(),
        children: [
          chips.map((v, index) => {
            return /* @__PURE__ */ jsx2(AnimatePresence, { children: /* @__PURE__ */ jsx2(
              Badge,
              {
                size: "2xsmall",
                className: clx2("gap-x-0.5 pl-1.5 pr-1.5 max-w-full min-w-0 overflow-hidden", {
                  "transition-fg pr-1": showRemove,
                  "shadow-borders-focus": index === duplicateIndex
                }),
                asChild: true,
                children: /* @__PURE__ */ jsxs2(
                  motion.div,
                  {
                    animate: index === duplicateIndex ? shake : void 0,
                    children: [
                      /* @__PURE__ */ jsx2("span", { className: "truncate min-w-0", children: v }),
                      showRemove && /* @__PURE__ */ jsx2(
                        "button",
                        {
                          tabIndex: -1,
                          type: "button",
                          onClick: () => handleRemoveChip(v),
                          className: clx2(
                            "text-ui-fg-subtle transition-fg outline-none shrink-0"
                          ),
                          children: /* @__PURE__ */ jsx2(XMarkMini, {})
                        }
                      )
                    ]
                  }
                )
              }
            ) }, `${v}-${index}`);
          }),
          /* @__PURE__ */ jsx2(
            "input",
            {
              className: clx2(
                "caret-ui-fg-base text-ui-fg-base txt-compact-small flex-1 appearance-none bg-transparent",
                "disabled:text-ui-fg-disabled disabled:cursor-not-allowed",
                "focus:outline-none",
                "placeholder:text-ui-fg-muted"
              ),
              onKeyDown: handleKeyDown,
              onBlur: handleBlur,
              disabled,
              name,
              ref: innerRef,
              placeholder: chips.length === 0 ? placeholder : void 0,
              autoComplete: "off"
            }
          )
        ]
      }
    );
  }
);
ChipInput.displayName = "ChipInput";

export {
  SortableList,
  ChipInput
};
