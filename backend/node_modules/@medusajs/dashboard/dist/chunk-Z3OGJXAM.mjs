import {
  useRequiredPermissions
} from "./chunk-HFX2KPQD.mjs";
import {
  useExtension
} from "./chunk-5SZFF255.mjs";
import {
  useFeatureFlag
} from "./chunk-PJU3RODH.mjs";
import {
  queryClient,
  queryKeysFactory
} from "./chunk-SEMVMECK.mjs";
import {
  sdk
} from "./chunk-NFEK63OE.mjs";

// src/components/layout-composer/entry.tsx
import { Fragment } from "react";
import { jsx } from "react/jsx-runtime";
function LayoutEntry({ children }) {
  return /* @__PURE__ */ jsx(Fragment, { children });
}
LayoutEntry.displayName = "LayoutEntry";

// src/components/layout-composer/constants.ts
var LAYOUT_CONTROLS_LOCATION = "topbar-controls";
var CUSTOMIZE_IDS = {
  PAGE: "page",
  TOPBAR: "topbar",
  MAIN_SIDEBAR: "main-sidebar",
  SETTINGS_SIDEBAR: "settings-sidebar"
};

// src/components/layout-composer/layout-composer.tsx
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { Badge, Button, usePrompt } from "@medusajs/ui";
import {
  Fragment as Fragment4,
  useCallback as useCallback2,
  useEffect,
  useId,
  useMemo as useMemo2,
  useState as useState2
} from "react";
import { createPortal } from "react-dom";
import { useTranslation as useTranslation4 } from "react-i18next";
import { Outlet } from "react-router-dom";

// src/hooks/use-layout-customizer-trigger-host.tsx
import { useContext } from "react";

// src/providers/customizer-host-provider/customizer-host-context.tsx
import { createContext } from "react";
var LayoutCustomizerHostContext = createContext(null);

// src/hooks/use-layout-customizer-trigger-host.tsx
var useLayoutCustomizerTriggerHost = (location) => {
  return useContext(LayoutCustomizerHostContext)?.hosts[location] ?? null;
};
var useLayoutCustomizerActiveEditor = () => {
  const ctx = useContext(LayoutCustomizerHostContext);
  return {
    activeEditor: ctx?.activeEditor ?? null,
    setActiveEditor: ctx?.setActiveEditor ?? (() => {
    })
  };
};
var useLayoutEditRequest = () => {
  const ctx = useContext(LayoutCustomizerHostContext);
  return {
    editRequest: ctx?.editRequest ?? null,
    requestEdit: ctx?.requestEdit ?? (() => {
    })
  };
};

// src/components/layout-composer/entries.ts
import {
  Children,
  Fragment as Fragment2,
  isValidElement
} from "react";
function getElementName(element) {
  const { type } = element;
  if (typeof type === "string") {
    return type;
  }
  return type.displayName ?? type.name ?? "unknown";
}
function isLayoutEntry(element) {
  return element.type === LayoutEntry;
}
function getCoreEntryKey(element) {
  if (isLayoutEntry(element)) {
    return element.props.id;
  }
  return getElementName(element);
}
function buildCoreEntries(elementsBySection) {
  const entries = [];
  const seen = /* @__PURE__ */ new Map();
  for (const [sectionName, elements] of Object.entries(elementsBySection)) {
    for (const el of elements) {
      const name = getCoreEntryKey(el);
      const base = `core:${name}`;
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);
      const widgetId = count === 0 ? base : `${base}#${count + 1}`;
      entries.push({
        widgetId,
        render: () => el,
        naturalSection: sectionName
      });
    }
  }
  return entries;
}
function extractSectionElements(sections) {
  const result = {};
  for (const [sectionName, node] of Object.entries(sections)) {
    result[sectionName] = collectElements(node);
  }
  return result;
}
function collectElements(node) {
  const elements = [];
  Children.forEach(node, (child) => {
    if (!isValidElement(child)) {
      return;
    }
    if (child.type === Fragment2) {
      const fragmentChildren = child.props.children;
      elements.push(...collectElements(fragmentChildren));
      return;
    }
    elements.push(child);
  });
  return elements;
}
function buildDisplayEntries(raw, preference, validSections) {
  const result = {};
  for (const entry of raw) {
    const pref = preference.widgets[entry.widgetId];
    const overrideSection = pref?.section && validSections.has(pref.section) ? pref.section : void 0;
    const effectiveSection = overrideSection ?? entry.naturalSection;
    const effectiveOrder = pref?.order ?? 0;
    const hidden = pref?.hidden ?? false;
    if (!result[effectiveSection]) {
      result[effectiveSection] = [];
    }
    result[effectiveSection].push({
      widgetId: entry.widgetId,
      render: entry.render,
      order: effectiveOrder,
      hidden
    });
  }
  for (const k of Object.keys(result)) {
    result[k].sort((a, b) => a.order - b.order);
  }
  return result;
}
var SECTION_TAIL_SUFFIX = "::tail";
var isSectionTailId = (id) => id.endsWith(SECTION_TAIL_SUFFIX);
var getSectionIdFromTailId = (id) => id.slice(0, -SECTION_TAIL_SUFFIX.length);
var getSectionTailId = (sectionId) => `${sectionId}${SECTION_TAIL_SUFFIX}`;

// src/providers/layout-edit-provider/layout-edit-context.tsx
import { createContext as createContext2 } from "react";
var LayoutEditContext = createContext2({
  editMode: false,
  orderChildren: (children) => children,
  setChildrenOrder: () => {
  },
  isHidden: () => false,
  toggleHidden: () => {
  }
});

// src/providers/layout-edit-provider/layout-edit-provider.tsx
var LayoutEditProvider = LayoutEditContext.Provider;

// src/components/layout-composer/section-dropzone.tsx
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { Text, clx } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function SectionTail({ sectionId, className }) {
  const { setNodeRef, isOver } = useDroppable({
    id: getSectionTailId(sectionId)
  });
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx2(
    "div",
    {
      ref: setNodeRef,
      className: clx(
        "text-ui-fg-muted flex min-h-16 items-center justify-center rounded-lg border border-dashed transition-colors",
        isOver ? "border-ui-border-interactive bg-ui-bg-highlight text-ui-fg-subtle" : "border-ui-border-strong",
        className
      ),
      style: {
        backgroundImage: "repeating-linear-gradient(-45deg, rgb(212 212 216 / 0.12), rgb(212 212 216 / 0.12) 10px, transparent 10px, transparent 20px)"
      },
      children: /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: t("layout.dropToSectionEnd") })
    }
  );
}
function SectionDropzone({
  section,
  items,
  children
}) {
  const { setNodeRef, isOver } = useDroppable({ id: section.id });
  if (section.ordering === "grid") {
    return /* @__PURE__ */ jsxs(SortableContext, { items, strategy: rectSortingStrategy, children: [
      items.length === 0 ? /* @__PURE__ */ jsx2(
        "div",
        {
          ref: setNodeRef,
          className: clx(
            "col-span-full min-h-10 w-full rounded-md transition-colors",
            isOver && "bg-ui-bg-highlight"
          )
        }
      ) : (
        // `display: contents` keeps the SortableEntry wrappers as direct
        // children of the author's grid, so this node has no box of its own.
        // Drops onto the grid are covered by the entries and the SectionTail.
        /* @__PURE__ */ jsx2("div", { className: "contents", children })
      ),
      /* @__PURE__ */ jsx2(SectionTail, { sectionId: section.id, className: "col-span-full" })
    ] });
  }
  if (section.ordering === "horizontal-stretched") {
    return /* @__PURE__ */ jsx2(SortableContext, { items, strategy: horizontalListSortingStrategy, children: /* @__PURE__ */ jsx2(
      "div",
      {
        ref: setNodeRef,
        className: clx(
          "flex min-h-10 flex-row items-stretch gap-x-3 rounded-md transition-colors [&>*]:min-w-0 [&>*]:flex-1",
          isOver && items.length === 0 && "bg-ui-bg-highlight"
        ),
        children
      }
    ) });
  }
  if (section.ordering === "horizontal-list") {
    return /* @__PURE__ */ jsx2(SortableContext, { items, strategy: horizontalListSortingStrategy, children: /* @__PURE__ */ jsx2(
      "div",
      {
        ref: setNodeRef,
        className: clx(
          "flex min-h-10 flex-row items-center gap-x-3 rounded-md transition-colors",
          isOver && items.length === 0 && "bg-ui-bg-highlight"
        ),
        children
      }
    ) });
  }
  return /* @__PURE__ */ jsx2(SortableContext, { items, strategy: verticalListSortingStrategy, children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: setNodeRef,
      className: clx(
        "flex min-h-10 flex-col gap-y-3 rounded-md transition-colors",
        isOver && items.length === 0 && "bg-ui-bg-highlight"
      ),
      children: [
        children,
        /* @__PURE__ */ jsx2(SectionTail, { sectionId: section.id })
      ]
    }
  ) });
}

// src/components/layout-composer/sortable-entry.tsx
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DotsSix, Eye, EyeSlash } from "@medusajs/icons";
import { IconButton, clx as clx2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Fragment as Fragment3, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function EntryContent({
  children,
  className,
  placeholderClassName
}) {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsxs2(Fragment3, { children: [
    /* @__PURE__ */ jsx3("div", { className: clx2("peer flex flex-col empty:hidden", className), children }),
    /* @__PURE__ */ jsx3(
      "div",
      {
        "aria-hidden": true,
        className: clx2(
          "text-ui-fg-muted hidden min-h-16 items-center justify-center px-2 text-center text-xs peer-[:empty]:flex",
          placeholderClassName
        ),
        children: t("layout.empty")
      }
    )
  ] });
}
function SortableEntry({
  widgetId,
  order,
  hidden,
  onToggleHidden,
  children,
  controlSize = "default"
}) {
  const { t } = useTranslation2();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: widgetId });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition
  };
  const xsmall = controlSize === "xsmall";
  const small = controlSize === "small";
  const showLabel = controlSize === "default";
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      ref: setNodeRef,
      style,
      className: clx2(
        // `min-w-0` lets the entry shrink below its content's intrinsic width
        // when a layout stretches it into equal grid/flex tracks. The author's
        // container can't set this via `[&>*]` because the `display: contents`
        // SortableContext wrapper hides its children from the `>` combinator.
        "ring-ui-border-base relative min-w-0 rounded-lg ring-1 transition-opacity",
        // Hidden entries are clearly de-emphasized during edit mode so the
        // user can tell at a glance which ones won't render at idle.
        hidden && "opacity-30 grayscale",
        // Hide the original while it's being dragged — the DragOverlay shows
        // the moving copy. Visibility (not display:none) keeps the layout box
        // in place so neighbors can shift against it.
        isDragging && "invisible"
      ),
      children: [
        /* @__PURE__ */ jsx3(
          EntryContent,
          {
            className: "h-full [&>*]:h-full",
            placeholderClassName: "border-ui-border-strong h-full rounded-lg border border-dashed",
            children
          }
        ),
        /* @__PURE__ */ jsxs2(
          "div",
          {
            className: clx2(
              "bg-ui-bg-base shadow-elevation-card-rest absolute flex items-center rounded-md",
              xsmall && "right-0 top-0 flex-col gap-y-0.5 p-0 opacity-50",
              small && "right-1.5 top-[min(50%,2.5px)] gap-x-0.5 p-0.5",
              showLabel && "right-2 top-2 gap-x-1 p-1"
            ),
            children: [
              showLabel && /* @__PURE__ */ jsxs2("span", { className: "text-ui-fg-muted px-1 font-mono text-xs", children: [
                widgetId,
                " (",
                order,
                ")"
              ] }),
              /* @__PURE__ */ jsx3(
                IconButton,
                {
                  size: "2xsmall",
                  variant: "transparent",
                  onClick: onToggleHidden,
                  "aria-label": hidden ? t("actions.show") : t("actions.hide"),
                  className: clx2(xsmall && "h-3 w-3 p-0", small && "h-3.5 w-3.5 p-0.5"),
                  children: hidden ? /* @__PURE__ */ jsx3(EyeSlash, {}) : /* @__PURE__ */ jsx3(Eye, {})
                }
              ),
              /* @__PURE__ */ jsx3(
                "button",
                {
                  type: "button",
                  className: clx2(
                    "text-ui-fg-muted cursor-grab touch-none rounded focus:outline-none",
                    xsmall && "p-0",
                    small && "p-0.5",
                    showLabel && "p-1"
                  ),
                  ...attributes,
                  ...listeners,
                  "aria-label": t("layout.dragToReorder"),
                  children: /* @__PURE__ */ jsx3(DotsSix, {})
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// src/hooks/use-layout-dnd.ts
import {
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  pointerWithin,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useRef, useState } from "react";
function resolveOverSection(overId, sectionIds, widgetSectionMap) {
  if (sectionIds.has(overId)) {
    return overId;
  }
  if (isSectionTailId(overId)) {
    const sectionId = getSectionIdFromTailId(overId);
    return sectionIds.has(sectionId) ? sectionId : void 0;
  }
  return widgetSectionMap[overId];
}
function isContainerTarget(id, sectionIds) {
  return sectionIds.has(id) || isSectionTailId(id);
}
function useLayoutDnd({
  entriesBySection,
  widgetSectionMap,
  validSectionIds,
  setDraft
}) {
  const [activeDragId, setActiveDragId] = useState(null);
  const lastOverIdRef = useRef(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );
  function reindexSection(sectionId, orderedWidgetIds) {
    setDraft((prev) => {
      if (!prev) {
        return prev;
      }
      const widgets = { ...prev.widgets };
      orderedWidgetIds.forEach((id, index) => {
        widgets[id] = { ...widgets[id], section: sectionId, order: index };
      });
      return { ...prev, widgets };
    });
  }
  function moveToSection(activeWidgetId, overSection, overId) {
    const ids = (entriesBySection[overSection] ?? []).map((e) => e.widgetId);
    const overIndex = ids.indexOf(overId);
    ids.splice(overIndex === -1 ? ids.length : overIndex, 0, activeWidgetId);
    reindexSection(overSection, ids);
  }
  const collisionDetection = (args) => {
    const preferWidget = (collisions) => {
      const widget = collisions.find(
        (c) => !isContainerTarget(c.id, validSectionIds)
      );
      return widget ? [widget] : collisions;
    };
    const pointer = pointerWithin(args);
    if (pointer.length > 0) {
      const chosen = preferWidget(pointer);
      if (chosen.length > 0) {
        lastOverIdRef.current = chosen[0].id;
      }
      return chosen;
    }
    if (lastOverIdRef.current !== null) {
      return [{ id: lastOverIdRef.current, data: { droppableContainer: null } }];
    }
    const closest = preferWidget(closestCenter(args));
    if (closest.length > 0) {
      lastOverIdRef.current = closest[0].id;
    }
    return closest;
  };
  function resolveMove(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return null;
    }
    const activeWidgetId = active.id;
    const overId = over.id;
    const activeSection = widgetSectionMap[activeWidgetId];
    const overSection = resolveOverSection(
      overId,
      validSectionIds,
      widgetSectionMap
    );
    if (!activeSection || !overSection) {
      return null;
    }
    return { activeWidgetId, overId, activeSection, overSection };
  }
  function handleDragStart(event) {
    setActiveDragId(event.active.id);
    lastOverIdRef.current = null;
  }
  function handleDragOver(event) {
    const move = resolveMove(event);
    if (!move || move.activeSection === move.overSection) {
      return;
    }
    moveToSection(move.activeWidgetId, move.overSection, move.overId);
  }
  function handleDragEnd(event) {
    setActiveDragId(null);
    lastOverIdRef.current = null;
    const move = resolveMove(event);
    if (!move) {
      return;
    }
    const { activeWidgetId, overId, activeSection, overSection } = move;
    if (activeSection !== overSection) {
      moveToSection(activeWidgetId, overSection, overId);
      return;
    }
    const ids = (entriesBySection[overSection] ?? []).map((e) => e.widgetId);
    const oldIndex = ids.indexOf(activeWidgetId);
    const newIndex = isContainerTarget(overId, validSectionIds) ? ids.length - 1 : ids.indexOf(overId);
    if (oldIndex === -1 || newIndex === -1) {
      return;
    }
    reindexSection(activeSection, arrayMove(ids, oldIndex, newIndex));
  }
  const activeEntry = activeDragId ? Object.values(entriesBySection).flat().find((e) => e.widgetId === activeDragId) : null;
  return {
    sensors,
    collisionDetection,
    activeDragId,
    activeEntry,
    handleDragStart,
    handleDragOver,
    handleDragEnd
  };
}

// src/hooks/use-layout-preference.ts
import { toast } from "@medusajs/ui";
import { useCallback, useMemo } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";

// src/hooks/api/layouts.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var LAYOUTS_QUERY_KEY = "layouts";
var _layoutsKeys = queryKeysFactory(
  LAYOUTS_QUERY_KEY
);
_layoutsKeys.configuration = function(zone) {
  return [this.all, "configuration", zone];
};
_layoutsKeys.configurations = function(query) {
  return [this.all, "configurations", query];
};
var layoutsQueryKeys = _layoutsKeys;
var useLayoutConfigurations = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.layouts.listConfigurations(query),
    queryKey: layoutsQueryKeys.configurations(query),
    ...options
  });
  return { ...data, ...rest };
};
var useHasLayoutCustomizations = () => {
  const { count, ...rest } = useLayoutConfigurations({
    limit: 1,
    fields: "id"
  });
  return { has_customizations: (count ?? 0) > 0, ...rest };
};
var useLayoutConfiguration = (zone, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.layouts.retrieveConfiguration(zone),
    queryKey: layoutsQueryKeys.configuration(zone),
    ...options
  });
  return { ...data, ...rest };
};
var useSetLayoutConfiguration = (zone, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.layouts.setConfiguration(zone, payload),
    ...options,
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({
        queryKey: layoutsQueryKeys.configuration(zone)
      });
      await queryClient.invalidateQueries({
        queryKey: [layoutsQueryKeys.all, "configurations"]
      });
      options?.onSuccess?.(data, variables, context);
    }
  });
};

// src/hooks/use-layout-preference.ts
var EMPTY_PREFERENCE = { widgets: {} };
function toPreference(configuration) {
  const widgets = configuration?.widgets;
  return widgets ? { widgets } : null;
}
function useLayoutPreference(zone) {
  const { t } = useTranslation3();
  const { personal_configuration, default_configuration, active_scope } = useLayoutConfiguration(zone);
  const { mutate: setLayoutConfiguration, isPending: isSaving } = useSetLayoutConfiguration(zone, {
    onSuccess: () => toast.success(t("layout.saveSuccess")),
    onError: (error) => toast.error(error.message)
  });
  const defaultPreference = useMemo(
    () => toPreference(default_configuration?.configuration) ?? EMPTY_PREFERENCE,
    [default_configuration]
  );
  const personalPreference = useMemo(
    () => toPreference(personal_configuration?.configuration) ?? defaultPreference,
    [personal_configuration, defaultPreference]
  );
  const activeScope = active_scope ?? "personal";
  const definedScope = personal_configuration ? "personal" : default_configuration ? "default" : null;
  const setPreference = useCallback(
    (next, options, mutateOptions) => {
      setLayoutConfiguration(
        {
          is_default: options?.asDefault ?? false,
          configuration: { widgets: next.widgets }
        },
        mutateOptions
      );
    },
    [setLayoutConfiguration]
  );
  return {
    personalPreference,
    defaultPreference,
    activeScope,
    definedScope,
    setPreference,
    isSaving
  };
}

// src/components/layout-composer/layout-composer.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function isSamePreference(a, b) {
  const keys = /* @__PURE__ */ new Set([...Object.keys(a.widgets), ...Object.keys(b.widgets)]);
  for (const key of keys) {
    const aw = a.widgets[key];
    const bw = b.widgets[key];
    if (!!aw?.hidden !== !!bw?.hidden) {
      return false;
    }
    if (aw?.order !== bw?.order) {
      return false;
    }
    if (aw?.section !== bw?.section) {
      return false;
    }
  }
  return true;
}
var LayoutComposerRoot = ({
  widgetsZonePrefix,
  preferredLayoutId,
  sections,
  data,
  hasOutlet = true,
  customizeId = CUSTOMIZE_IDS.PAGE,
  controlSize = "default",
  disableWidgets = false,
  layoutProps = {}
}) => {
  const { getWidgetsForSections, getLayout } = useExtension();
  const {
    personalPreference,
    defaultPreference,
    activeScope,
    setPreference,
    isSaving
  } = useLayoutPreference(widgetsZonePrefix);
  const controlsHost = useLayoutCustomizerTriggerHost(LAYOUT_CONTROLS_LOCATION);
  const { activeEditor, setActiveEditor } = useLayoutCustomizerActiveEditor();
  const { editRequest, requestEdit } = useLayoutEditRequest();
  const editorId = useId();
  const { t } = useTranslation4();
  const prompt = usePrompt();
  const locked = activeEditor !== null && activeEditor !== editorId;
  const [editMode, setEditMode] = useState2(false);
  useEffect(() => {
    return () => {
      setActiveEditor(null);
    };
  }, [setActiveEditor]);
  useEffect(() => {
    if (editRequest === customizeId && !editMode) {
      requestEdit(null);
      enterEdit();
    }
  }, [editRequest, customizeId, editMode]);
  const [draft, setDraft] = useState2(null);
  const [editScope, setEditScope] = useState2("personal");
  const preferenceForScope = useCallback2(
    (scope) => {
      return scope === "default" ? defaultPreference : personalPreference;
    },
    [defaultPreference, personalPreference]
  );
  const activePreference = useMemo2(() => {
    return editMode && draft ? draft : preferenceForScope(activeScope);
  }, [editMode, draft, preferenceForScope, activeScope]);
  const hasChanges = useMemo2(() => {
    return editMode && draft ? !isSamePreference(draft, preferenceForScope(editScope)) : false;
  }, [editMode, draft, preferenceForScope, editScope]);
  const layoutId = preferredLayoutId;
  const layout = getLayout(layoutId);
  const { entriesBySection, widgetSectionMap, validSectionIds } = useMemo2(() => {
    const coreElementsBySection = extractSectionElements(
      sections
    );
    const naturalWidgets = disableWidgets ? {} : getWidgetsForSections(
      widgetsZonePrefix,
      layout?.sections?.map((s) => s.id) ?? []
    );
    const rawEntries = buildCoreEntries(coreElementsBySection);
    for (const [naturalSection, widgets] of Object.entries(naturalWidgets)) {
      for (const w of widgets) {
        const WidgetComponent = w.Component;
        rawEntries.push({
          widgetId: w.widgetId,
          render: (data2) => /* @__PURE__ */ jsx4(WidgetComponent, { data: data2 }),
          naturalSection
        });
      }
    }
    const validSectionIds2 = new Set(layout?.sections.map((s) => s.id) ?? []);
    const entriesBySection2 = buildDisplayEntries(
      rawEntries,
      activePreference,
      validSectionIds2
    );
    const widgetSectionMap2 = {};
    for (const [sectionId, entries] of Object.entries(entriesBySection2)) {
      for (const e of entries) {
        widgetSectionMap2[e.widgetId] = sectionId;
      }
    }
    return {
      entriesBySection: entriesBySection2,
      widgetSectionMap: widgetSectionMap2,
      validSectionIds: validSectionIds2
    };
  }, [
    sections,
    widgetsZonePrefix,
    layout,
    activePreference,
    getWidgetsForSections,
    disableWidgets
  ]);
  const {
    sensors,
    collisionDetection,
    activeEntry,
    handleDragStart,
    handleDragOver,
    handleDragEnd
  } = useLayoutDnd({
    entriesBySection,
    widgetSectionMap,
    validSectionIds,
    setDraft
  });
  const isHidden = useCallback2(
    (id) => activePreference.widgets[id]?.hidden ?? false,
    [activePreference]
  );
  const toggleHidden = useCallback2((widgetId) => {
    setDraft((prev) => {
      if (!prev) {
        return prev;
      }
      const current = prev.widgets[widgetId] ?? {};
      const nextWidget = {
        ...current,
        hidden: !current.hidden
      };
      return {
        ...prev,
        widgets: { ...prev.widgets, [widgetId]: nextWidget }
      };
    });
  }, []);
  const renderEntry = useCallback2(
    (entry) => {
      const content = entry.render(data);
      if (!editMode) {
        return /* @__PURE__ */ jsx4(Fragment4, { children: content }, entry.widgetId);
      }
      return /* @__PURE__ */ jsx4(
        SortableEntry,
        {
          widgetId: entry.widgetId,
          order: entry.order,
          hidden: entry.hidden,
          onToggleHidden: () => toggleHidden(entry.widgetId),
          controlSize,
          children: content
        },
        entry.widgetId
      );
    },
    [data, editMode, controlSize, toggleHidden]
  );
  const orderChildren = useCallback2(
    (children, getId) => [...children].sort(
      (a, b) => (activePreference.widgets[getId(a)]?.order ?? 0) - (activePreference.widgets[getId(b)]?.order ?? 0)
    ),
    [activePreference]
  );
  const setChildrenOrder = useCallback2((orderedIds) => {
    setDraft((prev) => {
      if (!prev) {
        return prev;
      }
      const widgets = { ...prev.widgets };
      orderedIds.forEach((id, index) => {
        widgets[id] = { ...widgets[id] ?? {}, order: index };
      });
      return { ...prev, widgets };
    });
  }, []);
  const editContextValue = useMemo2(
    () => ({
      editMode,
      orderChildren,
      setChildrenOrder,
      isHidden,
      toggleHidden
    }),
    [editMode, orderChildren, setChildrenOrder, isHidden, toggleHidden]
  );
  function enterEdit() {
    if (locked) {
      return;
    }
    setEditScope(activeScope);
    setDraft(preferenceForScope(activeScope));
    setEditMode(true);
    setActiveEditor(editorId);
  }
  function switchScope(scope) {
    if (!hasChanges) {
      setDraft(preferenceForScope(scope));
    }
    setEditScope(scope);
  }
  async function commitEdit() {
    if (editScope === "default" && hasChanges) {
      const confirmed = await prompt({
        title: t("layout.saveForEveryoneTitle"),
        description: t("layout.saveForEveryoneDescription"),
        confirmText: t("layout.saveForEveryone"),
        cancelText: t("actions.cancel")
      });
      if (!confirmed) {
        return;
      }
    }
    if (!draft) {
      setEditMode(false);
      setActiveEditor(null);
      return;
    }
    setPreference(
      draft,
      { asDefault: editScope === "default" },
      {
        onSuccess: () => {
          setEditMode(false);
          setDraft(null);
          setActiveEditor(null);
        }
      }
    );
  }
  function cancelEdit() {
    setEditMode(false);
    setDraft(null);
    setActiveEditor(null);
  }
  const renderedSections = useMemo2(() => {
    const sections2 = {};
    for (const section of layout?.sections ?? []) {
      const entries = entriesBySection[section.id] ?? [];
      const visibleEntries = editMode ? entries : entries.filter((e) => !e.hidden);
      const renderedItems = visibleEntries.map(renderEntry);
      sections2[section.id] = editMode ? /* @__PURE__ */ jsx4(
        SectionDropzone,
        {
          section,
          items: visibleEntries.map((e) => e.widgetId),
          children: renderedItems
        }
      ) : renderedItems;
    }
    return sections2;
  }, [layout, entriesBySection, editMode, renderEntry]);
  const LayoutComponent = layout?.Component;
  if (!LayoutComponent) {
    return null;
  }
  const editControls = /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-x-2", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-x-1", children: [
      /* @__PURE__ */ jsx4(
        Badge,
        {
          size: "xsmall",
          color: editScope === "personal" ? "blue" : "grey",
          className: "cursor-pointer",
          onClick: () => switchScope("personal"),
          children: t("layout.personalView")
        }
      ),
      /* @__PURE__ */ jsx4(
        Badge,
        {
          size: "xsmall",
          color: editScope === "default" ? "blue" : "grey",
          className: "cursor-pointer",
          onClick: () => switchScope("default"),
          children: t("layout.defaultView")
        }
      )
    ] }),
    /* @__PURE__ */ jsx4(
      Button,
      {
        size: "small",
        variant: "secondary",
        onClick: cancelEdit,
        disabled: isSaving,
        children: t("actions.cancel")
      }
    ),
    /* @__PURE__ */ jsx4(
      Button,
      {
        size: "small",
        variant: "primary",
        onClick: commitEdit,
        isLoading: isSaving,
        children: editScope === "default" && hasChanges ? t("layout.saveForEveryone") : t("actions.save")
      }
    )
  ] });
  const layoutNode = /* @__PURE__ */ jsx4(LayoutComponent, { sections: renderedSections, data, ...layoutProps });
  return /* @__PURE__ */ jsxs3(LayoutEditProvider, { value: editContextValue, children: [
    editMode && controlsHost ? createPortal(editControls, controlsHost) : null,
    editMode ? /* @__PURE__ */ jsxs3(
      DndContext,
      {
        sensors,
        collisionDetection,
        onDragStart: handleDragStart,
        onDragOver: handleDragOver,
        onDragEnd: handleDragEnd,
        children: [
          layoutNode,
          /* @__PURE__ */ jsx4(DragOverlay, { children: activeEntry ? /* @__PURE__ */ jsx4("div", { className: "bg-ui-bg-base shadow-elevation-flyout ring-ui-border-base min-w-0 rounded-lg ring-1", children: /* @__PURE__ */ jsx4(EntryContent, { children: activeEntry.render(data) }) }) : null })
        ]
      }
    ) : layoutNode,
    hasOutlet && /* @__PURE__ */ jsx4(Outlet, {})
  ] });
};
var LayoutComposer = Object.assign(LayoutComposerRoot, {
  Entry: LayoutEntry
});

// src/components/layout-composer/customizer-menu.tsx
import { Adjustments, AdjustmentsDone } from "@medusajs/icons";
import { DropdownMenu, IconButton as IconButton2, Tooltip } from "@medusajs/ui";
import { useCallback as useCallback3, useEffect as useEffect2 } from "react";
import { useTranslation as useTranslation5 } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var isSettingsPath = (pathname) => pathname === "/settings" || pathname.startsWith("/settings/");
var HOSTS = [
  {
    id: CUSTOMIZE_IDS.PAGE,
    labelKey: "layout.customizePage",
    isMounted: () => true
  },
  {
    id: CUSTOMIZE_IDS.MAIN_SIDEBAR,
    labelKey: "layout.customizeSidebar",
    navigateTo: "/",
    isMounted: (pathname) => !isSettingsPath(pathname)
  },
  {
    id: CUSTOMIZE_IDS.SETTINGS_SIDEBAR,
    labelKey: "layout.customizeSettingsSidebar",
    navigateTo: "/settings",
    isMounted: isSettingsPath
  },
  {
    id: CUSTOMIZE_IDS.TOPBAR,
    labelKey: "layout.customizeTopbar",
    isMounted: () => true
  }
];
var CustomizerMenu = () => {
  const { t } = useTranslation5();
  const navigate = useNavigate();
  const location = useLocation();
  const { activeEditor } = useLayoutCustomizerActiveEditor();
  const { requestEdit } = useLayoutEditRequest();
  const { has_customizations } = useHasLayoutCustomizations();
  useEffect2(() => {
    const state = location.state ?? null;
    const pending = state?.customize;
    if (!pending) {
      return;
    }
    requestEdit(pending);
    const { customize: _customize, ...rest } = state;
    navigate(location.pathname, {
      replace: true,
      state: Object.keys(rest).length ? rest : void 0
    });
  }, [location, navigate, requestEdit]);
  const onSelect = useCallback3(
    (host) => {
      if (host.isMounted(location.pathname)) {
        requestEdit(host.id);
        return;
      }
      navigate(host.navigateTo ?? location.pathname, {
        state: { ...location.state, customize: host.id }
      });
    },
    [location, navigate, requestEdit]
  );
  if (activeEditor) {
    return null;
  }
  return /* @__PURE__ */ jsxs4(DropdownMenu, { children: [
    /* @__PURE__ */ jsx5(Tooltip, { content: t("layout.customizeLayout"), children: /* @__PURE__ */ jsx5(DropdownMenu.Trigger, { asChild: true, children: /* @__PURE__ */ jsx5(
      IconButton2,
      {
        size: "small",
        variant: "transparent",
        "aria-label": t("layout.customizeLayout"),
        className: "text-ui-fg-muted hover:text-ui-fg-subtle",
        children: has_customizations ? /* @__PURE__ */ jsx5(AdjustmentsDone, {}) : /* @__PURE__ */ jsx5(Adjustments, {})
      }
    ) }) }),
    /* @__PURE__ */ jsx5(DropdownMenu.Content, { children: HOSTS.map((host) => /* @__PURE__ */ jsx5(DropdownMenu.Item, { onClick: () => onSelect(host), children: t(host.labelKey) }, host.id)) })
  ] });
};

// src/components/common/json-view-section/json-view-section.tsx
import {
  ArrowUpRightOnBox,
  Check,
  SquareTwoStack,
  TriangleDownMini,
  XMarkMini
} from "@medusajs/icons";
import {
  Badge as Badge2,
  Container,
  Drawer,
  Heading,
  IconButton as IconButton3,
  Kbd
} from "@medusajs/ui";
import Primitive from "@uiw/react-json-view";
import { Suspense, useState as useState3 } from "react";
import { Trans, useTranslation as useTranslation6 } from "react-i18next";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var JsonViewSection = ({ data }) => {
  const { t } = useTranslation6();
  const numberOfKeys = Object.keys(data).length;
  return /* @__PURE__ */ jsxs5(Container, { className: "flex items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsx6(Heading, { level: "h2", children: t("json.header") }),
      /* @__PURE__ */ jsx6(Badge2, { size: "2xsmall", rounded: "full", children: t("json.numberOfKeys", {
        count: numberOfKeys
      }) })
    ] }),
    /* @__PURE__ */ jsxs5(Drawer, { children: [
      /* @__PURE__ */ jsx6(Drawer.Trigger, { asChild: true, children: /* @__PURE__ */ jsx6(
        IconButton3,
        {
          size: "small",
          variant: "transparent",
          className: "text-ui-fg-muted hover:text-ui-fg-subtle",
          children: /* @__PURE__ */ jsx6(ArrowUpRightOnBox, {})
        }
      ) }),
      /* @__PURE__ */ jsxs5(
        Drawer.Content,
        {
          dir: "ltr",
          className: "bg-ui-contrast-bg-base text-ui-code-fg-subtle !shadow-elevation-commandbar overflow-hidden border border-none max-md:inset-x-2 max-md:max-w-[calc(100%-16px)]",
          children: [
            /* @__PURE__ */ jsxs5("div", { className: "bg-ui-code-bg-base flex items-center justify-between px-6 py-4", children: [
              /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-x-4", children: [
                /* @__PURE__ */ jsx6(Drawer.Title, { asChild: true, children: /* @__PURE__ */ jsx6(Heading, { className: "text-ui-contrast-fg-primary", children: /* @__PURE__ */ jsx6(
                  Trans,
                  {
                    i18nKey: "json.drawer.header",
                    count: numberOfKeys,
                    components: [
                      /* @__PURE__ */ jsx6("span", { className: "text-ui-fg-subtle" }, "count-span")
                    ]
                  }
                ) }) }),
                /* @__PURE__ */ jsx6(Drawer.Description, { className: "sr-only", children: t("json.drawer.description") })
              ] }),
              /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-x-2", children: [
                /* @__PURE__ */ jsx6(Kbd, { className: "bg-ui-contrast-bg-subtle border-ui-contrast-border-base text-ui-contrast-fg-secondary", children: "esc" }),
                /* @__PURE__ */ jsx6(Drawer.Close, { asChild: true, children: /* @__PURE__ */ jsx6(
                  IconButton3,
                  {
                    size: "small",
                    variant: "transparent",
                    className: "text-ui-contrast-fg-secondary hover:text-ui-contrast-fg-primary hover:bg-ui-contrast-bg-base-hover active:bg-ui-contrast-bg-base-pressed focus-visible:bg-ui-contrast-bg-base-hover focus-visible:shadow-borders-interactive-with-active",
                    children: /* @__PURE__ */ jsx6(XMarkMini, {})
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsx6(Drawer.Body, { className: "flex flex-1 flex-col overflow-hidden px-[5px] py-0 pb-[5px]", children: /* @__PURE__ */ jsx6("div", { className: "bg-ui-contrast-bg-subtle flex-1 overflow-auto rounded-b-[4px] rounded-t-lg p-3", children: /* @__PURE__ */ jsx6(
              Suspense,
              {
                fallback: /* @__PURE__ */ jsx6("div", { className: "flex size-full flex-col" }),
                children: /* @__PURE__ */ jsxs5(
                  Primitive,
                  {
                    value: data,
                    displayDataTypes: false,
                    style: {
                      "--w-rjv-font-family": "Roboto Mono, monospace",
                      "--w-rjv-line-color": "var(--contrast-border-base)",
                      "--w-rjv-curlybraces-color": "var(--contrast-fg-secondary)",
                      "--w-rjv-brackets-color": "var(--contrast-fg-secondary)",
                      "--w-rjv-key-string": "var(--contrast-fg-primary)",
                      "--w-rjv-info-color": "var(--contrast-fg-secondary)",
                      "--w-rjv-type-string-color": "var(--tag-green-icon)",
                      "--w-rjv-quotes-string-color": "var(--tag-green-icon)",
                      "--w-rjv-type-boolean-color": "var(--tag-orange-icon)",
                      "--w-rjv-type-int-color": "var(--tag-orange-icon)",
                      "--w-rjv-type-float-color": "var(--tag-orange-icon)",
                      "--w-rjv-type-bigint-color": "var(--tag-orange-icon)",
                      "--w-rjv-key-number": "var(--contrast-fg-secondary)",
                      "--w-rjv-arrow-color": "var(--contrast-fg-secondary)",
                      "--w-rjv-copied-color": "var(--contrast-fg-secondary)",
                      "--w-rjv-copied-success-color": "var(--contrast-fg-primary)",
                      "--w-rjv-colon-color": "var(--contrast-fg-primary)",
                      "--w-rjv-ellipsis-color": "var(--contrast-fg-secondary)"
                    },
                    collapsed: 1,
                    children: [
                      /* @__PURE__ */ jsx6(Primitive.Quote, { render: () => /* @__PURE__ */ jsx6("span", {}) }),
                      /* @__PURE__ */ jsx6(
                        Primitive.Null,
                        {
                          render: () => /* @__PURE__ */ jsx6("span", { className: "text-ui-tag-red-icon", children: "null" })
                        }
                      ),
                      /* @__PURE__ */ jsx6(
                        Primitive.Undefined,
                        {
                          render: () => /* @__PURE__ */ jsx6("span", { className: "text-ui-tag-blue-icon", children: "undefined" })
                        }
                      ),
                      /* @__PURE__ */ jsx6(
                        Primitive.CountInfo,
                        {
                          render: (_props, { value }) => {
                            return /* @__PURE__ */ jsx6("span", { className: "text-ui-contrast-fg-secondary ml-2", children: t("general.items", {
                              count: Object.keys(value).length
                            }) });
                          }
                        }
                      ),
                      /* @__PURE__ */ jsx6(Primitive.Arrow, { children: /* @__PURE__ */ jsx6(TriangleDownMini, { className: "text-ui-contrast-fg-secondary -ml-[0.5px]" }) }),
                      /* @__PURE__ */ jsx6(Primitive.Colon, { children: /* @__PURE__ */ jsx6("span", { className: "mr-1", children: ":" }) }),
                      /* @__PURE__ */ jsx6(
                        Primitive.Copied,
                        {
                          render: ({ style }, { value }) => {
                            return /* @__PURE__ */ jsx6(Copied, { style, value });
                          }
                        }
                      )
                    ]
                  }
                )
              }
            ) }) })
          ]
        }
      )
    ] })
  ] });
};
var Copied = ({ style, value }) => {
  const [copied, setCopied] = useState3(false);
  const handler = (e) => {
    e.stopPropagation();
    setCopied(true);
    if (typeof value === "string") {
      navigator.clipboard.writeText(value);
    } else {
      const json = JSON.stringify(value, null, 2);
      navigator.clipboard.writeText(json);
    }
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  const styl = { whiteSpace: "nowrap", width: "20px" };
  if (copied) {
    return /* @__PURE__ */ jsx6("span", { style: { ...style, ...styl }, children: /* @__PURE__ */ jsx6(Check, { className: "text-ui-contrast-fg-primary" }) });
  }
  return /* @__PURE__ */ jsx6("span", { style: { ...style, ...styl }, onClick: handler, children: /* @__PURE__ */ jsx6(SquareTwoStack, { className: "text-ui-contrast-fg-secondary" }) });
};

// src/components/common/metadata-section/metadata-section.tsx
import { ArrowUpRightOnBox as ArrowUpRightOnBox2 } from "@medusajs/icons";
import { Badge as Badge3, Container as Container2, Heading as Heading2, IconButton as IconButton4 } from "@medusajs/ui";
import { useTranslation as useTranslation7 } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var MetadataSection = ({
  data,
  href = "metadata/edit"
}) => {
  const { t } = useTranslation7();
  if (!data) {
    return null;
  }
  if (!("metadata" in data)) {
    return null;
  }
  const numberOfKeys = data.metadata ? Object.keys(data.metadata).length : 0;
  return /* @__PURE__ */ jsxs6(Container2, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs6("div", { className: "flex items-center gap-x-3", children: [
      /* @__PURE__ */ jsx7(Heading2, { level: "h2", children: t("metadata.header") }),
      /* @__PURE__ */ jsx7(Badge3, { size: "2xsmall", rounded: "full", children: t("metadata.numberOfKeys", {
        count: numberOfKeys
      }) })
    ] }),
    /* @__PURE__ */ jsx7(
      IconButton4,
      {
        size: "small",
        variant: "transparent",
        className: "text-ui-fg-muted hover:text-ui-fg-subtle",
        asChild: true,
        children: /* @__PURE__ */ jsx7(Link, { to: href, children: /* @__PURE__ */ jsx7(ArrowUpRightOnBox2, {}) })
      }
    )
  ] });
};

// src/components/common/required-permissions-section/required-permissions-section.tsx
import { Badge as Badge4, Container as Container3, Heading as Heading3, Text as Text2 } from "@medusajs/ui";
import { useTranslation as useTranslation8 } from "react-i18next";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var RequiredPermissionsSection = () => {
  const { t } = useTranslation8();
  const isRbacEnabled = useFeatureFlag("rbac");
  const requirements = useRequiredPermissions();
  if (!isRbacEnabled) {
    return null;
  }
  if (!requirements.length) {
    return /* @__PURE__ */ jsxs7(Container3, { className: "flex flex-col gap-y-2 px-6 py-4", children: [
      /* @__PURE__ */ jsx8(Heading3, { level: "h2", children: t("permissions.requiredPermissions.title") }),
      /* @__PURE__ */ jsx8(Text2, { size: "small", className: "text-ui-fg-subtle", children: t("permissions.requiredPermissions.none") })
    ] });
  }
  return /* @__PURE__ */ jsxs7(Container3, { className: "flex flex-col gap-y-3 px-6 py-4", children: [
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx8(Heading3, { level: "h2", children: t("permissions.requiredPermissions.title") }),
      /* @__PURE__ */ jsx8(Badge4, { size: "2xsmall", rounded: "full", children: requirements.length })
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "flex flex-col gap-y-3", children: requirements.map((requirement) => {
      const key = [
        requirement.requireAll ? "all" : "any",
        requirement.permissions.join("|"),
        requirement.source || ""
      ].join("::");
      return /* @__PURE__ */ jsxs7("div", { className: "flex flex-col gap-y-2", children: [
        /* @__PURE__ */ jsx8(Text2, { size: "small", className: "text-ui-fg-subtle", children: requirement.requireAll ? t("permissions.requiredPermissions.allOf") : t("permissions.requiredPermissions.anyOf") }),
        /* @__PURE__ */ jsx8("div", { className: "flex flex-wrap gap-1.5", children: requirement.permissions.map((permission) => /* @__PURE__ */ jsx8(Badge4, { size: "2xsmall", children: permission }, permission)) }),
        requirement.source && /* @__PURE__ */ jsx8(Text2, { size: "xsmall", className: "text-ui-fg-muted", children: t("permissions.requiredPermissions.source", {
          source: requirement.source
        }) })
      ] }, key);
    }) })
  ] });
};

// src/components/layout-composer/detail-page-defaults.tsx
import { Fragment as Fragment5, jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function detailPageDefaultEntries(data, {
  metadata = true,
  jsonView = true,
  permissions = true
} = {}) {
  return /* @__PURE__ */ jsxs8(Fragment5, { children: [
    metadata && /* @__PURE__ */ jsx9(LayoutComposer.Entry, { id: "MetadataSection", children: /* @__PURE__ */ jsx9(MetadataSection, { data }) }),
    jsonView && /* @__PURE__ */ jsx9(LayoutComposer.Entry, { id: "JsonViewSection", children: /* @__PURE__ */ jsx9(JsonViewSection, { data }) }),
    permissions && /* @__PURE__ */ jsx9(LayoutComposer.Entry, { id: "RequiredPermissionsSection", children: /* @__PURE__ */ jsx9(RequiredPermissionsSection, {}) })
  ] });
}

export {
  LayoutCustomizerHostContext,
  LayoutEntry,
  LayoutEditContext,
  LAYOUT_CONTROLS_LOCATION,
  CUSTOMIZE_IDS,
  LayoutComposer,
  CustomizerMenu,
  JsonViewSection,
  MetadataSection,
  RequiredPermissionsSection,
  detailPageDefaultEntries
};
