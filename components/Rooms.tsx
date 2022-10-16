import React from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

const Rooms = () => {
  const [isRoomsShowing, setRoomsShowing] = useState(false);
  const [isSuiteShowing, setSuiteShowing] = useState(false);
  return (
    <div className="absolute inset-0 z-10 h-full w-full px-8 lg:p-32">
      <div className="relative flex h-full w-full flex-col">
        <div className="flex h-1/6  w-full justify-end ">
          <div className="flex items-center text-4xl  font-black text-dark lg:text-6xl">
            الغرف و الأجنحة
          </div>
        </div>
        <div className="relative flex h-5/6 w-full flex-col-reverse gap-10  lg:flex-row">
          <div className="relative h-1/2 w-full  lg:h-full lg:w-1/2 ">
            <Image
              alt="afraa-suites"
              src="/images/suites.png"
              layout="fill"
              objectFit="cover"
            ></Image>
            <div className="absolute z-10 flex w-full h-full items-center justify-center">
              <div className="mb-10 text-3xl font-bold text-tint">الأجنحة </div>
            </div>
            <div
              className="absolute z-20 flex h-full w-full items-center justify-center text-tint hover:bg-black hover:bg-opacity-20"
              onMouseEnter={() => setSuiteShowing(true)}
              onMouseLeave={() => setSuiteShowing(false)}
            >
              <Transition
                show={isSuiteShowing}
                enter="transition-opacity duration-250 scale-y-75 origin-top delay-75 ease-in-out "
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-250"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="mt-32 flex flex-col items-center gap-2 text-lg">
                  <Link passHref href={"/"}><div className="cursor-pointer">جناح جونيور</div></Link>
                  <Link passHref href={"/"}><div className="cursor-pointer">جناح من غرفتين</div></Link>
                  <Link passHref href={"/"}><div className="cursor-pointer">جناح عائلى</div></Link>
                </div>
              </Transition>
            </div>
          </div>
          <div className="relative h-1/2 w-full  lg:h-full lg:w-1/2 ">
            <Image
              alt="afraa-rooms"
              src="/images/rooms.png"
              layout="fill"
              objectFit="cover"
            ></Image>
            <div className="absolute z-10 flex w-full h-full items-center justify-center ">
              <div className="mb-10 text-3xl font-bold text-tint">الغرف </div>
            </div>
            <div
              className="absolute z-20 flex h-full w-full items-center justify-center  text-tint hover:bg-black hover:bg-opacity-20"
              onMouseEnter={() => setRoomsShowing(true)}
              onMouseLeave={() => setRoomsShowing(false)}
            >
              <Transition
                show={isRoomsShowing}
                enter="transition-opacity duration-250 scale-y-75 origin-top delay-75 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-250"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="mt-48 flex flex-col items-center gap-2 text-lg">
                  <Link passHref href={"/room"}><div className="cursor-pointer ">غرف رباعية</div></Link>
                  <Link passHref href={"/"}><div className="cursor-pointer">غرف ثلاثية</div></Link>
                  <Link passHref href={"/"}><div className="cursor-pointer">غرف توأم </div></Link>
                  <Link passHref href={"/"}><div className="cursor-pointer">غرفة كينج</div></Link>
                  <Link passHref href={"/"}><div className="cursor-pointer">غرفة عائلية </div></Link>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
