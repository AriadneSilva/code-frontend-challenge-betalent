import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.white};
  @media (max-width: 768px) {
    padding: 0.6rem;
  }
`;
