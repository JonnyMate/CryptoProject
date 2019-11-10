import React from "react";
import Heading from "./components/Heading";
import { Spring } from "react-spring/renderprops";
import CoinFetch from "./components/CoinFetch";
import "./App.css";

function App() {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <div style={props}>
          <div>
            <Heading />
            <CoinFetch />
          </div>
        </div>
      )}
    </Spring>
  );
}

export default App;
