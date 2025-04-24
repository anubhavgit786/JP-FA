import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaDataChart = ({ areaChartData }) => 
{
  return (
    <div>
        <h2 className="text-xl mb-2 font-semibold">
          💰 Deposits and Bonuses Comparison
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={areaChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="totalDepositAmount"
              stroke="#6366f1"
              fill="#6366f1"
            />
            <Area
              type="monotone"
              dataKey="totalAdminDepositAmount"
              stroke="#34d399"
              fill="#34d399"
            />
            <Area
              type="monotone"
              dataKey="totalAdminBonusAmount"
              stroke="#fbbf24"
              fill="#fbbf24"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
  )
}

export default AreaDataChart;
