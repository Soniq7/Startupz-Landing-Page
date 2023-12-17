import styled from "styled-components";

export const Wrap = styled.div``;

export const MainImage = styled.img`
  padding-left: 120px;
  max-width: 170%;
  height: auto;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVertical}px) {
    padding-left: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 0px 90px 0px 0px;
    max-width: 190%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding: 0px 90px 80px 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    padding: 0px 80px 80px 5px;
    max-width: 170%;
  }
`;

export const PopupImage = styled.img`
  position: absolute;
  left: 59%;
  transform: translateY(-110%);
  max-width: 45vw;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopScreen}px) {
    left: 60.5%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVertical}px) {
    left: 48%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    left: 35%;
    transform: translateY(-120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    left: 25%;
    transform: translateY(-110%);
    max-width: 55vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    left: 10%;
    max-width: 60vw;
  }
`;
