import { StyledSection, Header, Title, Body, StyledImage } from "./styled";

const SectionTable = ({ title, body, headerContent, imageSrc }) => (
    <StyledSection>
      <Header>
        <Title>
          {title}
        </Title>
          {headerContent}
      </Header>
      <Body>
        <StyledImage src={imageSrc}/>
          {body}
      </Body>
    </StyledSection>
  );
  
  export default SectionTable;