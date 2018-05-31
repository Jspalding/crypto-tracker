import React from "react";

import Loader from "../Common/Loader";
import NewsArticle from "./NewsArticle/NewsArticle";
import { fetchResponseHandler } from "../../helpers";
import "./NewsFeed.css";

class News extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      news: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    this.setState({ loading: true });

    fetch(
      `https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=248354f320ea44f9b41618da121b888f`
    )
      .then(fetchResponseHandler)
      .then(data => {
        this.setState({
          news: data.articles,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.error,
          loading: false
        });
      });
  };

  render() {
    const { loading, news, error } = this.state;

    //Renders while loading data from API
    if (loading) {
      return (
        <div className="loader-wrapper">
          <Loader />
        </div>
      );
    }

    //Renders if error getting data
    if (error) {
      return (
        <div className="loader-wrapper">
          <p>{error}</p>
        </div>
      );
    }

    return (
      <div className="news-wrapper">
      <h1>Latest Cryptocurrency News</h1>
        <NewsArticle news={news} />
      </div>
    );
  }
}

export default News;
