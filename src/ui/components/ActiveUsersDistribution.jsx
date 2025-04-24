import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

const ActiveUsersDistribution = ({ pieChartDataActive }) => 
{
  return (
    <div>
      <h2 className="text-xl mb-2 font-semibold">
        🟢 Active Users Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieChartDataActive}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {pieChartDataActive.map((entry, index) => (
              <Cell
                key={`cell-active-${index}`}
                fill={["#3b82f6", "#10b981", "#facc15"][index % 3]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActiveUsersDistribution;
