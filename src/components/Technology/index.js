import React from "react";
import Col from "../Col";

function Technology(props) {

    console.log("image.jpg", props.imgPath);
    return (
        <Col size="md-4 sm-12">
            <div className="button-container">
        <img
          className="img-fluid portfolio-pic"
          src={props.imgPath}
          alt={props.name}
        />
        </div>
        </Col>
    )
}

export default Technology;
