import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const NewUsersDistribution = ({ pieChartDataUsers }) => 
{
  return (
    <div>
          <h2 className="text-xl mb-2 font-semibold">
            🆕 New Users Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartDataUsers}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
              >
                {pieChartDataUsers.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={["#6366f1", "#34d399", "#fbbf24"][index % 3]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
  )
}

export default NewUsersDistribution;
