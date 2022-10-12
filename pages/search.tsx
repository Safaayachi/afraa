import React from "react";
import Layout from "../components/Layout";
import SearchRoomCard from "../components/SearchRoomCard";
import Link from "next/link";

const search = () => {
  return (
    <div className="relative h-full w-full">
      <Layout>
        <div className="relative h-full w-full pt-20">
          <div className="relative flex h-full w-full flex-col px-8">
            <div className="flex flex-col lg:hidden">
              <Link passHref href={"/"}>
                <div className="flex justify-end py-2">
                  <i className="icon-keyboard_backspace_black_24dp cursor-pointer text-xl font-bold text-secondary"></i>
                </div>
              </Link>
              <div className="relative flex h-12 flex-row items-center border border-solid border-shade">
                <div className="flex h-10 w-1/3 cursor-pointer flex-row items-center justify-center gap-1 border-r border-solid border-shade">
                  <div className="font-bold text-secondary ">فرز</div>
                  <i className="icon-filter_list_black_24dp text-xl font-bold text-secondary  "></i>
                </div>
                <div className="flex h-10 w-1/3 cursor-pointer flex-row items-center justify-center gap-1 border-r border-solid border-shade">
                  <div className="font-bold text-secondary ">فلتر</div>
                  <i className="icon-filter_alt_black_24dp text-xl font-bold text-secondary  "></i>
                </div>
                <div className="flex h-10 w-1/3 cursor-pointer flex-row items-center justify-center gap-1 border-r border-solid border-shade">
                  <div className="font-bold text-secondary ">بحث</div>
                  <i className="icon-search_black_24dp-4 text-xl font-bold text-secondary  "></i>
                </div>
              </div>
              <div className="flex flex-row justify-end gap-2 py-4 text-lg font-bold text-dark">
                <span>غرفة</span>
                <div>12</div>
              </div>
            </div>
            <div className="flex flex-col gap-12 py-4">
              <SearchRoomCard />
              <SearchRoomCard />
              <SearchRoomCard />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 z-10 flex h-20 lg:h-24 w-full border border-solid border-shade  bg-tint px-8 lg:px-20 ">
          <div className="flex h-full w-full flex-row items-center justify-between">
            <div className="flex h-14 w-40 cursor-pointer items-center justify-center bg-secondary text-lg font-bold text-tint">
              سوف احجز
            </div>
            <div className="flex h-20 w-60 flex-col items-end py-1">
              <span className="text-xs font-semibold text-dark">
                3 غرف مقابل
              </span>
              <div className="flex flex-row gap-2">
                <span className="flex items-center font-extrabold text-secondary ">
                  SAR
                </span>
                <div className="text-4xl font-bold lg:text-5xl text-primary">1,680.00</div>
              </div>
              <div className="flex flex-row text-darkTint text-xs">
                <span>+SAR 317</span>
                <div>ضرائب و رسوم </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default search;
