import { useRef, useEffect } from "react";

import useWindowWidth from "../../hooks/useWindowWIdth";
import ToolTip from "../toolTip/toolTip";

const BarItem = ({ barItemHeight, barItemWidth, label, color, value }) => {
  const labelDiv = useRef(null);
  const [width] = useWindowWidth();

  useEffect(() => {
    if (labelDiv?.current?.scrollWidth > labelDiv?.current?.clientWidth) {
      labelDiv.current.style.transform = "rotate(90deg)";
    } else if (
      labelDiv?.current?.scrollWidth <= labelDiv?.current?.clientWidth
    ) {
      labelDiv.current.style.transform = "none";
    }
  }, [width]);
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
          <div ref={labelDiv} className="bar-item-label">
            {label}
          </div>
        </div>
      </ToolTip>
    </div>
  );
};

export default BarItem;
