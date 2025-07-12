import styled from "styled-components";

export const SearchContainerIcon = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 0.6rem 0rem 0.6rem 0.3rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 1rem;
  top: 45%;
  transform: translateY(-50%);
  color: #888;
`;
