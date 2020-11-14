import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Projects";
// import testimage from "../thetestpath";

function Portfolio() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>Portfolio</h2>
            <Row>
              <Project
                name="City-sidekick"
                imgPath={require("../components/assets/images/citysidekick.png")}
                linkDeployed="https://metasabeya.github.io/city-sidekick/"
                linkGithub="https://github.com/metasabeya/city-sidekick"
              />
              <Project
                name="Weather Dashboard"
                imgPath={require("../components/assets/images/weatherdash.png")}
                linkDeployed="https://metasabeya.github.io/week6-hw/"
                linkGithub="https://github.com/metasabeya/week6-hw"
              />
              <Project
                name="Note Taker"
                imgPath={require("../components/assets/images/notetaker.png")}
                linkDeployed="https://notetaker-5123534.herokuapp.com/"
                linkGithub="https://github.com/jenjch/noteTaker"
              />
              
            </Row>
            <Row>
            <Project
                name="Burger APP"
                imgPath={require("../components/assets/images/burgerapp.png")}
                linkDeployed="https://boiling-caverns-74675.herokuapp.com/"
                linkGithub="https://github.com/jenjch/Grouhttps://github.com/metasabeya/-Burger-pProject1"
              />
              <Project
                name="Code Quize"
                imgPath={require("../components/assets/images/codequiz.jpg")}
                linkDeployed="https://metasabeya.github.io/final-code-quize/"
                linkGithub="https://github.com/metasabeya/final-code-quize"
              />
              <Project
                name="BiteReport"
                imgPath={require("../components/assets/images/BiteReport.png")}
                linkDeployed="https://bitereport.herokuapp.com/"
                linkGithub="https://github.com/metasabeya/BiteReport.git"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;
