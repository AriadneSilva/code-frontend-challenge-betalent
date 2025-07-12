import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  margin: 0rem 1rem;
  box-shadow: 0px 1px 2px 0px #00000033;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 1rem;
`;

export const ToggleButton = styled.div`
  display: flex;
  align-items: center;
`;

export const Details = styled.div`
  padding: 1rem;

  p {
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.font.size.h2};
  color: ${({ theme }) => theme.colors.text};
`;

export const Value = styled.span`
  font-size: ${({ theme }) => theme.font.size.h3};
  color: ${({ theme }) => theme.colors.text};
`;
export const Icon = styled.div`
  position: absolute;
  right: 3rem;
`;
