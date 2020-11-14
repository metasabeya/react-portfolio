import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-8 midsection">
            <h2>About Me</h2>
            <Row>
              <Col size="sm-12">
                <img
                  className="img-fluid profile-pic float-left"
                  src={require("../components/assets/images/mypic.jpg")}
                  alt="my pic" />
                <div className="bio">
                  <p>
                  Hello everyone, My name is Metasbeya Ketsela.I am orignally from Ethiopia.i just came to Usa in 2019.When i was in Ethiopia i have completed two degrees which is Bachlor in Accounting and finance and the other one is Masters in Business Administration. when i was their have been working in one of the best known bank in Ethiopia which is Bank of Abyssinia.I am married but no childrens.currently i am astudent of university of denver boot camp in web development ,its completly different with my preivious experiance but i loved it.In my free time I enjoy reading and i love practicing to code.In short this is all about me ,if you need more information please visit my contact information icon.Thank you for visting my portfolio website.</p>
                  </div>
              </Col>
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default About;
