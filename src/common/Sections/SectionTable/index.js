import { StyledSection, Header, Title, Body, StyledImage } from "./styled";

const SectionTable = ({ title, body, headerContent, imageSrc }) => (
  <StyledSection>
    <Header>
      <StyledImage src={imageSrc} />
      <Title>{title}</Title>
      {headerContent}
      </Header>
      <Body>{body}</Body>
  </StyledSection>
);

export default SectionTable;
