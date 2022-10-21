import React from "react";

import "../../asset/css/toolTip.css";

const ToolTip = ({ children, toolTipText }) => {
  return (
    <React.Fragment>
      <div className="tooltip w-full h-full ">
        {children}
        <span className="tooltiptext">{toolTipText}</span>
      </div>
    </React.Fragment>
  );
};

export default ToolTip;
