import {
  PlaceholderCell
} from "./chunk-P3UUX2T6.mjs";
import {
  DataTableStatusIndicator
} from "./chunk-ZY7CAOHZ.mjs";

// src/components/table/table-cells/product/collection-cell/collection-cell.tsx
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var CollectionCell = ({ collection }) => {
  if (!collection) {
    return /* @__PURE__ */ jsx(PlaceholderCell, {});
  }
  return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "truncate", children: collection.title }) });
};
var CollectionHeader = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx("span", { children: t("fields.collection") }) });
};

// src/components/table/table-cells/product/product-status-cell/product-status-cell.tsx
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2 } from "react/jsx-runtime";
var ProductStatusCell = ({ status }) => {
  const { t } = useTranslation2();
  const variant = {
    draft: ["grey", t("products.productStatus.draft")],
    proposed: ["orange", t("products.productStatus.proposed")],
    published: ["green", t("products.productStatus.published")],
    rejected: ["red", t("products.productStatus.rejected")]
  }[status];
  if (!variant) {
    return /* @__PURE__ */ jsx2(PlaceholderCell, {});
  }
  const [color, text] = variant;
  return /* @__PURE__ */ jsx2(DataTableStatusIndicator, { className: "w-[92px]", color, children: text });
};
var ProductStatusHeader = () => {
  const { t } = useTranslation2();
  return /* @__PURE__ */ jsx2("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx2("span", { children: t("fields.status") }) });
};

// src/components/table/table-cells/product/variant-cell/variant-cell.tsx
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsx as jsx3 } from "react/jsx-runtime";
var VariantCell = ({ variants }) => {
  const { t } = useTranslation3();
  if (!variants || !variants.length) {
    return /* @__PURE__ */ jsx3(PlaceholderCell, {});
  }
  return /* @__PURE__ */ jsx3("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx3("span", { className: "truncate", children: t("products.variantCount", { count: variants.length }) }) });
};
var VariantHeader = () => {
  const { t } = useTranslation3();
  return /* @__PURE__ */ jsx3("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx3("span", { children: t("fields.variants") }) });
};

export {
  CollectionCell,
  CollectionHeader,
  ProductStatusCell,
  ProductStatusHeader,
  VariantCell,
  VariantHeader
};
