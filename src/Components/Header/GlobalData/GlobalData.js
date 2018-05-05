import React from "react";

import GlobalDataTemplate from "./GlobalDataTemplate/GlobalDataTemplate";

import "./GlobalData.css";

import { COINCAP_URL } from "../../../config";
import { fetchResponseHandler, largeNumberRender } from "../../../helpers";

class GlobalData extends React.Component {
  constructor() {
    super();

    this.state = {
      global: [],
      error: null
    };
  }

  componentWillMount() {
    this.fetchGlobal();
    setInterval(this.fetchGlobal, 300000);
  }

  fetchGlobal = () => {
    fetch(`${COINCAP_URL}/global`)
      .then(fetchResponseHandler)
      .then(data => {
        this.setState({
          global: data
        });
      })
      .catch(error => {
        this.setState({
          error: error.error
        });
      });
  };

  render() {
    const { error, global } = this.state;

    if (error) {
      return (
        <div className="loader-wrapper">
          <p>{error}</p>
        </div>
      );
    }

    return (
      <GlobalDataTemplate Global={global} largeNumber={largeNumberRender} />
    );
  }
}

export default GlobalData;
