import styled from "styled-components";

export const StyledSection = styled.section`
  height: 714px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({theme}) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    padding-bottom: 96px;
  }
`;

export const Header = styled.header`
  margin-top: 190px;
  margin-left: 120px;
  color: ${({theme}) => theme.colors.text.primaryOrange};
  font-size: 24px;
  line-height: 30px;

  @media (max-width: ${({theme}) => theme.breakpoint.tabletHorizontal}px) {
    margin: 190px auto auto auto;
    width: 90%;
    height: auto;
  }
`;

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.text.primaryText};
    width: 507px;
    height: 170px;
    font-size: 85px;
    line-height: 85px;
    margin-bottom: 30px;

    @media (max-width: ${({theme}) => theme.breakpoint.tabletHorizontal}px) {
    margin: auto;
    width: 90%;
    height: auto;
    font-size: 60px;
    line-height: 60px;
    padding-bottom: 30px;
    
  }
`;

export const Body = styled.div`
    margin: 40px 0px 0px 120px;
`;

export const StyledImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateY(-50%);
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletHorizontal}px) {
    transform: translateY(-5%);
  }
`;
