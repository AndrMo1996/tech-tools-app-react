import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import BarChart from "../../components/charts/BarChart/BarChart";
import { ChartColors } from "../../config/data/ChartColors";
import { TechEngineers } from "../../config/data/TechEngineers";

const StatisticsPage = () => {
  const workhours = JSON.parse(
    JSON.stringify(useSelector((state) => state.workhours.workhours))
  );

  const prepareChartData = () => {
    let dataset = [];
    const month = [moment().format("MMMM")];

    if (workhours.total_billable) {
      const total = Object.entries(workhours.total_billable[0]);
      let i = 0;
      for (let [index, value] of total) {
        if (TechEngineers.includes(index)) {
          dataset.push({
            label: index,
            data: [value],
            backgroundColor: ChartColors[i],
          });
          i++;
        }
      }
    }

    return {
      labels: month,
      datasets: dataset,
    };
  };

  return (
    <div>
      <BarChart title="Monthly Billable Workhours" data={prepareChartData()} />
    </div>
  );
};

export default StatisticsPage;
