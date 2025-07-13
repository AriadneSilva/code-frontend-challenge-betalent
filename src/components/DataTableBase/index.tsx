import DataTable, { TableProps } from "react-data-table-component";
import { useTheme } from "styled-components";
import { getTableStyles } from "../../styles/tableTheme";

import { TableWrapper } from "./styles";

export function DataTableBase<T>(props: TableProps<T>) {
  const theme = useTheme();
  const customStyles = getTableStyles(theme);

  return (
    <TableWrapper>
      <DataTable
        selectableRowsHighlight
        highlightOnHover={true}
        customStyles={customStyles}
        noDataComponent={
          <TableWrapper>Nenhum funcionário encontrado.</TableWrapper>
        }
        {...props}
      />
    </TableWrapper>
  );
}
