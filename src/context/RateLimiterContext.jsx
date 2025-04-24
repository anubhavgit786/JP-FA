import React, { createContext, useContext, useEffect, useState } from "react";

const RATE_LIMIT = 20;
const TIME_WINDOW_MS = 120000;
const STORAGE_KEY = "rate_limit_timestamps";

const RateLimiterContext = createContext(null);

export const RateLimiterProvider = ({ children }) => {
  const [requestTimestamps, setRequestTimestamps] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Cleanup old timestamps every second
  useEffect(() => {
    const interval = setInterval(() => {
      setRequestTimestamps((timestamps) => {
        const filtered = timestamps.filter((t) => Date.now() - t < TIME_WINDOW_MS);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
        return filtered;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const canMakeRequest = requestTimestamps.length < RATE_LIMIT;
  const remaining = Math.max(RATE_LIMIT - requestTimestamps.length, 0);

  const nextAllowedAt = !canMakeRequest && requestTimestamps.length
    ? requestTimestamps[0] + TIME_WINDOW_MS
    : null;

  const cooldownSeconds = nextAllowedAt
    ? Math.max(Math.ceil((nextAllowedAt - Date.now()) / 1000), 0)
    : 0;

  const registerRequest = () => {
    const newTimestamps = [...requestTimestamps, Date.now()];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTimestamps));
    setRequestTimestamps(newTimestamps);
  };

  return (
    <RateLimiterContext.Provider
      value={{
        canMakeRequest,
        registerRequest,
        count: requestTimestamps.length,
        remaining,
        cooldownSeconds,
      }}
    >
      {children}
    </RateLimiterContext.Provider>
  );
};

export const useRateLimiter = () => useContext(RateLimiterContext);
