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

const SectionTile = () => {
  const tileData = [
    {
      title: "Tolq",
      description:
        "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
      image: frame11SVG,
      buttonLabel: "More",
      buttonUrl: "https://tolq.com/",
    },
    {
      title: "Feedback Labs",
      description:
        "Feedback Labs turns feedback into actionable insights for your team.",
      image: frame12SVG,
      buttonLabel: "More",
      buttonUrl: "https://www.feedbacklabs.com/",
    },
    {
      title: "Codekeeper",
      description:
        "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
      image: frame13SVG,
      buttonLabel: "More",
      buttonUrl: "https://codekeeper.co/",
    },
    {
      title: "LegalSite",
      description:
        "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
      image: frame14SVG,
      buttonLabel: "More",
      buttonUrl: "https://legalsite.co/",
    },
  ];

  return (
    <div>
      <SectionTitle>Our works</SectionTitle>
      <StyledSection>
        {tileData.map((tile, index) => (
          <Tile key={index}>
            <Title>{tile.title}</Title>
            <Text>{tile.description}</Text>
            <TileImage src={tile.image} alt={`Picture ${index + 1}`} />
            <div>
              <a href={tile.buttonUrl} target="_blank" rel="noopener noreferrer">
                <ButtonWhite buttonContent={tile.buttonLabel} />
              </a>
            </div>
          </Tile>
        ))}
      </StyledSection>
      <TextImage src={group23SVG} />
    </div>
  );
};

export default SectionTile;
