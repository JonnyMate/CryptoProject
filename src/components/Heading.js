import React from "react";
import { Spring } from "react-spring/renderprops";

const Heading = () => {
  return (
    <Spring from={{ number: 0 }} to={{ number: 1 }}>
      {props => (
        <div style={props}>
          <div>
            <h1>{props.number.toFixed(2)}</h1>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Heading;
