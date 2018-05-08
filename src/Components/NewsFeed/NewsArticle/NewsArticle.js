import React from "react";

import "./../NewsFeed.css";

const NewsArticle = props => {
  const { news } = props;

  return (
    <article>
      {news.map((news, index) => (
        <div key={index}>
          <div>{news.description}</div>
        </div>
      ))}
    </article>
  );
};

export default NewsArticle;
