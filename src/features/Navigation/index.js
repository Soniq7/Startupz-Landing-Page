import { Link as ScrollLink } from "react-scroll";
import ButtonWhite from "../../common/Buttons/ButtonWhite";
import { StyledNav, Wrap, LogoImage, StyledScrollLink } from "./styled";
import logoSVG from "../../common/images/logo.svg";

export const Navigation = ({ scrollToSection }) => {
  return (
    <StyledNav>
      <LogoImage src={logoSVG} />
      <Wrap>
        <StyledScrollLink to="whoWeAreSection" smooth={true} duration={1000}>
          Startups
        </StyledScrollLink>
        <StyledScrollLink to="contactSection" smooth={true} duration={1000}>
          Contact
        </StyledScrollLink>
        <ScrollLink to="weAreHiringSection" smooth={true} duration={1000}>
          <ButtonWhite
            buttonContent="Work with us!"
            width="185px"
            onClick={() => scrollToSection()}
          />
        </ScrollLink>
      </Wrap>
    </StyledNav>
  );
};
