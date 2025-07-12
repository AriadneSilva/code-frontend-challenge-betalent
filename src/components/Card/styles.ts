import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  margin: 0rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;

export const Info = styled.div`
  // display: flex;
  // align-items: center;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Avatar = styled.img`
  // width: 40px;
  // height: 40px;
  // border-radius: 50%;
  // object-fit: cover;
  // margin-right: 1rem;

  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }
`;

export const ToggleButton = styled.div`
  display: flex;
  align-items: center;
`;

export const Details = styled.div`
  // padding: 1rem;

  p {
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
  }

  font-size: 0.875rem;
  color: #444;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 3.25rem;

  @media (min-width: 768px) {
    padding-left: 0;
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
