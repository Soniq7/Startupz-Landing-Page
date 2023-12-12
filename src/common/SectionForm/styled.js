import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({theme}) => theme.colors.background.backgroundYellow};
    height: 933px;
    position: relative;
    overflow: hidden;

    @media (max-width: ${({theme}) => theme.breakpoint.tabletVertical}px) {
    margin: auto;
    height: auto;
    padding-bottom: 76px;
  }

`;

export const Header = styled.header`
    width: 677px;
    margin-left: 124px;
    padding: 5px 0px 25px 0px;
    font-size: 24px;
    color: ${({theme}) => theme.colors.text.textWhite};

    @media (max-width: ${({theme}) => theme.breakpoint.tabletVertical}px) {
    margin: auto;
    width: 90%;
    height: auto;
  }
`;

export const Title = styled.h2`
    font-size: 60px;
    line-height: 55px;
    margin: 50px 0px 30px 0px;
`;

export const Body = styled.div`
    overflow: hidden;
`;

export const StyledImage = styled.img`
    position: absolute;
    left: 75%;
    transform: translateX(-65%) translateY(46%);
    width: 568px;
    z-index: 0;
`;