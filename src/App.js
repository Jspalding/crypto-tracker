import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./Components/Common/Header";
import MainTable from "./Components/MainTable/MainTable";
import MissingPage from "./Components/MissingPage/MissingPage";
import CryptoFocus from "./Components/CryptoFocus/CryptoFocus";

import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <div className="Wrapper">
            <Switch>
              <Route path="/" component={MainTable} exact />
              <Route path="/coins/:id" component={CryptoFocus} exact />
              <Route component={MissingPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
