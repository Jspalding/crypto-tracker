import React from "react";
import PropTypes from 'prop-types';

import "./../NewsFeed.css";

const NewsArticle = props => {
  const { news } = props;

  return (
    <article>
      {news.map((news, index) => (
        <div key={index} className="article-wrapper">
          <h2>{news.title}</h2>
          <img src={news.urlToImage} alt="article img"/>
          <p>{news.description}</p>
          <a className="source-btn" href={news.url} target="_blank" rel="noopener noreferrer">
            SOURCE
          </a>
        </div>
      ))}
    </article>
  );
};

NewsArticle.propTypes = {
  news: PropTypes.array
}

export default NewsArticle;
