import React from "react";

import "../asset/css/barChartContainer.css";

const BarChartContainer = ({ children }) => {
  return (
    <React.Fragment>
      <div className="bar-container">
        <div className="bar-wrapper">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default BarChartContainer;
