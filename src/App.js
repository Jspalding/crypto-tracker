import React, { Component } from "react";

import Header from "./Components/Common/Header";
import MainTable from "./Components/MainTable/MainTable";

import "./App.css";

class App extends Component {
  state = {
  };

  render() {

    return (
      <div className="App">

        <Header />

        <div className="Wrapper">

          <MainTable />

        </div>
      </div>
    );
  }
}

export default App;
