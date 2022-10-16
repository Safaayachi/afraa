import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="h-3 w-full bg-shade flex justify-end">
      <div
        style={{ width: `${percentage}%` }}
        className={`h-full bg-primary`}
      ></div>
    </div>
  );
};

export default ProgressBar;
