import React from "react";
import { Spring } from "react-spring/renderprops";

const DOGE = props => {
  return (
    <div className="crypto">
      <Spring from={{ number: 0 }} to={{ number: props.price }}>
        {props => (
          <div>
            <h2>£{props.number.toFixed(5)}</h2>
            <h1>DOGE</h1>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default DOGE;
