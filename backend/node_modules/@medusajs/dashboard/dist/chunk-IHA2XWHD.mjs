import {
  DisplayIdCell,
  TotalCell
} from "./chunk-3DUKCSX3.mjs";
import {
  DateCell
} from "./chunk-EJWRAUTW.mjs";
import {
  getOrderFulfillmentStatus,
  getOrderPaymentStatus
} from "./chunk-NTEWUH4C.mjs";
import {
  CollectionCell,
  ProductStatusCell,
  VariantCell
} from "./chunk-DBJBDAZN.mjs";
import {
  ProductCell
} from "./chunk-XEEPMJRY.mjs";
import {
  TruncatedText
} from "./chunk-P5RN6AUG.mjs";
import {
  getCountryByIso2
} from "./chunk-DG7J63J2.mjs";
import {
  DataTableStatusIndicator
} from "./chunk-ZY7CAOHZ.mjs";

// src/lib/table/cell-renderers.tsx
import React from "react";
import { Badge, Tooltip } from "@medusajs/ui";
import ReactCountryFlag from "react-country-flag";
import { ArrowUpRightOnBox } from "@medusajs/icons";

// src/lib/is-empty.ts
var isEmpty = (value) => {
  return value === null || value === void 0 || typeof value === "string" && value.trim() === "";
};

// src/lib/table/cell-renderers.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var cellRenderers = /* @__PURE__ */ new Map();
var cellResolvers = /* @__PURE__ */ new Map();
function registerCellResolver(key, resolver) {
  cellResolvers.set(key, resolver);
}
function getCellResolver(key) {
  return key ? cellResolvers.get(key) : void 0;
}
var getNestedValue = (obj, path) => {
  return path.split(".").reduce((current, key) => current?.[key], obj);
};
var TextRenderer = (value, _row, _column, _t) => {
  if (isEmpty(value)) {
    return "-";
  }
  return String(value);
};
var HandleRenderer = (value, _row, _column, _t) => {
  if (isEmpty(value)) {
    return "-";
  }
  return `/${value}`;
};
var CountRenderer = (value, row, column, t) => {
  let resolvedValue = value;
  const listField = column?.metadata?.list_field;
  const showItemsLabel = column?.metadata?.show_items_label === true;
  if (listField) {
    const relation = row[listField];
    resolvedValue = Array.isArray(relation) ? relation.length : relation;
  }
  if (Array.isArray(resolvedValue)) {
    return showItemsLabel ? t("general.items", { count: resolvedValue.length }) : resolvedValue.length;
  }
  if (typeof resolvedValue === "number") {
    return showItemsLabel ? t("general.items", { count: resolvedValue }) : resolvedValue;
  }
  return showItemsLabel ? t("general.items", { count: 0 }) : 0;
};
var renderStatusPill = (variant, fallbackLabel, t) => {
  const label = variant.label_key ? t(variant.label_key, variant.label ?? fallbackLabel) : variant.label ?? fallbackLabel;
  return /* @__PURE__ */ jsx(DataTableStatusIndicator, { color: variant.color ?? "grey", children: label });
};
var StatusRenderer = (value, row, column, t) => {
  const metadata = column.metadata ?? {};
  const rawValue = metadata.value_field !== void 0 ? getNestedValue(row, metadata.value_field) : value;
  const resolver = getCellResolver(metadata.resolver);
  if (resolver) {
    const resolved = resolver(rawValue, row, t);
    if (isEmpty(resolved)) {
      return "-";
    }
    if (React.isValidElement(resolved)) {
      return resolved;
    }
    return renderStatusPill(
      resolved,
      String(rawValue ?? ""),
      t
    );
  }
  const variants = metadata.status_variants;
  if (variants) {
    const variant = variants[String(rawValue)];
    if (variant) {
      return renderStatusPill(variant, String(rawValue), t);
    }
  }
  if (isEmpty(rawValue)) {
    return "-";
  }
  return /* @__PURE__ */ jsx(DataTableStatusIndicator, { color: "grey", children: String(rawValue) });
};
var BadgesRenderer = (value, row, column, t) => {
  const metadata = column.metadata ?? {};
  const maxVisible = typeof metadata.max_visible === "number" ? metadata.max_visible : 2;
  const resolveLabel = (item) => {
    if (isEmpty(item)) {
      return "";
    }
    if (typeof item === "string" || typeof item === "number") {
      return String(item);
    }
    if (metadata.display_field) {
      return item[metadata.display_field] ?? "";
    }
    return item.name || item.title || item.value || "";
  };
  const resolved = metadata.list_field ? row[metadata.list_field] : value;
  if (!Array.isArray(resolved)) {
    const label = resolveLabel(resolved);
    return label ? /* @__PURE__ */ jsx("div", { className: "flex min-w-0", children: /* @__PURE__ */ jsx(Badge, { size: "xsmall", className: "min-w-0", children: /* @__PURE__ */ jsx(TruncatedText, { text: label }) }) }) : "-";
  }
  const items = resolved.filter((item) => item !== null && item !== void 0);
  if (items.length === 0) {
    return "-";
  }
  const visible = items.slice(0, maxVisible);
  const remaining = items.length - maxVisible;
  return /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-1", children: [
    visible.map((item, index) => /* @__PURE__ */ jsx(Badge, { size: "xsmall", className: "min-w-0", children: /* @__PURE__ */ jsx(TruncatedText, { text: resolveLabel(item) }) }, index)),
    remaining > 0 && /* @__PURE__ */ jsx(
      Tooltip,
      {
        content: /* @__PURE__ */ jsx("ul", { children: items.slice(maxVisible).map((item, index) => /* @__PURE__ */ jsx("li", { children: resolveLabel(item) }, index)) }),
        children: /* @__PURE__ */ jsx(Badge, { size: "xsmall", color: "grey", className: "shrink-0", children: t ? t("general.plusCountMore", "+ {{count}} more", {
          count: remaining
        }) : `+${remaining}` })
      }
    )
  ] });
};
var ProductInfoRenderer = (_, row, _column, _t) => {
  return /* @__PURE__ */ jsx(ProductCell, { product: row });
};
var CollectionRenderer = (_, row, _column, _t) => {
  return /* @__PURE__ */ jsx(CollectionCell, { collection: row.collection });
};
var VariantsRenderer = (_, row, _column, _t) => {
  return /* @__PURE__ */ jsx(VariantCell, { variants: row.variants });
};
var NameRenderer = (_, row, column, t) => {
  const metadata = column.metadata ?? {};
  const source = metadata.name_source ? getNestedValue(row, metadata.name_source) : row;
  const name = [source?.first_name, source?.last_name].filter(Boolean).join(" ").trim();
  if (name) {
    return name;
  }
  const fallbackFields = metadata.fallback_fields ?? [];
  for (const path of fallbackFields) {
    const fallbackValue = getNestedValue(row, path);
    if (fallbackValue) {
      return fallbackValue;
    }
  }
  if (metadata.empty_label_key && t) {
    return t(metadata.empty_label_key, metadata.empty_label ?? "-");
  }
  return "-";
};
var AddressRenderer = (_, row, column, _t) => {
  const address = column.metadata?.address_field ? getNestedValue(row, column.metadata.address_field) : void 0;
  if (!address || typeof address !== "object") {
    return "-";
  }
  const separator = column.metadata?.separator ?? " \u2022 ";
  const parts = [];
  if (address.address_1) {
    parts.push(address.address_1);
  }
  if (address.address_2) {
    parts.push(address.address_2);
  }
  const locality = [address.city, address.province, address.postal_code].filter(Boolean).join(", ");
  if (locality) {
    parts.push(locality);
  }
  if (address.country_code) {
    parts.push(address.country_code.toUpperCase());
  }
  const full = parts.join(separator);
  if (!full) {
    return "-";
  }
  return /* @__PURE__ */ jsx(TruncatedText, { text: full, className: "max-w-[220px]" });
};
var CountryCodeRenderer = (_, row, column, _t) => {
  const countryCode = getNestedValue(
    row,
    column.metadata?.country_code_field ?? ""
  );
  if (!countryCode) {
    return "-";
  }
  const country = getCountryByIso2(countryCode);
  const displayName = country?.display_name || countryCode.toUpperCase();
  return /* @__PURE__ */ jsx(Tooltip, { content: displayName, children: /* @__PURE__ */ jsx("div", { className: "flex size-4 items-center justify-center overflow-hidden rounded-sm", children: /* @__PURE__ */ jsx(
    ReactCountryFlag,
    {
      countryCode: countryCode.toUpperCase(),
      svg: true,
      style: {
        width: "16px",
        height: "16px"
      },
      "aria-label": displayName
    }
  ) }) });
};
var DateRenderer = (value, _row, _column, _t) => {
  return /* @__PURE__ */ jsx(DateCell, { date: value });
};
var DisplayIdRenderer = (value, _row, _column, _t) => {
  return /* @__PURE__ */ jsx(DisplayIdCell, { displayId: value });
};
var CurrencyRenderer = (value, row, _column, _t) => {
  return /* @__PURE__ */ jsx(TotalCell, { currencyCode: row.currency_code || "USD", total: value });
};
var NumberRenderer = (value, _row, _column, _t) => {
  if (isEmpty(value)) {
    return "-";
  }
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) {
    return "-";
  }
  return num.toLocaleString();
};
var BooleanRenderer = (value, _row, _column, t) => {
  if (isEmpty(value)) {
    return "-";
  }
  const label = value ? t ? t("fields.yes", "Yes") : "Yes" : t ? t("fields.no", "No") : "No";
  return /* @__PURE__ */ jsx(Badge, { size: "xsmall", color: value ? "green" : "grey", children: label });
};
var IdRenderer = (value, _row, _column, _t) => {
  return TextRenderer(value, _row, _column, _t);
};
var EmailRenderer = (value, _row, _column, _t) => {
  if (!value) {
    return "-";
  }
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: `mailto:${value}`,
      className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover",
      onClick: (e) => e.stopPropagation(),
      children: value
    }
  );
};
var PhoneRenderer = (value, _row, _column, _t) => {
  if (!value) {
    return "-";
  }
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: `tel:${value}`,
      className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover",
      onClick: (e) => e.stopPropagation(),
      children: value
    }
  );
};
var UrlRenderer = (value, _row, _column, _t) => {
  if (!value) {
    return "-";
  }
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: value,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover flex items-center gap-1",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsx(TruncatedText, { text: value, className: "max-w-[200px]" }),
        /* @__PURE__ */ jsx(ArrowUpRightOnBox, { className: "h-3 w-3 flex-shrink-0" })
      ]
    }
  );
};
var ImageRenderer = (value, _row, _column, _t) => {
  if (!value) {
    return "-";
  }
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: value,
      alt: "",
      className: "h-8 w-8 rounded object-cover",
      onError: (e) => {
        ;
        e.target.style.display = "none";
      }
    }
  );
};
var JsonRenderer = (value, _row, _column, _t) => {
  if (isEmpty(value)) {
    return "-";
  }
  const jsonString = typeof value === "string" ? value : JSON.stringify(value);
  const truncated = jsonString.length > 50 ? jsonString.substring(0, 47) + "..." : jsonString;
  return /* @__PURE__ */ jsx(
    Tooltip,
    {
      content: /* @__PURE__ */ jsx("pre", { className: "max-w-[400px] overflow-auto text-xs", children: JSON.stringify(value, null, 2) }),
      children: /* @__PURE__ */ jsx("span", { className: "text-ui-fg-subtle cursor-help font-mono text-xs", children: truncated })
    }
  );
};
cellRenderers.set("text", { render: TextRenderer });
cellRenderers.set("handle", { render: HandleRenderer });
cellRenderers.set("count", { render: CountRenderer });
cellRenderers.set("status", { render: StatusRenderer, truncateTooltip: false });
cellRenderers.set("date", { render: DateRenderer });
cellRenderers.set("timestamp", { render: DateRenderer });
cellRenderers.set("currency", { render: CurrencyRenderer, align: "right" });
cellRenderers.set("number", { render: NumberRenderer, align: "right" });
cellRenderers.set("boolean", {
  render: BooleanRenderer,
  align: "center",
  truncateTooltip: false
});
cellRenderers.set("id", { render: IdRenderer });
cellRenderers.set("email", { render: EmailRenderer });
cellRenderers.set("phone", { render: PhoneRenderer });
cellRenderers.set("url", { render: UrlRenderer, truncateTooltip: false });
cellRenderers.set("image", {
  render: ImageRenderer,
  align: "center",
  truncateTooltip: false
});
cellRenderers.set("json", { render: JsonRenderer, truncateTooltip: false });
cellRenderers.set("datetime", { render: DateRenderer });
cellRenderers.set("badges", { render: BadgesRenderer, truncateTooltip: false });
cellRenderers.set("name", { render: NameRenderer });
cellRenderers.set("address", {
  render: AddressRenderer,
  truncateTooltip: false
});
cellRenderers.set("country_code", {
  render: CountryCodeRenderer,
  align: "center",
  truncateTooltip: false
});
cellRenderers.set("product_info", {
  render: ProductInfoRenderer,
  truncateTooltip: false
});
cellRenderers.set("collection", {
  render: CollectionRenderer,
  truncateTooltip: false
});
cellRenderers.set("variants", {
  render: VariantsRenderer,
  truncateTooltip: false
});
cellRenderers.set("display_id", { render: DisplayIdRenderer });
registerCellResolver("product_status", (value) => /* @__PURE__ */ jsx(ProductStatusCell, { status: value }));
registerCellResolver("order_payment_status", (value, _row, t) => {
  return value ? getOrderPaymentStatus(t, value) : null;
});
registerCellResolver("order_fulfillment_status", (value, _row, t) => {
  return value ? getOrderFulfillmentStatus(t, value) : null;
});
function getCellRenderer(renderType, dataType) {
  const definition = renderType ? cellRenderers.get(renderType) : void 0;
  if (definition) {
    return definition;
  }
  switch (dataType) {
    case "date":
      return { render: DateRenderer };
    case "boolean":
      return { render: BooleanRenderer, align: "center" };
    case "enum":
      return { render: StatusRenderer, align: "center" };
    case "currency":
      return { render: CurrencyRenderer, align: "right" };
    default:
      return { render: TextRenderer };
  }
}
function defineCellRenderer(type, def) {
  cellRenderers.set(type, {
    render: def.render,
    align: def.align,
    truncateTooltip: def.truncateTooltip
  });
}
function getColumnValue(row, column) {
  if (column.computed) {
    return row;
  }
  return getNestedValue(row, column.field);
}

export {
  registerCellResolver,
  getCellRenderer,
  defineCellRenderer,
  getColumnValue
};
