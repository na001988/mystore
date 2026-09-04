import {
  useRequireRbacFeature
} from "./chunk-Q7IJ6TPC.mjs";
import {
  parseFilterParam
} from "./chunk-3UMI3ISU.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-CEYKNZTH.mjs";
import "./chunk-WRSGHGAT.mjs";
import "./chunk-MOSRJHJ3.mjs";
import "./chunk-R65S6ZZV.mjs";
import {
  useDataTableDateFilters
} from "./chunk-V2OKIIO7.mjs";
import {
  DataTable
} from "./chunk-2ONQ56DK.mjs";
import {
  useQueryParams
} from "./chunk-C76H5USB.mjs";
import {
  LayoutComposer
} from "./chunk-Z3OGJXAM.mjs";
import "./chunk-HFX2KPQD.mjs";
import "./chunk-5SZFF255.mjs";
import "./chunk-PJU3RODH.mjs";
import {
  useDate
} from "./chunk-3BQAAPDR.mjs";
import "./chunk-QJ63TWAK.mjs";
import {
  useRbacPolicies
} from "./chunk-ZB3WPQQA.mjs";
import "./chunk-2V5DOTI3.mjs";
import "./chunk-OZPB6JBL.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-S4DMV3ZT.mjs";
import "./chunk-ACQJSQ5A.mjs";
import "./chunk-SEMVMECK.mjs";
import "./chunk-NFEK63OE.mjs";
import "./chunk-QZ7TP4HQ.mjs";

// src/routes/policies/policy-list/policy-list.tsx
import { CORE_LAYOUT_IDS } from "@medusajs/admin-shared";

// src/routes/policies/policy-list/components/policy-list-table/policy-list-table.tsx
import {
  Container,
  createDataTableColumnHelper,
  createDataTableFilterHelper
} from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var PolicyListTable = () => {
  const { t } = useTranslation();
  const { q, order, offset, created_at, resource, operation } = useQueryParams([
    "q",
    "order",
    "offset",
    "created_at",
    "resource",
    "operation"
  ]);
  const { policies, count, isPending, isError, error } = useRbacPolicies(
    {
      q,
      order,
      offset: offset ? parseInt(offset) : void 0,
      limit: PAGE_SIZE,
      created_at: parseFilterParam(created_at),
      resource: parseFilterParam(resource),
      operation: parseFilterParam(operation),
      fields: "id,key,resource,operation,name,description,created_at,updated_at"
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const columns = useColumns();
  const filters = useFilters();
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(Container, { className: "divide-y p-0", children: /* @__PURE__ */ jsx(
    DataTable,
    {
      data: policies,
      columns,
      filters,
      getRowId: (row) => row.id,
      rowHref: (row) => `${row.id}`,
      rowCount: count,
      pageSize: PAGE_SIZE,
      heading: t("policies.domain"),
      subHeading: t("policies.subtitle"),
      isLoading: isPending,
      emptyState: {
        empty: {
          heading: t("policies.list.empty.heading"),
          description: t("policies.list.empty.description")
        },
        filtered: {
          heading: t("policies.list.filtered.heading"),
          description: t("policies.list.filtered.description")
        }
      }
    }
  ) });
};
var columnHelper = createDataTableColumnHelper();
var useColumns = () => {
  const { t } = useTranslation();
  const { getFullDate } = useDate();
  return useMemo(() => {
    return [
      columnHelper.accessor("key", {
        header: t("fields.key"),
        enableSorting: true,
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc")
      }),
      columnHelper.accessor("resource", {
        header: t("fields.resource"),
        enableSorting: true,
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc"),
        cell: ({ row }) => {
          const resource = row.original.resource;
          return t(`permissions.resources.${resource}`, {
            defaultValue: resource
          });
        }
      }),
      columnHelper.accessor("operation", {
        header: t("fields.operation"),
        enableSorting: true,
        sortAscLabel: t("filters.sorting.alphabeticallyAsc"),
        sortDescLabel: t("filters.sorting.alphabeticallyDesc"),
        cell: ({ row }) => {
          const operation = row.original.operation;
          return t(`permissions.actions.${operation}`, {
            defaultValue: operation
          });
        }
      }),
      columnHelper.accessor("description", {
        header: t("fields.description"),
        cell: ({ row }) => row.original.description || "-"
      }),
      columnHelper.accessor("created_at", {
        header: t("fields.createdAt"),
        cell: ({ row }) => /* @__PURE__ */ jsx("span", { children: getFullDate({ date: row.original.created_at }) }),
        enableSorting: true,
        sortAscLabel: t("filters.sorting.dateAsc"),
        sortDescLabel: t("filters.sorting.dateDesc")
      })
      // columnHelper.action({
      //   actions: (ctx) => {
      //     const policy = ctx.row.original
      //     const groups: {
      //       label: string
      //       icon: React.ReactNode
      //       onClick: () => void
      //     }[][] = []
      //
      //     if (hasPermission("rbac_policy:update")) {
      //       groups.push([
      //         {
      //           label: t("actions.edit"),
      //           icon: <PencilSquare />,
      //           onClick: () => handleEdit(policy),
      //         },
      //       ])
      //     }
      //
      //     if (hasPermission("rbac_policy:delete")) {
      //       groups.push([
      //         {
      //           label: t("actions.delete"),
      //           icon: <Trash />,
      //           onClick: () => handleDelete(policy),
      //         },
      //       ])
      //     }
      //
      //     return groups as any
      //   },
      // }),
    ];
  }, [t, getFullDate]);
};
var filterHelper = createDataTableFilterHelper();
var useFilters = () => {
  const dateFilters = useDataTableDateFilters();
  const { t } = useTranslation();
  return useMemo(() => {
    return [
      ...dateFilters.filter((filter) => filter.id === "created_at"),
      filterHelper.accessor("resource", {
        type: "string",
        label: t("fields.resource")
      }),
      filterHelper.accessor("operation", {
        type: "string",
        label: t("fields.operation")
      })
    ];
  }, [dateFilters, t]);
};

// src/routes/policies/policy-list/policy-list.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var PolicyList = () => {
  const isRbacEnabled = useRequireRbacFeature();
  if (!isRbacEnabled) {
    return null;
  }
  return /* @__PURE__ */ jsx2(
    LayoutComposer,
    {
      widgetsZonePrefix: "policy.list",
      preferredLayoutId: CORE_LAYOUT_IDS.SINGLE_COLUMN,
      sections: {
        main: /* @__PURE__ */ jsx2(LayoutComposer.Entry, { id: "PolicyListTable", children: /* @__PURE__ */ jsx2(PolicyListTable, {}) })
      }
    }
  );
};
export {
  PolicyList as Component
};
