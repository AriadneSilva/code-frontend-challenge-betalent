import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  overflow-x: auto;

  .rdt_Table {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .rdt_TableRow {
    transition: background-color 0.2s ease-in-out;
  }

  .rdt_TableRow:hover {
    background-color: #f9f9f9;
  }

  .rdt_TableCell {
    padding: 12px;
  }
`;
