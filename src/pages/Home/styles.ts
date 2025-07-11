import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  h1 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  a {
    color: var(--gray-80);
    text-decoration: none;
  }
`;

export const SearchContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 83.3%;
  min-height: 10rem;
  margin-top: 4.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: rgba(255, 255, 255, 0.75);
  z-index: 4;
`;

export const Avatar = styled.img`
  width: 34px;
  height: 34px;
  top: 8px;
  left: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
