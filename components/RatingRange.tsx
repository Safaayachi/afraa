import React from "react";
import { useState } from "react";

const RatingRange = () => {
  const [rate, setRate] = useState(0);
  console.log(rate);
  return (
    <div className="flex flex-row items-center">
      <div className="cursor-pointer" onClick={() => setRate(10)}>
        {rate == 10 ? (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-shade ring-4 ring-primary ">
            <div className="h-1.5 w-1.5  rounded-full bg-primary hover:bg-primary"></div>
          </div>
        ) : rate < 10 ? (
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade ">
            <div className="h-1.5 w-1.5  rounded-full bg-primary "></div>
          </div>
        ) : (
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-shade ">
            <div className="h-1.5 w-1.5  rounded-full bg-darkTint hover:bg-primary"></div>
          </div>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(9)}
      >
        {rate == 9 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-shade ring-2 ring-primary">
            </div>
          </>
        ) : rate < 9 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-10 bg-darkTint"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(8)}
      >
        {rate == 8 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full ring-4 ring-primary">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        ) : rate < 8 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-10 bg-darkTint"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(7)}
      >
        {rate == 7 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full ring-4 ring-primary">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        ) : rate < 7 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-10 bg-darkTint"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(6)}
      >
        {rate == 6 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full ring-4 ring-primary">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        ) : rate < 6 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-10 bg-darkTint"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(5)}
      >
        {rate == 5 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full ring-4 ring-primary">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        ) : rate < 5 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-10 bg-darkTint"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(4)}
      >
        {rate == 4 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full ring-4 ring-primary">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        ) : rate < 4 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-10 bg-darkTint"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(3)}
      >
        {rate == 3 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full ring-4 ring-primary">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        ) : rate < 3 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-10 bg-darkTint"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(2)}
      >
        {rate == 2 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full ring-4 ring-primary">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        ) : rate < 2 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-10 bg-darkTint"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(1)}
      >
        {rate == 1 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full ring-4 ring-primary">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        ) : rate < 1 ? (
          <>
            <div className="h-0.5 w-10 bg-primary"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-primary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="h-0.5 w-10 bg-darkTint"></div>
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-shade">
              <div className="h-1.5 w-1.5 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RatingRange;
