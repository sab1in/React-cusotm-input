import React from "react";

import useWindowWidth from "../../hooks/useWindowWIdth";

import BarChartContainer from "../../layout/barChartContainer";
import BarItem from "./barItem";
import BarLabel from "./barLabel";
import "../../asset/css/barChart.css";

const itemWidth = (data) => {
  return 100 / data.length;
};

const BarChart = ({ barData, barLabel, dividerNum = 10 }) => {
  const [width] = useWindowWidth();
  const barItemWidth = itemWidth(barData);
  const labelItemWidth = itemWidth(barLabel);

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
              windowWidth={width}
              barItemHeight={barItemHeight}
              barItemWidth={barItemWidth}
            />
          );
        })}
        <div className="label-wrapper">
          {barLabel.map((item, index) => {
            return (
              <BarLabel
                key={index}
                width={labelItemWidth}
                label={item}
                windowWidth={width}
              />
            );
          })}
        </div>
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
