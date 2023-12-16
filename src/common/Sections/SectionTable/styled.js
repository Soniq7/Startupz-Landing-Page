import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.backgroundCream};
  height: 714px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    height: auto;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 120px;
  width: 876px;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.text.primaryOrange};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    width: 90%;
    font-size: 20px;
    height: auto;
    padding-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  line-height: 50px;
  padding: 50px 0px 40px 0px;
  margin: 0px;
  color: ${({ theme }) => theme.colors.text.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    height: auto;
    padding-bottom: 30px;
    font-size: 40px;
    line-height: 40px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding: 50px 60px 40px 0px;
  }
`;

export const Body = styled.div`
  margin-top: 80px;
  margin-left: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-left: 120%;
  transform: translateY(140%);

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin-left: 80%;
    transform: translateY(70%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: 80%;
    transform: translateY(90%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    margin-left: 70%;
    transform: translateY(110%);
  }
`;
