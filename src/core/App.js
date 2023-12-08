import React from "react";
import Container from "../common/Container";

function App() {
  return (
    <Container>
      <>
        <section>
          <h1>We Create Startups.</h1>
          <p>We are startup studio that develops and launches new companies.</p>
          <button>See our works</button>
        </section>
        <section>
          <h2>Who we are</h2>
          <p>
            We create products that have innovation and technology at their
            core. We value working with talented people that understand the
            possibilities of today.
          </p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>01</th>
                  <th>02</th>
                  <th>03</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>We develop innovative products, systems and services</td>
                  <td>Next we build teams to scale them into companies</td>
                  <td>Each startup solving one problem at a time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <p>We love solving problems!</p>
        </section>
        <section>
          <h2>Our core values</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>01. Innovation</th>
                  <th>02. People</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Startupz operates where entrepreneurship and technology
                    intersect. We design solutions and turn them into business
                    models.
                  </td>
                  <td>Talent is what enables us to create great companies.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
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
        <section>
          <div>
            <h2>Are you ready to board this rocket ship?</h2>
            <h3>Share your excitement with us.</h3>
            <form>
              <input placeholder="Name*" />
              <input placeholder="Email*" />
              <input placeholder="Message*" />
              <button>Shoot us a message</button>
            </form>
          </div>
        </section>
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
}

export default App;
