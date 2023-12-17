import React from "react";
import { HashRouter } from "react-router-dom";
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
import SectionTile from "../common/Sections/SectionTiles";

const App = () => {
  const tableData1 = TableData({ type: "one" });
  const tableData2 = TableData({ type: "two" });

  const marginValue = "30px";

  return (
    <HashRouter>
      <Container>
        <>
          <SectionMain
            title="We Create Startups."
            headerContent="We are startup studio that develops and launches new companies."
            body={
              <ButtonTeal
                buttonContent="See our works"
                width="157px"
                height="45px"
              />
            }
          />
          <SectionTable
            title="Who we are"
            imageSrc={artwork1SVG}
            headerContent="We create products that have innovation and technology at their
          core. We value working with talented people that understand the
          possibilities of today."
            body={<ReusableTable data={tableData1} />}
          />
          <SectionHelp
            headerContent="We love solving problems!"
            body={<ImagePopup />}
          />
          <SectionTable
            title="Our core values"
            imageSrc={artwork2SVG}
            body={<ReusableTable data={tableData2} />}
          />
          <SectionTile />
          <SectionJoin
            title="We are hiring!"
            headerContent="We're always looking for talented people to join and help build our
          startups. Check out our current openings"
            body={
              <a href="https://www.linkedin.com/company/startupz.com/jobs/" target="_blank" rel="noopener noreferrer">
                <ButtonTeal
                  buttonContent="See current openings"
                  width="243px"
                  $custom={marginValue}
                />
              </a>
            }
          />
          <SectionForm
            title="Are you ready to board this rocket ship?"
            headerContent="Share your excitement with us."
            body={<Form />}
          />
          
          <footer>
            <p>© 2020 Startupz. All rights reserved.</p>
            <aside>
              <h2>Companies</h2>
              <p>
                Tolq <br />
                LegalSite <br />
                Codekeeper <br />
                Feedback Labs
              </p>
              <h2>Contact</h2>
              <p>
                World Trade Center - The Hague Prinses Margrietplantsoen 33 2595
                AM The Hague The Netherlands
              </p>
              <p>Send us an email</p>
              <h2>Follow us</h2>
              <img />
            </aside>
          </footer>
        </>
      </Container>
    </HashRouter>
  );
};

export default App;
