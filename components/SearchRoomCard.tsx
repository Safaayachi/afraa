import React from "react";
import Image from "next/image";

const SearchRoomCard = () => {
  return (
    <div className="relative flex h-full w-full flex-col border border-solid border-shade bg-tint">
      <div className="relative h-56 w-full">
        <Image
          alt="afraa-hotel"
          src="/images/kingRoom.png"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="flex flex-col px-4 ">
        <div className="flex justify-end border-b border-solid border-shade py-4 text-3xl font-bold text-dark">
          غرفة كينج
        </div>
        <div className="flex flex-col  py-2">
          <div className="flex flex-row justify-end gap-6">
            <div className="flex flex-row gap-2">
              <div className="flex items-center text-xs font-bold text-dark">
                متر مربع
              </div>
              <div>
                <i className="icon-fullscreen_black_24dp text-lg text-primary"></i>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex items-center text-xs font-bold text-dark">
                تتسع لشخصين
              </div>
              <div>
                <i className="icon-supervisor_account_black_24dp text-lg text-primary"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-2">
            <div className="flex items-center text-xs font-bold text-dark">
              1 سرير مزدوج كبير
            </div>
            <div>
              <i className="icon-king_bed_black_24dp-1 text-lg text-primary"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-shade bg-basic px-4">
        <div className="flex flex-col border-b border-solid border-shade">
          <div className="flex flex-col py-2">
            <div className="flex justify-end text-sm font-extrabold text-dark">
              غرفة كينج بدون إطلالة
            </div>
            <div className="flex flex-row justify-end gap-2">
              <div className="flex items-center text-xs font-bold text-dark">
                مشمول الإفطار
              </div>
              <div>
                <i className="icon-local_cafe_black_24dp text-sm text-primary"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between pb-2">
            <div className="flex justify-center items-center font-semibold bg-primary cursor-pointer w-28 h-10 text-tint">
              اختر
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className=" text-xs font-semibold text-secondary">SAR</div>
              <div className="flex text-xl font-extrabold text-primary ">
                397.00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b border-solid border-shade">
          <div className="flex flex-col py-2">
            <div className="flex justify-end text-sm font-extrabold text-dark">
              غرفة كينج مع إطلالة على المدينة{" "}
            </div>
            <div className="flex flex-row gap-4 justify-end">
            <div className="flex flex-row justify-end gap-2">
              <div className="flex items-center text-xs font-bold text-dark">
                مشمول الإفطار
              </div>
              <div>
                <i className="icon-local_cafe_black_24dp text-sm text-primary"></i>
              </div>
            </div>
            <div className="flex flex-row justify-end gap-2">
              <div className="flex items-center text-xs font-bold text-dark">
                مشمول الإفطار
              </div>
              <div>
                <i className="icon-local_cafe_black_24dp text-sm text-primary"></i>
              </div>
            </div>
            </div>
            
          </div>
          <div className="flex flex-row justify-between pb-2">
            <div className="relative flex flex-row w-28 h-10 items-center bg-primary">
               <div className="flex justify-center items-center w-1/3 "><i className="icon-add_black_24dp-2 text-lg cursor-pointer text-tint"></i></div>
               <div className="flex justify-center items-center h-9 bg-tint w-1/3 text-secondary font-bold">2</div>
               <div className="flex justify-center items-center w-1/3 "><i className="icon-remove_black_24dp text-lg cursor-pointer text-tint"></i></div>
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className=" text-xs font-semibold text-secondary">SAR</div>
              <div className="flex text-xl font-extrabold text-primary ">
                397.00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b border-solid border-shade">
          <div className="flex flex-col py-2">
            <div className="flex justify-end text-sm font-extrabold text-dark">
              غرفة كينج بدون إطلالة
            </div>
            <div className="flex flex-row justify-end gap-2">
              <div className="flex items-center text-xs font-bold text-dark">
                مشمول الإفطار
              </div>
              <div>
                <i className="icon-local_cafe_black_24dp text-sm text-primary"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between pb-2">
            <div className="flex justify-center font-semibold bg-primary items-center cursor-pointer w-28 h-10 text-tint">
              اختر
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className=" text-xs font-semibold text-secondary">SAR</div>
              <div className="flex text-xl font-extrabold text-primary ">
                397.00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b border-solid border-shade">
          <div className="flex flex-col py-2">
            <div className="flex justify-end text-sm font-extrabold text-dark">
              غرفة كينج بدون إطلالة
            </div>
            <div className="flex flex-row justify-end gap-2">
              <div className="flex items-center text-xs font-bold text-dark">
                مشمول الإفطار
              </div>
              <div>
                <i className="icon-local_cafe_black_24dp text-sm text-primary"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between pb-2">
            <div className="flex justify-center font-semibold bg-primary w-28 h-10 items-center cursor-pointer text-tint">
              اختر
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className=" text-xs font-semibold text-secondary">SAR</div>
              <div className="flex text-xl font-extrabold text-primary ">
                397.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchRoomCard;
