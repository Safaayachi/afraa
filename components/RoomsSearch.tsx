import React from "react";
import Link from "next/link";
import DatePicker from "./DatePicker";

const RoomsSearch = () => {
  return (
    <div className="relative h-full w-full px-4 py-2 lg:px-1 lg:py-1 bg-tint">
      <div className="relative flex h-full w-full flex-col lg:flex-row-reverse lg:gap-2">
        <DatePicker/>
        <div className="relative flex h-1/6 w-full flex-col items-end border-b border-solid border-shade lg:h-full lg:w-1/6 lg:border-l lg:border-b-0">
          <p className="py-2 text-xs font-bold text-primary">عدد النزلاء </p>
          <div className="flex h-full w-full flex-row justify-between">
            <i className=" icon-keyboard_arrow_down_black_24dp font-sm flex cursor-pointer items-center px-2 text-xl text-dark"></i>
            <p className="flex items-center text-sm font-bold text-secondary">
              عدد النزلاء
            </p>
          </div>
        </div>
        <div className="relative flex h-1/6 w-full flex-col items-end border-b border-solid border-shade lg:h-full lg:w-1/6 lg:border-l lg:border-b-0">
          <p className="py-2 text-xs font-bold text-primary">عدد الغرف</p>
          <div className="flex h-full w-full flex-row justify-between">
            <i className=" icon-keyboard_arrow_down_black_24dp font-sm flex cursor-pointer items-center px-2 text-xl text-dark"></i>
            <p className="flex items-center text-sm font-bold text-secondary">
              عدد الغرف
            </p>
          </div>
        </div>
        <div className="relative flex h-1/6 w-full flex-col items-end lg:h-full lg:w-1/6">
          <label
            htmlFor="promoCode"
            className="py-2 text-xs font-bold text-primary"
          >
            البروموكود
          </label>
          <input
            type="text"
            id="promoCode"
            className="h-full w-full text-end text-sm font-bold text-secondary"
            placeholder="البروموكود"
          />
        </div>
        <Link passHref href={"/search"}>
          <button className="flex h-1/6 w-full cursor-pointer items-center justify-center bg-secondary text-2xl font-bold text-tint lg:h-full lg:w-1/6 lg:border-l lg:border-b-0">
            بحث
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RoomsSearch;
