import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.backgroundCream};
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.text.primaryOrange};
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 30px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    font-size: 20px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.primaryText};
  font-size: 50px;
  line-height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 35px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 173px 0px 173px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    width: 100%;
  }
`;

export const StyledImageFrame4 = styled.img`
  max-width: auto;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;

export const StyledImageFrame5 = styled.img`
  max-width: auto;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;
