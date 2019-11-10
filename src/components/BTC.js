import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import BTCani from "./BTCani";

class BTC extends Component {
  state = {
    data: {
      GBP: 0
    }
  };

  componentDidMount = () => {
    fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=GBP")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .then(data => console.log(this.state));
  };

  render() {
    return <BTCani price={this.state.data.GBP} />;
  }
}

export default BTC;
