import React, { useState, useMemo, useEffect } from "react";
import Loader from "./ui/components/Loader";
import Analytics from "./ui/components/Analytics";
import Statistics from "./ui/components/Statistics";
import CoolDown from "./ui/components/CoolDown";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useRateLimiter } from "./context/RateLimiterContext";
import { useDashboardData } from "./hooks/useDashboardData";

const Dashboard = () => {
  const { count, remaining, canMakeRequest, cooldownSeconds } =
    useRateLimiter();
  const { data, isFetching, error, refetch } = useDashboardData();

  const [analyticsMode, setAnalyticsMode] = useState(() => {
    return localStorage.getItem("analyticsMode") === "true";
  });
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("analyticsMode", analyticsMode.toString());
  }, [analyticsMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const handleFetch = () => {
    if (canMakeRequest) {
      refetch();
    }
  };

  const pieChartDataUsers = useMemo(
    () => [
      { name: "Today", value: data?.todaysUserAddition || 0 },
      { name: "Last 7 Days", value: data?.lastSevenDaysUserAddition || 0 },
      { name: "Last 30 Days", value: data?.lastThirtyDaysUsersAddition || 0 },
    ],
    [data]
  );

  const pieChartDataActive = useMemo(
    () => [
      { name: "Daily", value: data?.dailyActiveUsers || 0 },
      { name: "Weekly", value: data?.weeklyActiveUsers || 0 },
      { name: "Monthly", value: data?.monthlyActiveUsers || 0 },
    ],
    [data]
  );

  const areaChartData = useMemo(
    () => [
      {
        name: "Deposits",
        totalDepositAmount: data?.totalDepositAmount || 0,
        totalAdminDepositAmount: data?.totalAdminDepositAmount || 0,
        totalAdminBonusAmount: data?.totalAdminBonusAmount || 0,
      },
    ],
    [data]
  );

  const isCoolingDown = !canMakeRequest;
  const cooldownPercent = ((120 - cooldownSeconds) / 120) * 100;

  return (
    <div
      className={`min-h-screen p-6 transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center">📊 Dashboard</h1>
        <div className="flex items-center gap-4">
          <Switch
            id="analytics"
            checked={analyticsMode}
            onCheckedChange={setAnalyticsMode}
          />
          <Label htmlFor="analytics">{ !analyticsMode ? "Analytics" : "Statistics" }</Label>
          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-transform"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-col items-center space-y-1 text-center">
        <p>
          📥 Requests in last 2 minutes: <strong>{count}</strong>
        </p>
        <p>
          🚦 Remaining requests: <strong>{remaining}</strong>
        </p>
      </div>

      <button
        onClick={handleFetch}
        disabled={isCoolingDown}
        className="mt-2 mb-4 w-full px-4 py-2 rounded bg-blue-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Fetch Data
      </button>

      {isCoolingDown && (<CoolDown cooldownPercent={cooldownPercent} cooldownSeconds={cooldownSeconds} />)}

      {(isFetching || isCoolingDown) && (<Loader />)}

      {!isCoolingDown && !isFetching && error && (
        <p className="mt-4 text-red-600">Error: {error.message}</p>
      )}

      {!isCoolingDown && !isFetching && data && (
        <>
          {!analyticsMode ? ( <Statistics data={data} /> )  : (<Analytics pieChartDataActive={pieChartDataActive} pieChartDataUsers={pieChartDataUsers} areaChartData={areaChartData} />)}
        
        </>
      )}
    </div>
  );
};

export default Dashboard;
