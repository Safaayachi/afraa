import React from "react";
import { useState } from "react";

const RatingRange = () => {
  const [rate, setRate] = useState(0);
  console.log(rate);
  return (
    <div className="flex flex-row items-center">
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(10)}
      >
        {rate == 10 ? (
          <div className="flex h-24 items-end">
          <div className="flex flex-col gap-2 ">
            <div>
              <div className=" flex h-8 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                10
              </div>
              <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>
        </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">10</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-darkTint"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(9)}
      >
        {rate == 9 ? (
          <div className="flex h-24 items-end">
          <div className="flex flex-col gap-2 ">
            <div>
              <div className=" flex h-8 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                9
              </div>
              <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>
        </div>
        ) : rate > 9 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">9</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-primary"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">9</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-darkTint"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(8)}
      >
        {rate == 8 ? (
          <div className="flex h-24 items-end">
          <div className="flex flex-col gap-2 ">
            <div>
              <div className=" flex h-8 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                8
              </div>
              <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>
        </div>
        ) : rate > 8 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">8</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-primary"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">8</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-darkTint"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(7)}
      >
        {rate == 7 ? (
          <div className="flex h-24 items-end">
          <div className="flex flex-col gap-2 ">
            <div>
              <div className=" flex h-8 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                7
              </div>
              <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>
        </div>
        ) : rate > 7 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">7</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-primary"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">7</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-darkTint"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(6)}
      >
        {rate == 6 ? (
          <div className="flex h-24 items-end">
          <div className="flex flex-col gap-2 ">
            <div>
              <div className=" flex h-8 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                6
              </div>
              <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>
        </div>
        ) : rate > 6 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">6</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-primary"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">6</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-darkTint"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(5)}
      >
        {rate == 5 ? (
          <div className="flex h-24 items-end">
          <div className="flex flex-col gap-2 ">
            <div>
              <div className=" flex h-8 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                5
              </div>
              <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>
        </div>
        ) : rate > 5 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">5</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-primary"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">5</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-darkTint"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(4)}
      >
        {rate == 4 ? (
          <div className="flex h-24 items-end">
          <div className="flex flex-col gap-2 ">
            <div>
              <div className=" flex h-7 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                4
              </div>
              <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>
        </div>
        ) : rate > 4 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">4</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-primary"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">4</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-darkTint"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(3)}
      >
        {rate == 3 ? (
          <div className="flex h-24 items-end">
          <div className="flex flex-col gap-2 ">
            <div>
              <div className=" flex h-7 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                3
              </div>
              <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
              <div className="h-0.5 w-8 bg-primary"></div>
            </div>
          </div>
        </div>
        ) : rate > 3 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">3</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-primary"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">3</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-darkTint"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className="curser-pointer flex flex-row items-center"
        onClick={() => setRate(2)}
      >
        {rate == 2 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-2 ">
              <div>
                <div className=" flex h-7 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                  2
                </div>
                <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
              </div>
              <div className="flex flex-row items-center ">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
                <div className="h-0.5 w-8 bg-primary"></div>
              </div>
            </div>
          </div>
        ) : rate > 2 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">2</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-primary"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">2</div>
              <div className="flex flex-row items-center">
                <div className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-basic">
                  <div className="h-1 w-1 cursor-pointer rounded-full bg-darkTint hover:bg-primary"></div>
                </div>
                <div className="h-0.5 w-8 bg-darkTint"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="cursor-pointer" onClick={() => setRate(1)}>
        {rate == 1 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-2">
            <div>
                <div className=" flex h-7 w-7 items-center justify-center bg-primary text-sm font-bold text-tint">
                  2
                </div>
                <div className="w-7 flex justify-center"><div className="border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-primary"></div></div>
              </div>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-basic ring-2 ring-primary "></div>
            </div>
          </div>
        ) : rate > 1 ? (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">1</div>
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-basic ">
                <div className="h-1 w-1  rounded-full bg-primary "></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-24 items-end">
            <div className="flex flex-col gap-4">
              <div className="px-1 text-xs font-bold">1</div>
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-basic ">
                <div className="h-1 w-1  rounded-full bg-darkTint hover:bg-primary"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingRange;
