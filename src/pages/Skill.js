import React from "react";
import Container from "../components/Container";
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
                            imgPath={require("../components/assets/images/html.jpg")}
                         />
                            <Technology 
                                name="CSS"
                                imgPath={require("../components/assets/images/css.jpg")}
                                
                                />
                      <Technology 
                      name="JS"
                      imgPath={require("../components/assets/images/js.png")}
                      />
                        </Row>
                        <Row>
                        <Technology 
                            name="Node.js"
                            imgPath={require("../components/assets/images/nodejslogo.png")}
                        />
                         <Technology 
                            name="MYSQL"
                            imgPath={require("../components/assets/images/mysql.png")}
                        />
                         <Technology 
                            name="MONGODB"
                            imgPath={require("../components/assets/images/mongo.png")}
                        />
                         </Row>
                         <Row>
                        <Technology
                        name="REACT"
                        imgPath={require("../components/assets/images/reactpng.png")}
                        />
                        <Technology
                        name="JQUERY"
                        imgPath={require("../components/assets/images/jquery-logo-blue.png")}
                        />
                        <Technology
                            name="SQL"
                            imgPath={require("../components/assets/images/sql.jpg")}
                        />
                         </Row>

                    </div>
                </Row>
            </section>
        </Container>
    );
}
export default Skill;