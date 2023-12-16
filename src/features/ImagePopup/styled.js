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
    padding-right: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding-bottom: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    padding-left: 5px;
  }
`;

export const PopupImage = styled.img`
  position: absolute;
  left: 58%;
  transform: translateY(-110%);
  max-width: 45vw;


  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVertical}px) {
    left: 48%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    left: 35%;
    transform: translateY(-120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    left: 20%;
    max-width: 55vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    left: 10%;
    max-width: 60vw;
  }
`;
