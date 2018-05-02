import React from "react";
import Up from "./chev-up.png";
import Down from "./chev-down.png";

//Fetch error helper
export const fetchResponseHandler = response => {
  return response.json().then(json => {
    return response.ok ? json : Promise.reject(json);
  });
};

//Changes percentage display depending on value
export const percentageChange = percent => {
  if (percent > 0) {
    return (
      <span className="percent-up">
        {percent}% <img src={Up} alt="Percentage up" />
      </span>
    );
  } else if (percent < 0) {
    return (
      <span className="percent-down">
        {percent}% <img src={Down} alt="Percentage down" />
      </span>
    );
  } else {
    return <span>{percent}</span>;
  }
};

//Improved function to seperate large numbers and remove un-needed decimals
export const numberFormatRender = n => {
  return ( n = parseInt(n, 10).toLocaleString(navigator.language, { minimumFractionDigits: 0 }));
}

