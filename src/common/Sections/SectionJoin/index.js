import {
  StyledSection,
  Header,
  Title,
  Body,
  StyledImageFrame4,
  StyledImageFrame5,
} from "./styled";
import frame4SVG from "../../images/frame4.svg";
import frame5SVG from "../../images/frame5.svg";

const SectionJoin = ({ title, body, headerContent }) => (
  <StyledSection>
    <Header>
      <StyledImageFrame4 src={frame4SVG} />
      <Body>
        <Title>{title}</Title>
        {headerContent}
        {body}
      </Body>
      <StyledImageFrame5 src={frame5SVG} />
    </Header>
  </StyledSection>
);

export default SectionJoin;
