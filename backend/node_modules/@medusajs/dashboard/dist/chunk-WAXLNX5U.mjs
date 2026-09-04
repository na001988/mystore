import {
  useDataTableDateColumns
} from "./chunk-4T4MNG4Z.mjs";
import {
  useDataTableDateFilters
} from "./chunk-V2OKIIO7.mjs";
import {
  useQueryParams
} from "./chunk-C76H5USB.mjs";
import {
  DataTableStatusCell
} from "./chunk-ZY7CAOHZ.mjs";

// src/components/data-table/helpers/sales-channels/use-sales-channel-table-columns.tsx
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { createDataTableColumnHelper, Tooltip } from "@medusajs/ui";
import { jsx } from "react/jsx-runtime";
var columnHelper = createDataTableColumnHelper();
var useSalesChannelTableColumns = () => {
  const { t } = useTranslation();
  const dateColumns = useDataTableDateColumns();
  return useMemo(
    () => [
      columnHelper.accessor("name", {
        header: () => t("fields.name"),
        enableSorting: true,
        sortLabel: t("fields.name"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      }),
      columnHelper.accessor("description", {
        header: () => t("fields.description"),
        cell: ({ getValue }) => {
          return /* @__PURE__ */ jsx(Tooltip, { content: getValue(), children: /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "truncate", children: getValue() }) }) });
        },
        enableSorting: true,
        sortLabel: t("fields.description"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc"),
        maxSize: 250,
        minSize: 100
      }),
      columnHelper.accessor("is_disabled", {
        header: () => t("fields.status"),
        enableSorting: true,
        sortLabel: t("fields.status"),
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc"),
        cell: ({ getValue }) => {
          const value = getValue();
          return /* @__PURE__ */ jsx(DataTableStatusCell, { color: value ? "grey" : "green", children: value ? t("general.disabled") : t("general.enabled") });
        }
      }),
      ...dateColumns
    ],
    [t, dateColumns]
  );
};

// src/components/data-table/helpers/sales-channels/use-sales-channel-table-empty-state.tsx
import { useMemo as useMemo2 } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
var useSalesChannelTableEmptyState = () => {
  const { t } = useTranslation2();
  return useMemo2(() => {
    const content = {
      empty: {
        heading: t("salesChannels.list.empty.heading"),
        description: t("salesChannels.list.empty.description")
      },
      filtered: {
        heading: t("salesChannels.list.filtered.heading"),
        description: t("salesChannels.list.filtered.description")
      }
    };
    return content;
  }, [t]);
};

// src/components/data-table/helpers/sales-channels/use-sales-channel-table-filters.tsx
import { createDataTableFilterHelper } from "@medusajs/ui";
import { useMemo as useMemo3 } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
var filterHelper = createDataTableFilterHelper();
var useSalesChannelTableFilters = () => {
  const { t } = useTranslation3();
  const dateFilters = useDataTableDateFilters();
  return useMemo3(
    () => [
      filterHelper.accessor("is_disabled", {
        label: t("fields.status"),
        type: "radio",
        options: [
          {
            label: t("general.enabled"),
            value: "false"
          },
          {
            label: t("general.disabled"),
            value: "true"
          }
        ]
      }),
      ...dateFilters
    ],
    [dateFilters, t]
  );
};

// src/components/data-table/helpers/sales-channels/use-sales-channel-table-query.tsx
var useSalesChannelTableQuery = ({
  prefix,
  pageSize = 20
}) => {
  const queryObject = useQueryParams(
    ["offset", "q", "order", "created_at", "updated_at", "is_disabled"],
    prefix
  );
  const { offset, created_at, updated_at, is_disabled, ...rest } = queryObject;
  const searchParams = {
    limit: pageSize,
    offset: offset ? Number(offset) : 0,
    created_at: created_at ? JSON.parse(created_at) : void 0,
    updated_at: updated_at ? JSON.parse(updated_at) : void 0,
    is_disabled: is_disabled ? JSON.parse(is_disabled) : void 0,
    ...rest
  };
  return searchParams;
};

export {
  useSalesChannelTableColumns,
  useSalesChannelTableEmptyState,
  useSalesChannelTableFilters,
  useSalesChannelTableQuery
};
