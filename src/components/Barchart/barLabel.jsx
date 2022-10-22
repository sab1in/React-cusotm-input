import { useState, useRef, useEffect } from "react";

import "../../asset/css/barLabel.css";

const BarLabel = ({ label, width, windowWidth }) => {
  const labelDiv = useRef(null);
  const [labelRotate, setLabelRotate] = useState(false);

  useEffect(() => {
    if (labelDiv?.current?.scrollWidth > labelDiv?.current?.clientWidth) {
      setLabelRotate(true);
    } else if (
      labelDiv?.current?.scrollWidth <= labelDiv?.current?.clientWidth
    ) {
      setLabelRotate(false);
    }
  }, [windowWidth]);
  return (
    <div
      ref={labelDiv}
      style={{
        transform: labelRotate ? "rotate(30deg)" : "none",
        width: `${width}%`,
      }}
      className="bar-item-label"
    >
      {label}
    </div>
  );
};

export default BarLabel;
