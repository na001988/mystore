import "./chunk-XRTVFYCW.mjs";
import {
  MetadataForm
} from "./chunk-UEZBIZRM.mjs";
import "./chunk-IUCDCPJU.mjs";
import "./chunk-6HTZNHPT.mjs";
import "./chunk-LPEUYMRK.mjs";
import "./chunk-ZUBJF5QL.mjs";
import "./chunk-H7AAHR2V.mjs";
import "./chunk-OBQI23QM.mjs";
import {
  useCustomer,
  useUpdateCustomer
} from "./chunk-6OFSUHM5.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-S4DMV3ZT.mjs";
import "./chunk-SEMVMECK.mjs";
import "./chunk-NFEK63OE.mjs";
import "./chunk-QZ7TP4HQ.mjs";

// src/routes/customers/customer-metadata/customer-metadata.tsx
import { useParams } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
var CustomerMetadata = () => {
  const { id } = useParams();
  const { customer, isPending, isError, error } = useCustomer(id);
  const { mutateAsync, isPending: isMutating } = useUpdateCustomer(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(
    MetadataForm,
    {
      metadata: customer?.metadata,
      hook: mutateAsync,
      isPending,
      isMutating
    }
  );
};
export {
  CustomerMetadata as Component
};
