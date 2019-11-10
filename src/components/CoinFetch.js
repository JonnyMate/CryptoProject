import React, { Component } from "react";
import Cryptos from "./Cryptos";

class CoinFetch extends Component {
  state = {
    data: {
      BTC: {
        GBP: 0
      },
      ETH: {
        GBP: 0
      },
      DOGE: {
        GBP: 0
      }
    }
  };

  componentDidMount = () => {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DOGE&tsyms=GBP"
    )
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };

  render() {
    return <Cryptos data={this.state.data} />;
  }
}

export default CoinFetch;
