import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 4vw;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerCompanies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContainerMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Header = styled.h2`
  font-size: 18px;
  line-height: 18px;
  font-weight: normal;
  margin-bottom: 20px;
`;

export const LogoText = styled.p`
  font-size: 18px;
  line-height: 30px;
  width: 156px;
  height: 60px;
  margin-top: 75px;
  color: ${({ theme }) => theme.colors.text.textGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: auto;
    text-align: center;
    margin-top: 2vw;
  }
`;

export const ContactText = styled.p`
  width: 328px;
  height: 90px;
  font-size: 18px;
  line-height: 24px;
  margin-top: 0px;
  margin-bottom: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.text.textGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}px) {
    margin-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.superSmallScreen}px) {
    margin-bottom: 70px;
  }

`;

export const EmailLink = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.text.textTeal};
`;

export const CompaniesLink = styled.a`
  font-size: 18px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.text.textTeal};
`;
