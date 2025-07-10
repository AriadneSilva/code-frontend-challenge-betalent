import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem auto 0;
  width: 100%;
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
export const AddNewPersonButton = styled.button`
  align-items: center;
  background: var(--blue-primary);
  border-radius: 0.25rem;
  color: var(--white);
  display: flex;
  font-size: 0.875rem;
  font-weight: bold;
  height: 2.25rem;
  justify-content: space-between;
  line-height: 120%;
  margin: 0 8px;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  width: 12rem;

  svg {
    margin-right: 0.5rem;
  }
`;

export const SubheaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  width: 100%;
`;

export const MoreFiltersContainer = styled.div`
  background: var(--white);
  border: 1px solid var(--gray-20);
  border-radius: 0.25rem;
  box-shadow: 0.1875rem 0.1875rem 0.5rem rgba(0, 0, 0, 0.16);
  padding: 1rem;
  position: absolute;
  width: 13.125rem;
  height: 10rem;

  h3 {
    color: var(--gray-60);
    font-weight: bold;
    font-size: 1rem;
    line-height: 1rem;
    margin: 2rem 0 1rem;
    text-transform: uppercase;

    &:first-of-type {
      margin-top: 0;
    }
  }

  > div {
    margin: 2rem 0 1rem 0;

    &:first-of-type {
      margin-top: 0;
    }

    label {
      margin: 1rem 0;
    }
  }
`;

export const PaginationContainer = styled.div`
  border-top: 1px solid var(--gray-20);
  display: flex;
  width: 90%;
  margin: 0 auto 6rem;
  justify-content: space-between;
  align-items: center;

  > button {
    cursor: pointer;
    padding-top: 25px;
    display: flex;
    gap: 8px;
    align-items: center;
    background: none;
    text-transform: uppercase;
    border: 0;

    > span {
      color: var(--gray-80);
      font-size: 14px;
      text-decoration: underline;
      line-height: 16.4px;
    }

    > svg {
      height: 18px;
      width: 18px;
      color: var(--gray-80);
    }

    &:disabled {
      cursor: not-allowed;

      > span {
        color: var(--gray-40);
      }

      > svg {
        color: var(--gray-40);
      }
    }
  }
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  flex: 1;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
