// src/components/common/truncated-text/truncated-text.tsx
import { Tooltip, clx } from "@medusajs/ui";
import { useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
var TruncatedText = ({ text, className }) => {
  const ref = useRef(null);
  const [overflow, setOverflow] = useState(false);
  const check = () => {
    const el = ref.current;
    if (el) {
      setOverflow(el.scrollWidth > el.clientWidth);
    }
  };
  return (
    // Cap the tooltip's width and break long unbroken strings so the text
    // wraps inside the bubble instead of overflowing it.
    /* @__PURE__ */ jsx(
      Tooltip,
      {
        content: text,
        hidden: !overflow,
        className: "max-w-[360px] break-words",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            ref,
            onMouseEnter: check,
            className: clx("min-w-0 truncate", className),
            children: text
          }
        )
      }
    )
  );
};

export {
  TruncatedText
};
