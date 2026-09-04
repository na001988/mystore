import {
  usePropertyLabelsTableColumns
} from "./chunk-MNWGU2PO.mjs";
import "./chunk-ATKJ6XLW.mjs";
import "./chunk-5O5AS65I.mjs";
import "./chunk-E374BFNY.mjs";
import "./chunk-GSZPEFBC.mjs";
import "./chunk-IHVAPHYF.mjs";
import "./chunk-EWVOEKUL.mjs";
import "./chunk-K44PQXQY.mjs";
import "./chunk-ZLSETY5W.mjs";
import "./chunk-IR5DHEKS.mjs";
import "./chunk-ADOCJB6L.mjs";
import "./chunk-DRHDNSJA.mjs";
import "./chunk-Y4T75RAV.mjs";
import "./chunk-3DUKCSX3.mjs";
import "./chunk-EJWRAUTW.mjs";
import "./chunk-42NRZXK4.mjs";
import "./chunk-NTEWUH4C.mjs";
import "./chunk-DBJBDAZN.mjs";
import "./chunk-XEEPMJRY.mjs";
import "./chunk-P5RN6AUG.mjs";
import "./chunk-QDH4NZOQ.mjs";
import "./chunk-P3UUX2T6.mjs";
import "./chunk-DG7J63J2.mjs";
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
import "./chunk-ZH57KBU7.mjs";
import "./chunk-ZY7CAOHZ.mjs";
import "./chunk-3BQAAPDR.mjs";
import "./chunk-MNXC6Q4F.mjs";
import "./chunk-QJ63TWAK.mjs";
import "./chunk-OZPB6JBL.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-S4DMV3ZT.mjs";
import {
  useEntities
} from "./chunk-ACQJSQ5A.mjs";
import "./chunk-SEMVMECK.mjs";
import "./chunk-NFEK63OE.mjs";
import "./chunk-QZ7TP4HQ.mjs";

// src/routes/property-labels/property-labels.tsx
import { CORE_LAYOUT_IDS } from "@medusajs/admin-shared";

// src/routes/property-labels/components/property-labels-list.tsx
import { Container, Heading, Text } from "@medusajs/ui";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 15;
var PREFIX = "pl";
var PropertyLabelsList = () => {
  const { t } = useTranslation();
  const { entities, isPending, isError, error } = useEntities();
  const columns = usePropertyLabelsTableColumns();
  const { offset, order } = useQueryParams(["offset", "order"], PREFIX);
  const start = offset ? parseInt(offset, 10) : 0;
  const { field, desc } = useMemo(() => {
    const value = order || "module";
    return value.startsWith("-") ? { field: value.slice(1), desc: true } : { field: value, desc: false };
  }, [order]);
  const paginatedEntities = useMemo(() => {
    const sorted = [...entities ?? []].sort((a, b) => {
      const comparison = String(a[field] ?? "").localeCompare(
        String(b[field] ?? "")
      );
      return desc ? -comparison : comparison;
    });
    return sorted.slice(start, start + PAGE_SIZE);
  }, [entities, field, desc, start]);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: t("propertyLabels.title") }),
      /* @__PURE__ */ jsx(Text, { children: t("propertyLabels.subtitle") })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        columns,
        enablePagination: true,
        enableSearch: false,
        data: paginatedEntities,
        rowCount: entities?.length ?? 0,
        pageSize: PAGE_SIZE,
        prefix: PREFIX,
        isLoading: isPending,
        getRowId: (row) => `${row.module}-${row.name}`
      }
    )
  ] });
};

// src/routes/property-labels/property-labels.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var PropertyLabels = () => {
  return /* @__PURE__ */ jsx2(
    LayoutComposer,
    {
      widgetsZonePrefix: "property_label.list",
      preferredLayoutId: CORE_LAYOUT_IDS.SINGLE_COLUMN,
      sections: {
        main: /* @__PURE__ */ jsx2(LayoutComposer.Entry, { id: "PropertyLabelListTable", children: /* @__PURE__ */ jsx2(PropertyLabelsList, {}) })
      }
    }
  );
};
export {
  PropertyLabels as Component
};
