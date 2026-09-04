import {
  StatusCell
} from "./chunk-YXKJWSF3.mjs";
import {
  TextCell
} from "./chunk-DRHDNSJA.mjs";
import {
  defineCellRenderer,
  registerCellResolver
} from "./chunk-IHA2XWHD.mjs";

// src/routes/promotions/promotion-list/components/promotion-list-table/promotion-list-table-renderers.tsx
import { jsx } from "react/jsx-runtime";
defineCellRenderer("promotion_method", {
  render: (_value, row, _column, t) => {
    const isAutomatic = row.is_automatic;
    return /* @__PURE__ */ jsx(
      TextCell,
      {
        text: isAutomatic ? t("promotions.form.method.automatic.title") : t("promotions.form.method.code.title")
      }
    );
  }
});
registerCellResolver("promotion_status", (_value, row) => /* @__PURE__ */ jsx(StatusCell, { promotion: row }));
