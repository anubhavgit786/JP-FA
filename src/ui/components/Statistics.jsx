import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { camelCaseToTitleCase } from "@/utils";

const Statistics = ({ data }) => 
{
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(data).map(([key, value]) => (
        <Card key={key} className="hover:scale-[1.02] transition-transform">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-lg font-semibold">
              {camelCaseToTitleCase(key)}
            </h2>
            {typeof value === "object" ? (
              <pre className="text-sm whitespace-pre-wrap break-words">
                {JSON.stringify(value, null, 2)}
              </pre>
            ) : (
              <p className="text-2xl font-bold">{value}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Statistics;
