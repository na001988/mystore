import {
  VisuallyHidden
} from "./chunk-F6ZOHZVB.mjs";
import {
  DataGrid,
  createDataGridHelper
} from "./chunk-EKFNZ5JS.mjs";
import "./chunk-IUCDCPJU.mjs";
import {
  KeyboundForm
} from "./chunk-6HTZNHPT.mjs";
import "./chunk-LPEUYMRK.mjs";
import "./chunk-ZH57KBU7.mjs";
import "./chunk-ZUBJF5QL.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-H7AAHR2V.mjs";
import "./chunk-OBQI23QM.mjs";
import "./chunk-OC7BQLYI.mjs";
import "./chunk-S4DMV3ZT.mjs";
import {
  useEntityColumns,
  viewsQueryKeys
} from "./chunk-ACQJSQ5A.mjs";
import {
  queryClient,
  queryKeysFactory
} from "./chunk-SEMVMECK.mjs";
import {
  sdk
} from "./chunk-NFEK63OE.mjs";
import "./chunk-QZ7TP4HQ.mjs";

// src/routes/property-labels/property-labels-edit/property-labels-edit.tsx
import { useParams } from "react-router-dom";

// src/hooks/api/property-labels.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var PROPERTY_LABELS_QUERY_KEY = "property_labels";
var propertyLabelsQueryKeys = queryKeysFactory(
  PROPERTY_LABELS_QUERY_KEY
);
var usePropertyLabels = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.propertyLabel.list(query),
    queryKey: propertyLabelsQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useBatchPropertyLabels = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.propertyLabel.batch(payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: propertyLabelsQueryKeys.all });
      queryClient.invalidateQueries({
        queryKey: viewsQueryKeys.columns()
      });
      queryClient.invalidateQueries({ queryKey: viewsQueryKeys.entities() });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

// src/routes/property-labels/components/property-labels-edit-form.tsx
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, toast } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var isLeafNode = (obj) => {
  if (typeof obj !== "object" || obj === null) return false;
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.every((key) => key === "label" || key === "description");
};
var propertyLabelValueSchema = z.object({
  label: z.string().optional(),
  description: z.string().optional()
});
var propertyLabelSchema = z.lazy(
  () => z.record(z.string(), z.any()).superRefine((obj, ctx) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (isLeafNode(value)) {
        const result = propertyLabelValueSchema.safeParse(value);
        if (!result.success) {
          result.error.issues.forEach((issue) => {
            ctx.addIssue({
              ...issue,
              path: [key, ...issue.path]
            });
          });
        }
        const typedValue = value;
        if (typedValue.description && typedValue.description.trim() !== "") {
          if (!typedValue.label || typedValue.label.trim() === "") {
            ctx.addIssue({
              code: "custom",
              message: "Label is required when description is provided",
              path: [key, "label"]
            });
          }
        }
      } else if (typeof value === "object" && value !== null) {
        const result = propertyLabelSchema.safeParse(value);
        if (!result.success) {
          result.error.issues.forEach((issue) => {
            ctx.addIssue({
              ...issue,
              path: [key, ...issue.path]
            });
          });
        }
      }
    });
  })
);
var columnHelper = createDataGridHelper();
var PropertyLabelsEditForm = ({
  entity,
  columns,
  propertyLabels
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const batchMutation = useBatchPropertyLabels();
  const buildNestedInitialData = (labels) => {
    const result = {};
    labels.forEach((label) => {
      const parts = label.property.split(".");
      let current = result;
      parts.forEach((part, index) => {
        if (index === parts.length - 1) {
          current[part] = {
            label: label.label,
            description: label.description || ""
          };
        } else {
          if (!current[part]) {
            current[part] = {};
          }
          current = current[part];
        }
      });
    });
    return result;
  };
  const initialData = buildNestedInitialData(propertyLabels);
  const form = useForm({
    resolver: zodResolver(propertyLabelSchema),
    defaultValues: initialData
  });
  const rows = useMemo(() => {
    return columns.map((column) => ({
      field: column.field
    }));
  }, [columns]);
  const gridColumns = useMemo(() => {
    return [
      columnHelper.column({
        id: "field",
        name: "field",
        header: t("fields.field", "Field"),
        cell: (context) => {
          const row = context.row.original;
          return /* @__PURE__ */ jsx(DataGrid.ReadonlyCell, { context, children: row.field });
        },
        disableHiding: true,
        minSize: 250
      }),
      columnHelper.column({
        id: "label",
        name: "label",
        header: t("propertyLabels.customLabel", "Custom Label"),
        type: "text",
        field: (context) => {
          const row = context.row.original;
          return `${row.field}.label`;
        },
        cell: (context) => {
          return /* @__PURE__ */ jsx(DataGrid.TextCell, { context });
        },
        disableHiding: true,
        minSize: 250
      }),
      columnHelper.column({
        id: "description",
        name: "description",
        header: t("fields.description", "Description"),
        type: "multiline-text",
        field: (context) => {
          const row = context.row.original;
          return `${row.field}.description`;
        },
        cell: (context) => {
          return /* @__PURE__ */ jsx(DataGrid.MultilineCell, { context });
        },
        minSize: 400
      })
    ];
  }, [t]);
  const flattenData = (obj, prefix = "") => {
    const results = [];
    Object.entries(obj).forEach(([key, value]) => {
      const fullPath = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === "object") {
        const keys = Object.keys(value);
        const isLeaf = keys.every((k) => k === "label" || k === "description");
        if (isLeaf) {
          results.push([fullPath, value]);
        } else {
          results.push(...flattenData(value, fullPath));
        }
      }
    });
    return results;
  };
  const handleSubmit = form.handleSubmit(async (data) => {
    const create = [];
    const update = [];
    const deleteIds = [];
    const labelMap = /* @__PURE__ */ new Map();
    propertyLabels?.forEach((label) => {
      labelMap.set(label.property, label);
    });
    const flatEntries = flattenData(data);
    flatEntries.forEach(([property, values]) => {
      const existingLabel = labelMap.get(property);
      const newLabel = values.label?.trim();
      const newDescription = values.description?.trim();
      if (newLabel) {
        if (existingLabel) {
          if (existingLabel.label !== newLabel || (existingLabel.description || "") !== (newDescription || "")) {
            update.push({
              id: existingLabel.id,
              label: newLabel,
              description: newDescription ?? null
            });
          }
        } else {
          create.push({
            entity,
            property,
            label: newLabel,
            description: newDescription || void 0
          });
        }
      } else if (existingLabel) {
        deleteIds.push(existingLabel.id);
      }
    });
    if (!create.length && !update.length && !deleteIds.length) {
      return;
    }
    await batchMutation.mutateAsync(
      {
        create: create.length > 0 ? create : void 0,
        update: update.length > 0 ? update : void 0,
        delete: deleteIds.length > 0 ? deleteIds : void 0
      },
      {
        onSuccess: () => {
          toast.success(
            t(
              "propertyLabels.updateSuccess",
              "Property labels updated successfully"
            )
          );
          handleSuccess();
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    KeyboundForm,
    {
      onSubmit: handleSubmit,
      className: "flex size-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs(RouteFocusModal.Header, { children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Title, { asChild: true, children: /* @__PURE__ */ jsx(VisuallyHidden, { children: t("propertyLabels.editTitle", "Edit Property Labels") }) }),
          /* @__PURE__ */ jsx(RouteFocusModal.Description, { asChild: true, children: /* @__PURE__ */ jsx(VisuallyHidden, { children: t(
            "propertyLabels.editDescription",
            "Customize how property names are displayed for {{entity}}",
            { entity }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "overflow-hidden", children: /* @__PURE__ */ jsx(DataGrid, { columns: gridColumns, data: rows, state: form }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", type: "button", children: t("actions.cancel", "Cancel") }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              isLoading: batchMutation.isPending,
              disabled: !form.formState.isDirty,
              children: t("actions.save", "Save")
            }
          )
        ] }) })
      ]
    }
  ) });
};

// src/routes/property-labels/property-labels-edit/property-labels-edit.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var PropertyLabelsEdit = () => {
  const { entity } = useParams();
  const {
    columns,
    isLoading: isLoadingColumns,
    isError: isColumnsError,
    error: columnsError
  } = useEntityColumns(entity);
  const {
    property_labels,
    isLoading: isLoadingLabels,
    isError: isLabelsError,
    error: labelsError
  } = usePropertyLabels({
    entity
  });
  if (isColumnsError) {
    throw columnsError;
  }
  if (isLabelsError) {
    throw labelsError;
  }
  const isLoading = isLoadingColumns || isLoadingLabels;
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: !isLoading && columns && property_labels && /* @__PURE__ */ jsx2(
    PropertyLabelsEditForm,
    {
      entity,
      columns,
      propertyLabels: property_labels
    }
  ) });
};
export {
  PropertyLabelsEdit as Component
};
