import ButtonWhite from "../Buttons/ButtonWhite";
import { StyledNav, Wrap, LogoImage, StyledLink1, StyledLink2 } from "./styled";
import logoSVG from "../../common/images/logo.svg";


export const Navigation = () => (
    <StyledNav>
        <LogoImage src={logoSVG} />
      <Wrap>
        <StyledLink1 href="#">Startups</StyledLink1>
        <StyledLink2 href="#">Contact</StyledLink2>
      <ButtonWhite 
        buttonContent="Work with us!"
        width="185px"
      />
      </Wrap>
    </StyledNav>
);