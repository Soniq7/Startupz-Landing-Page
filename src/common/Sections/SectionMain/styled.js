import styled from "styled-components";

export const StyledSection = styled.section`
  height: 714px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    padding-bottom: 96px;
  }
`;

export const Header = styled.header`
  margin-top: 160px;
  margin-left: 120px;
  color: ${({ theme }) => theme.colors.text.primaryOrange};
  font-size: 24px;
  line-height: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: 100px auto auto auto;
    width: 90%;
    height: auto;
    font-size: 22px;
    line-height: 28px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.primaryText};
  width: 507px;
  height: 170px;
  font-size: 85px;
  line-height: 85px;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    width: 100%;
    height: auto;
    font-size: 52px;
    line-height: 52px;
    padding-bottom: 30px;
  }
`;

export const Body = styled.div`
  margin: 40px 0px 0px 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    width: 90%;
    padding-top: 40px;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: 41%;
  transform: translateY(-44%);
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin-left: 44%;
    transform: translateY(-8%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVertical}px) {
    margin-left: 26%;
    transform: translateY(-5%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: -5%;
    transform: translateY(20%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    margin-left: -5%;
    transform: translateY(42%);
  }


  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    margin-left: -5%;
    transform: translateY(73%);
  }
`;
