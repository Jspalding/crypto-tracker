import React from "react";

import "./../GlobalData.css";

const GlobalDataTemplate = props => {
  const { Global } = props;

  return (
    <div className="Global-data">
      <div>{Global.totalCap}</div>
      <div>{Global.btcCap}</div>
      <div>{Global.altCap}</div>
    </div>
  );
};

export default GlobalDataTemplate;
