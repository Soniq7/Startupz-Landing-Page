import React from "react";
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

const App = () => {
  const tableData1 = TableData({ type: "one" });
  const tableData2 = TableData({ type: "two" });

  return (
    <Container>
      <>
        <SectionMain
          title="We Create Startups."
          headerContent="We are startup studio that develops and launches new companies."
          body={<ButtonTeal buttonContent="See our works" />}
        />
        <SectionTable
          title="Who we are"
          headerContent="We create products that have innovation and technology at their
          core. We value working with talented people that understand the
          possibilities of today."
          body={<ReusableTable data={tableData1} />}
          imageSrc={artwork1SVG}
        />
        <SectionHelp 
          headerContent="We love solving problems!" 
        />
        <SectionTable
          title="Our core values"
          body={<ReusableTable data={tableData2} />}
          imageSrc={artwork2SVG}
        />

        <section>
          <h2>Our works</h2>
          <div>
            <h3>Tolq</h3>
            <p>
              Tolq is the translation solution built for e-commerce. It provides
              all pieces of the localization puzzle in one single integrated
              solution.
            </p>
            <button>More</button>
          </div>
          <div>
            <h3>Feedback Labs</h3>
            <p>
              Feedback Labs turns feedback into actionable insights for your
              team.
            </p>
            <button>More</button>
          </div>
          <div>
            <h3>Codekeeper</h3>
            <p>
              Codekeeper is an all-in-one solution for software developers and
              publishers to provide source code escrow as part of service level
              and license agreements.
            </p>
            <button>More</button>
          </div>
          <div>
            <h3>LegalSite</h3>
            <p>
              Protected against legal risks, privacy compliant and always
              up-to-date with the latest regulatory developments.
            </p>
            <button>More</button>
          </div>
        </section>
        <section>
          <p>
            Startups create a world that actually is better. Any problem that
            can be solved, will be solved by a startup, and that is a huge
            opportunity.
          </p>
        </section>
        <section>
          <h2>We are hiring!</h2>
          <p>
            We're always looking for talented people to join and help build our
            startups. Check out our current openings
          </p>
          <button>See current openings</button>
        </section>
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
  );
};

export default App;
