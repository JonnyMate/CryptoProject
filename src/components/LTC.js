import React from "react";
import { Spring } from "react-spring/renderprops";

const LTC = props => {
  return (
    <div className="crypto">
      <Spring from={{ number: 0 }} to={{ number: props.price }}>
        {props => (
          <div>
            <h2>£{props.number.toFixed(2)}</h2>
            <h1>LTC</h1>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default LTC;
