import { useState, useRef, useEffect } from "react";

import ToolTip from "../toolTip/toolTip";

const BarItem = ({
  barItemHeight,
  barItemWidth,
  label,
  color,
  value,
  windowWidth,
}) => {
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
      style={{
        width: `${barItemWidth}%`,
        height: `${barItemHeight}%`,
      }}
    >
      <ToolTip toolTipText={value}>
        <div
          style={{
            backgroundColor: color,
          }}
          className="bar-item"
        >
          <div
            ref={labelDiv}
            style={{ transform: labelRotate ? "rotate(30deg)" : "none" }}
            className="bar-item-label"
          >
            {label}
          </div>
        </div>
      </ToolTip>
    </div>
  );
};

export default BarItem;
