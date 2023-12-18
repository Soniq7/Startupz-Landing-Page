import { useRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Container from "../common/Container";
import Form from "../features/Form";
import SectionForm from "../common/Sections/SectionForm";
import SectionMain from "../common/Sections/SectionMain";
import ButtonTeal from "../features/Buttons/ButtonTeal";
import TableData from "../features/Tables/TableData";
import SectionTable from "../common/Sections/SectionTable";
import ReusableTable from "../features/Tables/ReusableTable";
import artwork1SVG from "../common/images/artwork1.svg";
import artwork2SVG from "../common/images/artwork2.svg";
import SectionHelp from "../common/Sections/SectionHelp";
import ImagePopup from "../features/ImagePopup";
import SectionJoin from "../common/Sections/SectionJoin";
import SectionTiles from "../common/Sections/SectionTiles";
import Footer from "../features/Footer";
import { Navigation } from "../features/Navigation";

const App = () => {
  const tableData1 = TableData({ type: "one" });
  const tableData2 = TableData({ type: "two" });

  const ourWorksSection = useRef(null);
  const whoWeAreSection = useRef(null);
  const contactSection = useRef(null);
  const weAreHiringSection = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const marginValue = "30px";

  return (
    <Container>
      <Navigation />
      <SectionMain
        title="We Create Startups."
        headerContent="We are startup studio that develops and launches new companies."
        body={
          <ScrollLink to="ourWorksSection" smooth={true} duration={1000}>
            <ButtonTeal
              buttonContent="See our works"
              width="157px"
              height="45px"
              onClick={scrollToSection}
            />
          </ScrollLink>
        }
      />
      <Element name="whoWeAreSection" ref={whoWeAreSection}>
        <SectionTable
          title="Who we are"
          imageSrc={artwork1SVG}
          headerContent="We create products that have innovation and technology at their
          core. We value working with talented people that understand the
          possibilities of today."
          body={<ReusableTable data={tableData1} />}
        />
      </Element>
      <SectionHelp
        headerContent="We love solving problems!"
        body={<ImagePopup />}
      />
      <SectionTable
        title="Our core values"
        imageSrc={artwork2SVG}
        body={<ReusableTable data={tableData2} />}
      />
      <Element name="ourWorksSection" ref={ourWorksSection}>
        <SectionTiles />
      </Element>
      <Element name="weAreHiringSection" ref={weAreHiringSection}>
        <SectionJoin
          title="We are hiring!"
          headerContent="We're always looking for talented people to join and help build our
          startups. Check out our current openings"
          body={
            <a
              href="https://www.linkedin.com/company/startupz.com/jobs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonTeal
                buttonContent="See current openings"
                width="243px"
                $custom={marginValue}
              />
            </a>
          }
        />
      </Element>
      <SectionForm
        title="Are you ready to board this rocket ship?"
        headerContent="Share your excitement with us."
        body={<Form />}
      />
      <Element name="contactSection" ref={contactSection}>
        <Footer />
      </Element>
    </Container>
  );
};

export default App;
