import BarLabel from "./barLabel";
import ToolTip from "../toolTip/toolTip";

const BarItem = ({
  barItemHeight,
  barItemWidth,
  // label,
  color,
  value,
  // windowWidth,
}) => {
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
          {/* <BarLabel label={label} windowWidth={windowWidth} /> */}
        </div>
      </ToolTip>
    </div>
  );
};

export default BarItem;
