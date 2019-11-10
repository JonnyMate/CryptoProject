import React from "react";
import BTC from "./BTC";
import ETH from "./ETH";
import DOGE from "./DOGE";

const Cryptos = props => {
  return (
    <div className="crypto-container">
      <BTC price={props.data.BTC.GBP} />
      <ETH price={props.data.ETH.GBP} />
      <DOGE price={props.data.DOGE.GBP} />
    </div>
  );
};

export default Cryptos;
