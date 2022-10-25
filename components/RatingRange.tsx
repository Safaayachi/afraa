import React from "react";

const RatingRange = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade">
        <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-0.5 w-10 bg-darkTint"></div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade">
          <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-0.5 w-10 bg-darkTint"></div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade">
          <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-0.5 w-10 bg-darkTint"></div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade">
          <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-0.5 w-10 bg-darkTint"></div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade">
          <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-0.5 w-10 bg-darkTint"></div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-shade ring-4 ring-primary">
          <div className="flex flex-row">
          <i className="chevron_right_black_24dp text-md text-primary"></i>
          <i className="chevron_left_black_24dp1 text-md text-primary"></i>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-0.5 w-10 bg-primary"></div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade">
          <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary hover:bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-0.5 w-10 bg-primary"></div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade">
          <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary hover:bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-0.5 w-10 bg-primary"></div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade">
          <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary hover:bg-primary"></div>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-0.5 w-10 bg-primary"></div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade">
          <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary hover:bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default RatingRange;
