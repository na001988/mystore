import {
  AddCampaignPromotionForm
} from "./chunk-GM7O3GDJ.mjs";
import "./chunk-5LYKG777.mjs";
import "./chunk-3TZOFKX2.mjs";
import "./chunk-53MXUSIR.mjs";
import "./chunk-IUCDCPJU.mjs";
import "./chunk-6HTZNHPT.mjs";
import "./chunk-ZH57KBU7.mjs";
import {
  RouteDrawer
} from "./chunk-ZUBJF5QL.mjs";
import "./chunk-H7AAHR2V.mjs";
import "./chunk-OBQI23QM.mjs";
import {
  usePromotion
} from "./chunk-3C2RPYDJ.mjs";
import "./chunk-YDJ774GR.mjs";
import "./chunk-SKQPG6BC.mjs";
import "./chunk-S4DMV3ZT.mjs";
import "./chunk-SEMVMECK.mjs";
import "./chunk-NFEK63OE.mjs";
import "./chunk-QZ7TP4HQ.mjs";

// src/routes/promotions/promotion-add-campaign/promotion-add-campaign.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PromotionAddCampaign = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { promotion, isPending, isError, error } = usePromotion(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(RouteDrawer, { children: [
    /* @__PURE__ */ jsx(RouteDrawer.Header, { children: /* @__PURE__ */ jsx(Heading, { children: t("promotions.campaign.edit.header") }) }),
    !isPending && promotion && /* @__PURE__ */ jsx(AddCampaignPromotionForm, { promotion })
  ] });
};
export {
  PromotionAddCampaign as Component
};
