import {
  SectionTitle,
  StyledSection,
  Tile,
  Title,
  Text,
  TileImage,
  TextImage,
} from "./styled";
import ButtonWhite from "../../../features/Buttons/ButtonWhite";
import frame11SVG from "../../images/frame11.svg";
import frame12SVG from "../../images/frame12.svg";
import frame13SVG from "../../images/frame13.svg";
import frame14SVG from "../../images/frame14.svg";
import group23SVG from "../../images/group23.svg";

const SectionTiles = () => {
  const titleData = [
    {
      title: "Tolq",
      description:
        "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
      image: frame11SVG,
      buttonLabel: "More",
      buttonUrl: "https://tolq.com/",
      $color: ({theme}) => theme.colors.text.textGreen,
    },

    {
      title: "Feedback Labs",
      description:
        "Feedback Labs turns feedback into actionable insights for your team.",
      image: frame12SVG,
      buttonLabel: "More",
      buttonUrl: "https://www.feedbacklabs.com/",
      $color: ({theme}) => theme.colors.text.textLightBlue,
    },
    {
      title: "Codekeeper",
      description:
        "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
      image: frame14SVG,
      buttonLabel: "More",
      buttonUrl: "https://codekeeper.co/",
      $color: ({theme}) => theme.colors.text.textBlue,
    },
    {
      title: "LegalSite",
      description:
        "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
      image: frame13SVG,
      buttonLabel: "More",
      buttonUrl: "https://legalsite.co/",
      $color: ({theme}) => theme.colors.text.textPurple,
    },
  ];

  return (
    <div>
      <SectionTitle>Our works</SectionTitle>
      <StyledSection>
        {titleData.map((title, index) => (
          <Tile key={index}>
            <Title $color={title.$color}>{title.title}</Title>
            <Text>{title.description}</Text>
            <TileImage src={title.image} alt={`Picture ${index + 1}`} />
            <div>
              <a href={title.buttonUrl} target="_blank" rel="noopener noreferrer">
                <ButtonWhite 
                  buttonContent={title.buttonLabel} 
                  width="107px"/>
              </a>
            </div>
          </Tile>
        ))}
      </StyledSection>
      <TextImage src={group23SVG} />
    </div>
);
};

export default SectionTiles;
