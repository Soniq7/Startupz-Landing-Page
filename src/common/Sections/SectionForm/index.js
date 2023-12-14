import { StyledSection, Header, Title, Body, StyledImage } from "./styled";
import rocketShipSVG from "../../images/rocketShip.svg";

const SectionForm = ({ title, body, headerContent }) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {headerContent}
    </Header>
    <Body>
      <StyledImage src={rocketShipSVG} />
      {body}
    </Body>
  </StyledSection>
);

export default SectionForm;
