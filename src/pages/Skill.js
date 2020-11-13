import React from "react";
import Container from "../components/container";
import Row from "../components/Row";
import Technology from "../components/Technology";

function Skill() {
    return (
        <Container>
            <section className="content">
                <Row>
                    <div className="col-md-12 midsection">
                        <h2>Skill</h2>
                        <Row>
                        <Technology
                            name="HTML"
                            imgPath={require("../component/asset/images/html.png")}
                         />
                            <Technology 
                                name="CSS"
                                imgPath={require("../component/assets/images/CSS.png")}
                                
                                />
                      <Technology 
                      name="JS"
                      imgPath={require("../component/assets/images/js.png")}
                      />
                        </Row>
                        <Row>
                        <Technology 
                            name="Node.js"
                            imgPath={require("../component/assets/images/nodejslogo.png")}
                        />
                         <Technology 
                            name="MYSQL"
                            imgPath={require("../component/assets/images/nodejslogo.png")}
                        />
                         <Technology 
                            name="MONGODB"
                            imgPath={require("../component/assets/images/mongo.png")}
                        />
                         </Row>
                         <Row>
                        <Technology
                        name="REACT"
                        imgPath={require("../component/assets/images/reactpng.png")}
                        />
                        <Technology
                        name="JQUERY"
                        imgPath={require("../component/assets/images/jquery-logo-blue.png")}
                        />
                        <Technology
                            name="SQL"
                            imgPath={require("../component/assets/images/sql.jpg")}
                        />
                         </Row>

                    </div>
                </Row>
            </section>
        </Container>
    );
}
export default Skill;