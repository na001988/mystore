import {
  DescriptionCell
} from "./chunk-EWVOEKUL.mjs";
import {
  TextCell
} from "./chunk-DRHDNSJA.mjs";
import {
  DateCell
} from "./chunk-EJWRAUTW.mjs";
import {
  DataTableStatusCell
} from "./chunk-ZY7CAOHZ.mjs";

// src/hooks/table/columns/use-product-tag-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useProductTagTableColumns = () => {
  const { t } = useTranslation();
  return useMemo(
    () => [
      columnHelper.accessor("value", {
        header: () => t("fields.value"),
        cell: ({ getValue }) => /* @__PURE__ */ jsx(TextCell, { text: getValue() })
      }),
      columnHelper.accessor("created_at", {
        header: () => t("fields.createdAt"),
        cell: ({ getValue }) => {
          return /* @__PURE__ */ jsx(DateCell, { date: getValue() });
        }
      }),
      columnHelper.accessor("updated_at", {
        header: () => t("fields.updatedAt"),
        cell: ({ getValue }) => {
          return /* @__PURE__ */ jsx(DateCell, { date: getValue() });
        }
      })
    ],
    [t]
  );
};

// src/hooks/table/columns/use-refund-reason-table-columns.tsx
import { useMemo as useMemo2 } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { createDataTableColumnHelper } from "@medusajs/ui";
import { jsx as jsx2 } from "react/jsx-runtime";
var columnHelper2 = createDataTableColumnHelper();
var useRefundReasonTableColumns = () => {
  const { t } = useTranslation2();
  return useMemo2(
    () => [
      columnHelper2.accessor("label", {
        header: () => t("fields.label"),
        enableSorting: true,
        sortLabel: t("fields.label"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      }),
      columnHelper2.accessor("code", {
        header: () => t("fields.code"),
        enableSorting: true,
        sortLabel: t("fields.code"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      }),
      columnHelper2.accessor("description", {
        header: () => t("fields.description"),
        cell: ({ getValue }) => /* @__PURE__ */ jsx2(DescriptionCell, { description: getValue() }),
        enableSorting: true,
        sortLabel: t("fields.description"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      })
    ],
    [t]
  );
};

// src/hooks/table/columns/use-return-reason-table-columns.tsx
import { useMemo as useMemo3 } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { createDataTableColumnHelper as createDataTableColumnHelper2 } from "@medusajs/ui";
import { jsx as jsx3 } from "react/jsx-runtime";
var columnHelper3 = createDataTableColumnHelper2();
var useReturnReasonTableColumns = () => {
  const { t } = useTranslation3();
  return useMemo3(
    () => [
      columnHelper3.accessor("label", {
        header: () => t("fields.label"),
        enableSorting: true,
        sortLabel: t("fields.label"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      }),
      columnHelper3.accessor("value", {
        header: () => t("fields.value"),
        enableSorting: true,
        sortLabel: t("fields.value"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      }),
      columnHelper3.accessor("description", {
        header: () => t("fields.description"),
        cell: ({ getValue }) => /* @__PURE__ */ jsx3(DescriptionCell, { description: getValue() }),
        enableSorting: true,
        sortLabel: t("fields.description"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      })
    ],
    [t]
  );
};

// src/hooks/table/columns/use-property-labels-table-columns.tsx
import { createDataTableColumnHelper as createDataTableColumnHelper3 } from "@medusajs/ui";
import { useMemo as useMemo4 } from "react";
import { useTranslation as useTranslation4 } from "react-i18next";
import { PencilSquare } from "@medusajs/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { jsx as jsx4 } from "react/jsx-runtime";
var columnHelper4 = createDataTableColumnHelper3();
var usePropertyLabelsTableColumns = () => {
  const { t } = useTranslation4();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  return useMemo4(
    () => [
      columnHelper4.accessor("module", {
        header: () => t("propertyLabels.fields.module"),
        enableSorting: true,
        sortLabel: t("propertyLabels.fields.module"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      }),
      columnHelper4.accessor("name", {
        header: () => t("propertyLabels.fields.model"),
        enableSorting: true,
        sortLabel: t("propertyLabels.fields.model"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      }),
      columnHelper4.accessor("propertyCount", {
        header: () => t("propertyLabels.fields.propertyCount")
      }),
      columnHelper4.accessor("hasOverrides", {
        header: () => t("propertyLabels.fields.hasOverrides"),
        cell: ({ getValue }) => {
          const value = getValue();
          return /* @__PURE__ */ jsx4(DataTableStatusCell, { color: value ? "green" : "grey", children: value ? t("filters.radio.yes") : t("filters.radio.no") });
        }
      }),
      columnHelper4.action({
        actions: (ctx) => [
          {
            label: t("actions.edit"),
            icon: /* @__PURE__ */ jsx4(PencilSquare, {}),
            onClick: () => {
              const params = searchParams.toString();
              navigate(
                `/settings/property-labels/${ctx.row.original.name}/edit`,
                params ? { state: { restore_params: params } } : void 0
              );
            }
          }
        ]
      })
    ],
    [t, navigate, searchParams]
  );
};

// src/hooks/table/columns/use-tax-rates-table-columns.tsx
import { createColumnHelper as createColumnHelper2 } from "@tanstack/react-table";
import { useMemo as useMemo5 } from "react";
import { useTranslation as useTranslation5 } from "react-i18next";

// src/components/table/table-cells/taxes/type-cell/type-cell.tsx
import { Badge } from "@medusajs/ui";
import { jsx as jsx5 } from "react/jsx-runtime";

// src/hooks/table/columns/use-tax-rates-table-columns.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var columnHelper5 = createColumnHelper2();

export {
  useProductTagTableColumns,
  useRefundReasonTableColumns,
  useReturnReasonTableColumns,
  usePropertyLabelsTableColumns
};
