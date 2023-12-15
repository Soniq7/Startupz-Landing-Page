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
  margin-left: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVertical}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: 20px;
    margin-top: 120px;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage1 = styled.img`
  margin-right: 50px;
  margin-bottom: 25px;
  height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-right: 30px;
  }
`;

export const StyledImage2 = styled.img`
  margin-left: 50px;
  margin-bottom: 25px;
  height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-left: 30px;
  }
`;
