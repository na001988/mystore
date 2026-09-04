import {
  useDateTableFilters
} from "./chunk-W7625H47.mjs";
import {
  useDataTableDateFilters
} from "./chunk-V2OKIIO7.mjs";

// src/hooks/table/filters/use-collection-table-filters.tsx
var useCollectionTableFilters = () => {
  const dateFilters = useDateTableFilters();
  return dateFilters;
};

// src/hooks/table/filters/use-product-option-table-filters.tsx
import { useTranslation } from "react-i18next";
import { createDataTableFilterHelper } from "@medusajs/ui";
import { useMemo } from "react";
var filterHelper = createDataTableFilterHelper();
var useProductOptionTableFilters = () => {
  const { t } = useTranslation();
  const dateFilters = useDataTableDateFilters();
  return useMemo(
    () => [
      filterHelper.accessor("is_exclusive", {
        label: t("fields.type"),
        type: "radio",
        options: [
          {
            label: t("general.exclusive"),
            value: "true"
          },
          {
            label: t("general.global"),
            value: "false"
          }
        ]
      }),
      ...dateFilters
    ],
    [dateFilters, t]
  );
};

// src/hooks/table/filters/use-product-tag-table-filters.tsx
var useProductTagTableFilters = () => {
  const dateFilters = useDateTableFilters();
  return dateFilters;
};

// src/hooks/table/filters/use-shipping-option-table-filters.tsx
import { useTranslation as useTranslation2 } from "react-i18next";
var useShippingOptionTableFilters = (locations) => {
  const { t } = useTranslation2();
  const locationFilter = {
    key: "stock_location_id",
    label: t("fields.location"),
    type: "select",
    options: locations.map((l) => ({ label: l.name, value: l.id }))
  };
  const dateFilters = [
    { label: t("fields.createdAt"), key: "created_at" },
    { label: t("fields.updatedAt"), key: "updated_at" }
  ].map((f) => ({
    key: f.key,
    label: f.label,
    type: "date"
  }));
  const filters = [locationFilter, ...dateFilters];
  return filters;
};

// src/hooks/table/filters/use-tax-rate-table-filters.tsx
import { useTranslation as useTranslation3 } from "react-i18next";

export {
  useCollectionTableFilters,
  useProductOptionTableFilters,
  useProductTagTableFilters,
  useShippingOptionTableFilters
};
