import logoSVG from "../../common/images/logo.svg";
import twitterSVG from "../../common/images/twitter.svg";
import linkedinSVG from "../../common/images/linkedin.svg";
import instagramSVG from "../../common/images/instagram.svg";
import {
  FooterContainer,
  ContainerLogo,
  ContainerCompanies,
  ContainerContact,
  ContainerMedia,
  Header,
  LogoText,
  ContactText,
  EmailLink,
  CompaniesLink,
} from "./styled";

export const Footer = () => (
  <FooterContainer>
    <ContainerLogo>
      <img src={logoSVG} />
      <LogoText>© 2020 Startupz. All rights reserved.</LogoText>
    </ContainerLogo>
    <ContainerCompanies>
      <Header>Companies</Header>
      <CompaniesLink
        href="https://tolq.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tolq
      </CompaniesLink>
      <CompaniesLink
        href="https://legalsite.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LegalSite
      </CompaniesLink>
      <CompaniesLink
        href="https://codekeeper.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Codekeeper
      </CompaniesLink>
      <CompaniesLink
        href="https://www.feedbacklabs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Feedback Labs
      </CompaniesLink>
    </ContainerCompanies>
    <ContainerContact>
      <Header>Contact</Header>
      <ContactText>
        World Trade Center - The Hague
        <br /> Prinses Margrietplantsoen 33
        <br /> 2595 AM The Hague
        <br /> The Netherlands
      </ContactText>
      <EmailLink href="#">Send us an email</EmailLink>
    </ContainerContact>
    <ContainerMedia>
      <Header>Follow us</Header>
      <a
        href="https://x.com/startupzcom?t=_lurgMX0_X50FUMHRcwvkA&s=03/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitterSVG} />
      </a>
      <a
        href="https://www.linkedin.com/company/startupz.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinSVG} />
      </a>
      <a
        href="https://www.instagram.com/startupzcom/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramSVG} />
      </a>
    </ContainerMedia>
  </FooterContainer>
);

export default Footer;
