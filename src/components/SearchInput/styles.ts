import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 320px;

  &:focus {
    border-color: #4a90e2;
    outline: none;
  }
`;
