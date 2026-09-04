// src/lib/table/table-adapters.ts
var SELECT_COLUMN_FIELD = "select";
function createSelectColumn() {
  return {
    id: SELECT_COLUMN_FIELD,
    name: "",
    field: SELECT_COLUMN_FIELD,
    sortable: false,
    hideable: false,
    default_visible: true,
    data_type: "string",
    semantic_type: "select",
    context: "display",
    render_mode: "select",
    // Always first.
    default_order: 0,
    filter: { enabled: false },
    category: "computed"
  };
}
var ACTIONS_COLUMN_FIELD = "action";
function createActionsColumn(name) {
  return {
    id: ACTIONS_COLUMN_FIELD,
    name,
    field: ACTIONS_COLUMN_FIELD,
    sortable: false,
    hideable: true,
    default_visible: true,
    data_type: "string",
    semantic_type: "actions",
    context: "display",
    render_mode: "actions",
    // Keep the actions column last by default.
    default_order: 1e5,
    filter: { enabled: false },
    category: "computed"
  };
}
function createTableAdapter(adapter) {
  return {
    // Provide smart defaults
    getRowId: (row) => row.id,
    pageSize: 20,
    queryPrefix: "",
    ...adapter
  };
}

export {
  createSelectColumn,
  createActionsColumn,
  createTableAdapter
};
