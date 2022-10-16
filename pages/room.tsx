import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import Rooms from "../components/Rooms";
import ProgressBar from "../components/ProgressBar";

const room = () => {
  return (
    <div className="relative h-full w-full">
      <Layout>
        <div className="relative h-full w-full">
          <div className=" h-[50rem] w-full lg:h-[35rem] 2xl:h-[50rem]">
            <div className="relative h-full w-full">
              <Image
                alt="afraa-hotel"
                src="/images/king-room.png"
                layout="fill"
                objectFit="cover"
              ></Image>
              <div className="absolute z-10 h-full w-full bg-black opacity-50"></div>
              <div className="absolute z-10 flex h-full w-full flex-col items-end justify-between px-32 pt-28">
                <Link passHref href={"/search"}>
                  <div className="flex justify-end py-2">
                    <i className="icon-keyboard_backspace_black_24dp cursor-pointer text-xl  text-white"></i>
                  </div>
                </Link>
                <div className="relative flex w-full flex-col items-end gap-8 pb-20">
                  <div className="flex w-1/2 justify-end  border-b border-solid border-b-shade py-6 text-5xl font-extrabold text-tint">
                    غرفة توأم
                  </div>
                  <div className="flex flex-row gap-20">
                    <div className="flex flex-col items-end gap-8 text-tint">
                      <div>عدد الاسرة</div>
                      <div className="text-xl">2 سرير فردي </div>
                    </div>
                    <div className="flex flex-col items-end gap-8 text-tint ">
                      <div>مساحة الغرفة</div>
                      <div className="text-xl">25 متر مربع</div>
                    </div>
                    <div className="flex flex-col items-end gap-8 text-tint">
                      <div>عدد الضيوف </div>
                      <div className="text-xl">2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="relative h-full w-full bg-tint px-32 py-10">
          <div className="relative flex h-[400px] w-full flex-row justify-between gap-10 ">
            <div className="relative w-[400px] ">
              <Image
                alt="afraa-hotel"
                src="/images/tv.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="flex w-1/2 items-center justify-end">
              <div className="text-end text-sm leading-8 text-dark">
                فندق عفراء يقدم لك مجموعة متنوعة و مميزة من الغرف و الأجنحة التي
                تبلغ 470 غرفةو التي تناسب ذوقك لمزيد من الراحة و الرفاهية. و
                يقدم لكم فندق عفراء أفضل خدمات الضيافة المميزة لإقامة أكثر راحة
                و هدوء في Afraa Alazizia
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="flex justify-end text-5xl font-bold">
              مرافق الغرفة{" "}
            </div>
            <div className="flex flex-row justify-end gap-4 py-10">
              <div className="flex items-center justify-center border border-solid border-shade p-4 ">
                <i className="icon-ac_unit_black_24dp-2  text-xl  text-darkTint"></i>
              </div>
              <div className="flex items-center justify-center border border-solid border-shade p-4 ">
                <i className="icon-ac_unit_black_24dp-2  text-xl  text-darkTint"></i>
              </div>
              <div className="flex items-center justify-center border border-solid border-shade p-4 ">
                <i className="icon-ac_unit_black_24dp-2  text-xl  text-darkTint"></i>
              </div>
              <div className="flex items-center justify-center border border-solid border-shade p-4 ">
                <i className="icon-ac_unit_black_24dp-2  text-xl  text-darkTint"></i>
              </div>
              <div className="flex items-center justify-center border border-solid border-shade p-4 ">
                <i className="icon-ac_unit_black_24dp-2  text-xl  text-darkTint"></i>
              </div>
              <div className="flex items-center justify-center border border-solid border-shade p-4 ">
                <i className="icon-ac_unit_black_24dp-2  text-xl  text-darkTint"></i>
              </div>
              <div className="flex items-center justify-center border border-solid border-shade p-4 ">
                <i className="icon-ac_unit_black_24dp-2  text-xl  text-darkTint"></i>
              </div>
              <div className="flex items-center justify-center border border-solid border-shade p-4 ">
                <i className="icon-ac_unit_black_24dp-2  text-xl  text-darkTint"></i>
              </div>
              <div className="flex items-center justify-center border border-solid border-shade p-4 ">
                <i className="icon-ac_unit_black_24dp-2  text-xl  text-darkTint"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
          <div className="relative h-[50rem] w-full">
            <div className="relative h-full w-full">
              <div className="h-1/2 w-full bg-shade"></div>
              <div className="h-1/2 w-full bg-tint"></div>
            </div>
            <div className="absolute inset-0 z-10 flex h-full w-full flex-col px-32 ">
              <div className="flex justify-end py-10 text-5xl font-bold">
                مرافق الغرفة{" "}
              </div>
              <div className="relative flex h-full w-full">
                <Image
                  alt="afraa-hotel"
                  src="/images/pics.png"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative h-[60rem] w-full">
            <Rooms />
          </div>
        </section>
        <section className="px-32">
          <div className="relative h-full w-full  flex flex-col gap-2 border-b border-solid border-b-shade">
            <div className="flex justify-end  text-5xl font-bold">
              مرافق الغرفة{" "}
            </div>
            <div className="flex h-10 w-32 items-center justify-center bg-secondary font-semibold text-tint text-xl">
              اكتب تقييم
            </div>
            <div className="flex w-full flex-row justify-end py-10">
              <div className="relative flex flex-row gap-6 w-1/2 justify-end"> 
                <div className="flex flex-col gap-6 w-1/2">
                  <div className=" flex flex-col gap-1">
                    <label className="flex justify-end text-lg text-dark font-extrabold">طاقم العمل</label>
                    <div className="flex flex-row gap-2 items-center justify-end">
                      <div className="text-dark text-sm">8.5</div>
                      <div className="relative w-5/6">
                        <ProgressBar percentage={85}/>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-1">
                    <label className="flex justify-end text-lg text-dark font-extrabold">طاقم العمل</label>
                    <div className="flex flex-row gap-2 items-center justify-end">
                      <div className="text-dark text-sm">8.5</div>
                      <div className="relative w-5/6">
                        <ProgressBar percentage={85}/>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-1">
                    <label className="flex justify-end text-lg text-dark font-extrabold">طاقم العمل</label>
                    <div className="flex flex-row gap-2 items-center justify-end">
                      <div className="text-dark text-sm">8.5</div>
                      <div className="relative w-5/6">
                        <ProgressBar percentage={85}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 w-1/2 ">
                <div className=" flex flex-col gap-1">
                    <label className="flex justify-end text-lg text-dark font-extrabold">طاقم العمل</label>
                    <div className="flex flex-row gap-2 items-center justify-end">
                      <div className="text-dark text-sm">8.5</div>
                      <div className="relative w-5/6">
                        <ProgressBar percentage={85}/>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-1">
                    <label className="flex justify-end text-lg text-dark font-extrabold">طاقم العمل</label>
                    <div className="flex flex-row gap-2 items-center justify-end">
                      <div className="text-dark text-sm">8.5</div>
                      <div className="relative w-5/6">
                        <ProgressBar percentage={85}/>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-1">
                    <label className="flex justify-end text-lg text-dark font-extrabold">طاقم العمل</label>
                    <div className="flex flex-row gap-2 items-center justify-end">
                      <div className="text-dark text-sm">8.5</div>
                      <div className="relative w-5/6">
                        <ProgressBar percentage={85}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ga-2 flex flex-row gap-2 w-1/2 justify-end">
                <div className="flex flex-col gap-1">
                  <div className="text-4xl text-dark font-bold">جيد جدا</div>
                  <div className="text-darkTint text-end">2423 تقييم</div>
                </div>
                <div className="bg-primary h-16 w-16 flex justify-center items-center text-4xl font-bold text-tint">
                  8.0
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative h-[60rem] w-full">
            
          </div>
      </Layout>
    </div>
  );
};

export default room;
