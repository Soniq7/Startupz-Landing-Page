import { StyledSection, Header, Body, StyledImage1, StyledImage2 } from "./styled";
import thumbSVG from "../../images/thumb.svg";
import thumbReversedSVG from "../../images/thumbReversed.svg"

const SectionHelp = ({ title, body, headerContent }) => (
    <StyledSection>
      <Header>
        <title>{title}</title>
        {headerContent}
      </Header>
      <Body>
        <StyledImage1 src={thumbSVG} />
        <StyledImage2 src={thumbReversedSVG} />
        {body}
      </Body>
    </StyledSection>
  );
  
  export default SectionHelp;