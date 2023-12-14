import { StyledSection, Header, Title, Body, StyledImage } from "./styled";
import artwork71SVG from "../../images/artwork71.svg";

const SectionMain = ({ title, body, headerContent }) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {headerContent}
    </Header>
    <Body>
      <StyledImage src={artwork71SVG} />
      {body}
    </Body>
  </StyledSection>
);

export default SectionMain;
