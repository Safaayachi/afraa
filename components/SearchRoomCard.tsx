import React from "react";
import Image from "next/image";

const SearchRoomCard = () => {
  return (
    <div className="relative flex h-full w-full flex-col border border-solid border-shade bg-tint">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="relative h-56 w-full lg:w-96">
          <Image
            alt="afraa-hotel"
            src="/images/kingRoom.png"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="flex flex-col px-4">
        <div className="flex justify-end border-b border-solid border-shade py-4 text-3xl font-bold text-dark">
          غرفة كينج
        </div>
        <div className="flex flex-col py-2 lg:flex-row-reverse lg:gap-6">
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
      </div>
      <div className="border-t border-solid border-shade bg-basic px-4">
        <div className="flex flex-col border-b border-solid border-shade lg:flex-row-reverse lg:items-center ">
          <div className="flex flex-col py-2 lg:w-1/2">
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
          <div className="flex flex-row items-center justify-between pb-2 lg:w-1/2 lg:border-r lg:border-solid lg:border-shade lg:flex-row-reverse lg:py-6 lg:px-10">
            <div className="flex h-10 w-28 cursor-pointer items-center justify-center bg-primary font-semibold text-tint">
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
        <div className="flex flex-col border-b border-solid border-shade lg:flex-row-reverse lg:items-center">
          <div className="flex flex-col py-2 lg:w-1/2">
            <div className="flex justify-end text-sm font-extrabold text-dark">
              غرفة كينج مع إطلالة على المدينة{" "}
            </div>
            <div className="flex flex-row justify-end gap-4">
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
          <div className="flex flex-row justify-between pb-2 lg:w-1/2 lg:border-r lg:border-solid lg:border-shade lg:flex-row-reverse lg:py-6 lg:px-10">
            <div className="relative flex h-10 w-28 flex-row items-center bg-primary">
              <div className="flex w-1/3 items-center justify-center ">
                <i className="icon-add_black_24dp-2 cursor-pointer text-lg text-tint"></i>
              </div>
              <div className="flex h-9 w-1/3 items-center justify-center bg-tint font-bold text-secondary">
                2
              </div>
              <div className="flex w-1/3 items-center justify-center ">
                <i className="icon-remove_black_24dp cursor-pointer text-lg text-tint"></i>
              </div>
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className=" text-xs font-semibold text-secondary">SAR</div>
              <div className="flex text-xl font-extrabold text-primary ">
                397.00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b border-solid border-shade lg:flex-row-reverse lg:items-center">
          <div className="flex flex-col py-2 lg:w-1/2">
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
          <div className="flex flex-row justify-between pb-2 lg:w-1/2 lg:border-r lg:border-solid lg:border-shade lg:flex-row-reverse lg:py-6 lg:px-10">
            <div className="flex h-10 w-28 cursor-pointer items-center justify-center bg-primary font-semibold text-tint">
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
        <div className="flex flex-col border-b border-solid border-shade lg:flex-row-reverse lg:items-center">
          <div className="flex flex-col py-2 lg:w-1/2">
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
          <div className="flex flex-row justify-between pb-2 lg:w-1/2 lg:border-r lg:border-solid lg:border-shade lg:flex-row-reverse lg:py-6 lg:px-10">
            <div className="flex h-10 w-28 cursor-pointer items-center justify-center bg-primary font-semibold text-tint">
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
