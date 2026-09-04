import {
  CollectionCell,
  CollectionHeader,
  ProductStatusCell,
  ProductStatusHeader,
  VariantCell,
  VariantHeader
} from "./chunk-DBJBDAZN.mjs";
import {
  ProductCell,
  ProductHeader
} from "./chunk-XEEPMJRY.mjs";
import {
  PlaceholderCell
} from "./chunk-P3UUX2T6.mjs";

// src/hooks/table/columns/use-product-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

// src/components/table/table-cells/product/sales-channels-cell/sales-channels-cell.tsx
import { Tooltip } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var SalesChannelsCell = ({
  salesChannels
}) => {
  const { t } = useTranslation();
  const validChannels = salesChannels?.filter(
    (sc) => sc != null
  );
  if (!validChannels || !validChannels.length) {
    return /* @__PURE__ */ jsx(PlaceholderCell, {});
  }
  if (validChannels.length > 2) {
    return /* @__PURE__ */ jsxs("div", { className: "flex h-full w-full items-center gap-x-1 overflow-hidden", children: [
      /* @__PURE__ */ jsx("span", { className: "truncate", children: validChannels.slice(0, 2).map((sc) => sc.name).join(", ") }),
      /* @__PURE__ */ jsx(
        Tooltip,
        {
          content: /* @__PURE__ */ jsx("ul", { children: validChannels.slice(2).map((sc) => /* @__PURE__ */ jsx("li", { children: sc.name }, sc.id)) }),
          children: /* @__PURE__ */ jsx("span", { className: "text-xs", children: t("general.plusCountMore", {
            count: validChannels.length - 2
          }) })
        }
      )
    ] });
  }
  const channels = validChannels.map((sc) => sc.name).join(", ");
  return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full max-w-[250px] items-center overflow-hidden", children: /* @__PURE__ */ jsx("span", { title: channels, className: "truncate", children: channels }) });
};
var SalesChannelHeader = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center", children: /* @__PURE__ */ jsx("span", { children: t("fields.salesChannels") }) });
};

// src/hooks/table/columns/use-product-table-columns.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useProductTableColumns = () => {
  return useMemo(
    () => [
      columnHelper.display({
        id: "product",
        header: () => /* @__PURE__ */ jsx2(ProductHeader, {}),
        cell: ({ row }) => /* @__PURE__ */ jsx2(ProductCell, { product: row.original })
      }),
      columnHelper.accessor("collection", {
        header: () => /* @__PURE__ */ jsx2(CollectionHeader, {}),
        cell: ({ row }) => /* @__PURE__ */ jsx2(CollectionCell, { collection: row.original.collection })
      }),
      columnHelper.accessor("sales_channels", {
        header: () => /* @__PURE__ */ jsx2(SalesChannelHeader, {}),
        cell: ({ row }) => /* @__PURE__ */ jsx2(SalesChannelsCell, { salesChannels: row.original.sales_channels })
      }),
      columnHelper.accessor("variants", {
        header: () => /* @__PURE__ */ jsx2(VariantHeader, {}),
        cell: ({ row }) => /* @__PURE__ */ jsx2(VariantCell, { variants: row.original.variants })
      }),
      columnHelper.accessor("status", {
        header: () => /* @__PURE__ */ jsx2(ProductStatusHeader, {}),
        cell: ({ row }) => /* @__PURE__ */ jsx2(ProductStatusCell, { status: row.original.status })
      })
    ],
    []
  );
};

export {
  useProductTableColumns
};
