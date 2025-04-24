import React from "react";

const CoolDown = ({ cooldownSeconds, cooldownPercent }) => 
{
  return (
    <div className="mt-6">
      <div className="mb-2 text-red-600 font-semibold">
        Rate limit reached. Please wait {cooldownSeconds} second
        {cooldownSeconds !== 1 && "s"}.
      </div>

      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-500 transition-all duration-1000"
          style={{ width: `${cooldownPercent}%` }}
        ></div>
      </div>

      <p className="text-sm mt-1 text-gray-500 italic">
        Cooldown: {cooldownPercent.toFixed(0)}%
      </p>
    </div>
  );
};

export default CoolDown;
