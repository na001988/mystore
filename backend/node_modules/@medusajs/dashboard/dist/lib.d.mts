import React from 'react';
import { HttpTypes } from '@medusajs/types';
import { TFunction } from 'i18next';
export { T as TableAdapter, c as createTableAdapter } from './table-adapters-DnG5KPvi.mjs';
import '@medusajs/ui';

type CellRenderer<TData = any> = (value: any, row: TData, column: HttpTypes.AdminColumn, t: TFunction) => React.ReactNode;
type CellAlignment = "left" | "center" | "right";
/**
 * Render modes that ship with a built-in cell renderer.
 */
type BuiltInRenderMode = "text" | "handle" | "count" | "status" | "badges" | "date" | "datetime" | "timestamp" | "currency" | "number" | "boolean" | "id" | "email" | "phone" | "url" | "image" | "json" | "product_info" | "collection" | "variants" | "name" | "address" | "country_code" | "display_id";
/**
 * A render mode key. Built-in modes are suggested for autocomplete, but any
 * custom string is accepted.
 */
type RenderMode = BuiltInRenderMode | (string & {});
/**
 * A cell renderer plus the alignment it renders best at.
 */
type CellRendererDefinition<TData = any> = {
    render: CellRenderer<TData>;
    align?: CellAlignment;
    /**
     * Whether the data table shows a hover tooltip with the full value when this
     * cell's content is truncated. Set `false` for renderers that manage their
     * own overflow (e.g. they already wrap content in a tooltip). Defaults to
     * `true`. A column can override this via `metadata.truncate_tooltip`.
     */
    truncateTooltip?: boolean;
};
/**
 * Register a cell renderer for a render mode in the global registry.
 */
declare function defineCellRenderer(type: RenderMode, def: CellRendererDefinition): void;

export { type BuiltInRenderMode, type CellAlignment, type CellRenderer, type CellRendererDefinition, type RenderMode, defineCellRenderer };
