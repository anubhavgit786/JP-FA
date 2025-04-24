import React from "react";
import ActiveUsersDistribution from "./ActiveUsersDistribution";
import NewUsersDistribution from "./NewUsersDistribution";
import AreaDataChart from "./AreaDataChart";

const Analytics = ({
  pieChartDataActive,
  pieChartDataUsers,
  areaChartData,
}) => {
  return (
    <div className="space-y-8 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NewUsersDistribution pieChartDataUsers={pieChartDataUsers} />
        <ActiveUsersDistribution pieChartDataActive={pieChartDataActive} />
      </div>
      <AreaDataChart areaChartData={areaChartData} />
    </div>
  );
};

export default Analytics;
