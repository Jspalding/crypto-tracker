import React from "react";

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
        {percent}% <img src="img/chev-up.png" alt="Percentage up" />
      </span>
    );
  } else if (percent < 0) {
    return (
      <span className="percent-down">
        {percent}% <img src="img/chev-down.png" alt="Percentage down" />
      </span>
    );
  } else {
    return <span>{percent}</span>;
  }
};

//Used to display only 5 decimals, mainly for price.
export const toDecimals = num => {
  return Number.parseFloat(num).toFixed(5);
};
