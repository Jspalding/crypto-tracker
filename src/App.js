import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MainTable from "./Components/MainTable/MainTable";
import MissingPage from "./Components/MissingPage/MissingPage";
import CryptoFocus from "./Components/CryptoFocus/CryptoFocus";
import News from "./Components/NewsFeed/NewsFeed";

import "./App.css";

class App extends Component {
  state = {
    fiat: "USD",
    showNews: false,
    newsBtnText: "Show Latest News",
    btnColor: "#92dd59"
  };

  //Simple handler to take input to change currency view
  fiatChangeHandler = event => {
    this.setState({
      fiat: event.target.value
    });
  };

  //Toggles news state to display it, second function changes button text state
  toggleNews = () => {
    const show = this.state.showNews;
    this.setState({
      showNews: !show
    });
  };
  toggleBtnText = () => {
    if (this.state.showNews === true) {
      this.setState({
        newsBtnText: "Show Latest News",
        btnColor: "#92dd59"
      });
    } else if (this.state.showNews === false) {
      this.setState({
        newsBtnText: "Close",
        btnColor: "#d90023"
      });
    }
  };

  render() {
    let news = null;

    if (this.state.showNews) {
      news = <News />;
    }

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header />

          <div className="Wrapper">
            <a
              className="toggle-news-btn"
              onClick={() => {
                this.toggleNews();
                this.toggleBtnText();
              }}
              style={{backgroundColor: this.state.btnColor}}
            >
              {this.state.newsBtnText}
            </a>

            {news}
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
