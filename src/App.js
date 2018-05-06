import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainTable from "./Components/MainTable/MainTable";
import MissingPage from "./Components/MissingPage/MissingPage";
import CryptoFocus from "./Components/CryptoFocus/CryptoFocus";

import "./App.css";

class App extends Component {
  state = {
    fiat: "USD"
  };

  //Simple handler to take input to change currency view
  fiatChangeHandler = event => {
    this.setState({
      fiat: event.target.value
    });
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header />

          <div className="Wrapper">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <MainTable
                    fiatChangeHandler={this.fiatChangeHandler}
                    fiat={this.state.fiat}
                  />
                )}
              />
              <Route
                exact
                path="/coins/:id"
                render={props => (
                  <CryptoFocus {...props} fiat={this.state.fiat} />
                )}
              />
              <Route component={MissingPage} />
            </Switch>

                      <Footer />
          </div>


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
