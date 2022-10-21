import React from "react";

import BarChartContainer from "../../layout/barChartContainer";
import BarItem from "./barItem";
import "../../asset/css/barChart.css";

const BarChart = ({ barData, dividerNum = 10 }) => {
  // const [labelTransform,setLabelTransform] = useState(false)

  const barItemWidth = 100 / barData.length;

  const maxVal = Math.max(...barData.map((i) => i.value));
  return (
    <React.Fragment>
      <BarChartContainer>
        {barData.map((item, index) => {
          const barItemHeight = (item.value / maxVal) * 100;
          return (
            <BarItem
              key={index}
              {...item}
              barItemHeight={barItemHeight}
              barItemWidth={barItemWidth}
            />
          );
        })}
        <RenderValueCount maxVal={maxVal} dividerNum={dividerNum} />
      </BarChartContainer>
    </React.Fragment>
  );
};

const RenderValueCount = ({ maxVal, dividerNum }) => {
  return [...Array(dividerNum + 1)].map((item, index) => {
    const bottom = (100 / dividerNum) * index;
    const itemVal = (maxVal / dividerNum) * index;
    return (
      <div key={index} style={{ bottom: `${bottom}%` }} className="bar-rank">
        <div className="bar-rank-div">
          <div
            // style={{ bottom: `${bottom}%` }}
            className="bar-rank-number"
          >
            {Math.ceil(itemVal)}
          </div>
          <div className="bar-rank-dash"></div>
        </div>
      </div>
    );
  });
};

export default BarChart;
