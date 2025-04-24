import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.jsx";

import { RateLimiterProvider } from "./context/RateLimiterContext.jsx";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RateLimiterProvider>
      <App />
    </RateLimiterProvider>
  </QueryClientProvider>
);
