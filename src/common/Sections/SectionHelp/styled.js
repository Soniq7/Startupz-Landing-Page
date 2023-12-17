import styled from "styled-components";

export const StyledSection = styled.section`
  height: 350px;
  overflow: hidden;
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.text.primaryOrange};
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
  margin-top: 130px;
  margin-left: 180px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin-left: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVertical}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    word-wrap: break-word;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: 25px;
    margin-top: 90px;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImageThumb1 = styled.img`
  margin-right: 50px;
  margin-bottom: 25px;
  height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVertical}px) {
    max-width: 10%;
    height: auto;
    margin: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    margin: auto;
  }
`;

export const StyledImageThumb2 = styled.img`
  margin-left: 50px;
  margin-bottom: 25px;
  height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVertical}px) {
    max-width: 10%;
    height: auto;
    margin: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    margin: auto;
  }
`;
