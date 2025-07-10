import styled from "styled-components";

export const ThumbnailContainer = styled.div`
  width: 100%;
  justify-content: flex-start;

`;

export const ThumbnailImage = styled.img`
  max-width: 200px;
  height: auto;
  border-radius: 8px;
  border: 1px solid #ccc;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
