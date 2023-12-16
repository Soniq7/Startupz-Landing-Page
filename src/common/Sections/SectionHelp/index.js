import {
  StyledSection,
  Header,
  Body,
  StyledImageThumb1,
  StyledImageThumb2,
} from "./styled";
import thumbSVG from "../../images/thumb.svg";
import thumbReversedSVG from "../../images/thumbReversed.svg";

const SectionHelp = ({ title, body, headerContent }) => (
  <StyledSection>
    <Header>
      <title>{title}</title>
      <Body>
        <StyledImageThumb1 src={thumbSVG} />
        {headerContent}
        <StyledImageThumb2 src={thumbReversedSVG} />
        {body}
      </Body>
    </Header>
  </StyledSection>
);

export default SectionHelp;
