import React from "react";
import { Spring } from "react-spring/renderprops";

const Heading = () => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props} className="heading">
          <h1>Cryptocurrency Tracker</h1>
        </div>
      )}
    </Spring>
  );
};

export default Heading;
