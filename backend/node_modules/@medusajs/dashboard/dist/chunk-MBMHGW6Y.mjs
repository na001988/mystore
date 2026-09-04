import {
  registerCellResolver
} from "./chunk-IHA2XWHD.mjs";

// src/routes/sales-channels/sales-channel-list/components/sales-channel-table-renderers.tsx
registerCellResolver("sales_channel_status", (value, _row, t) => ({
  color: value ? "grey" : "green",
  label: value ? t("general.disabled") : t("general.enabled")
}));
