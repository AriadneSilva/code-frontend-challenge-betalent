import styled from "styled-components";

export const ListContainer = styled.div`
  // flex-direction: column;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  border-radius: 6px 6px 0px 0px;
  margin: 0 1rem 0rem 1rem;

`;

export const HeaderCell = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const Icon = styled.div`
  position: absolute;
  right: 3rem;
`;
