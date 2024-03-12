import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);
  const max = 100;
  const min = 0;

  useEffect(() => {
    setPercent(Math.min(Math.max(value, min)));
    if (value >= max) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="w-full h-20 rounded-full overflow-hidden mb-4 relative">
      <div
        className=" h-full transition-width duration-300 ease-in-out"
        style={{
          width: `${percent}%`,
          background: `hsl(${percent}, 70%, 50%)`,
        }}
      />
      <span
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold"
        style={{
          color: percent > 55 ? "white" : "black",
        }}
      >
        {percent.toFixed()}%
      </span>
    </div>
  );
};

export default ProgressBar;
