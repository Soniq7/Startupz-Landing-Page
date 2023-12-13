import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.backgroundCream};
  height: 714px;
`;

export const Header = styled.header`
  margin-left: 120px;
  height: 50px;
  width: 876px;
  font-size: 24px;
  line-height: 30px;
  padding: 0px 40px 100px 0px;
  color: ${({ theme }) => theme.colors.text.primaryOrange};
`;

export const Title = styled.h2`
  font-size: 50px;
  margin-top: 0px;
  padding: 150px 0px 20px 0px;
  color: ${({ theme }) => theme.colors.text.primaryText};
`;

export const Body = styled.div`
  padding-top: 180px;
  padding-left: 40px;
`;

export const StyledImage = styled.img`
  position: absolute;
  left: 75%;
  transform: translateY(-160%);
  z-index: 0;
`;
