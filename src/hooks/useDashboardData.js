import { useQuery } from "@tanstack/react-query";
import { useRateLimiter } from "../context/RateLimiterContext";

const fetchData = async () => {
  const res = await fetch("https://d29l1nxcqevrmo.cloudfront.net/dashboard");
  if (!res.ok) throw new Error("Error fetching data");
  const data = await res.json();
  return data.data;
};

export const useDashboardData = () => 
{
  const { registerRequest } = useRateLimiter();

  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      registerRequest(); // call only when manually triggered
      return await fetchData();
    },
    enabled: false, // don’t fetch automatically
    retry: false,
  });
};
