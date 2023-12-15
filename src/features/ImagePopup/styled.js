import styled from "styled-components";

export const MainImage = styled.img`
  padding-left: 130px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export const PopupImage = styled.img`
  position: absolute;
  left: 59%;
  transform: translateY(-110%);
`;
