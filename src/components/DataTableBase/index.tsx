import DataTable, { TableProps } from "react-data-table-component";

import { TableWrapper } from "./styles";

export function DataTableBase<T>(props: TableProps<T>) {
  return (
    <TableWrapper>
      <DataTable
        selectableRowsHighlight
        highlightOnHover={true}
        pointerOnHover={true}
        {...props}
      />
    </TableWrapper>
  );
}
