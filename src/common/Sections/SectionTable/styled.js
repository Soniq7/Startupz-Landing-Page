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
  margin-left: 120px;
  height: 50px;
  width: 876px;
  font-size: 24px;
  line-height: 30px;
  padding-right: 40px;
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
  padding: 130px 30px 0px 0px;
  color: ${({ theme }) => theme.colors.text.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    height: auto;
    font-size: 40px;
    line-height: 40px;
    width: 100%;
  }
`;

export const Body = styled.div`
  margin-left: 40px;
  margin-top: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
  }
`;

export const StyledImage = styled.img`
  max-width: 30%;
  height: auto;
  margin-left: 80%;
  transform: translateY(-90%);

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    max-width: 100%;
    margin-left: 80%;
    transform: translateY(-38%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    max-width: 100%;
    margin-left: 70%;
    transform: translateY(-38%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    max-width: 100%;
    margin-left: 60%;
    transform: translateY(-38%);
  }
`;
