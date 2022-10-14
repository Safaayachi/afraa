import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import RoomsSearch from "../components/RoomsSearch";
import Services from "../components/Services";
import Rooms from "../components/Rooms";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="relative w-full ">
          <div className=" h-[50rem] w-full lg:h-[40rem] 2xl:h-[50rem]">
            <div className="relative h-full w-full">
              <Image
                alt="afraa-hotel"
                src="/images/landingPageCover.png"
                layout="fill"
                objectFit="cover"
              ></Image>
              <div className="absolute z-10 h-full w-full bg-black opacity-50"></div>
              <div className="absolute z-10 h-full w-full py-16 lg:py-32 px-8 lg:px-28">
                <div className="relative flex h-full w-full flex-col gap-10 lg:gap-0">
                  <div className="relative flex h-2/6 w-full items-end justify-end">
                    <div className="flex w-full flex-col gap-4 lg:w-1/2 lg:gap-10 ">
                      <div className="text-end text-4xl font-extrabold text-tint md:text-6xl   ">
                        مرحبا بكم في{" "}
                      </div>
                      <div className="text-end text-4xl font-extrabold text-tint md:text-6xl  ">
                        فندق عفراء العزيزية
                      </div>
                    </div>
                  </div>
                  <div className="relative flex h-4/6 items-center justify-end">
                    <div className="relative h-full w-full bg-tint lg:h-1/4 lg:w-5/6">
                      <RoomsSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full">
          <div className="relative flex w-full justify-end px-8 py-16 lg:p-32">
            <div className="absolute inset-0 z-10 hidden h-full w-full items-center justify-start lg:flex">
              <div className="relative h-1/3 w-3/4 bg-tint p-16">
                <div className="flex h-full w-full flex-col items-end gap-6 bg-white">
                  <h1 className="text-end text-7xl font-bold text-secondary">
                    افضل الخدمات
                  </h1>
                  <p className="text-end text-2xl text-secondary">
                    فندق عفراء يقدم لك مجموعة متنوعة و مميزة من الغرف و الأجنحة
                    التي تبلغ 470 غرفةو التي تناسب ذوقك لمزيد من الراحة و
                    الرفاهية. و يقدم لكم فندق عفراء أفضل خدمات الضيافة المميزة
                    لإقامة أكثر راحة و هدوء في Afraa Alazizia
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[50rem] w-full lg:w-4/6 ">
              <div className="relative h-1/2 w-full lg:h-full">
                <Image
                  alt="afraa-hotel"
                  src="/images/section2.png"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>

              <div className="relative h-1/2 w-full  py-12 lg:hidden">
                <div className="flex h-full w-full flex-col items-end gap-6 bg-white">
                  <h1 className="text-end text-3xl lg:text-5xl font-bold text-secondary">
                    افضل الخدمات
                  </h1>
                  <p className="text-end text-xl lg:text-2xl text-secondary">
                    فندق عفراء يقدم لك مجموعة متنوعة و مميزة من الغرف و الأجنحة
                    التي تبلغ 470 غرفةو التي تناسب ذوقك لمزيد من الراحة و
                    الرفاهية. و يقدم لكم فندق عفراء أفضل خدمات الضيافة المميزة
                    لإقامة أكثر راحة و هدوء في Afraa Alazizia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative h-[60rem] w-full">
            <div className="relative h-full w-full">
              <div className="h-1/2 w-full bg-shade"></div>
              <div className="h-1/2 w-full bg-tint"></div>
            </div>
            <Rooms/>
          </div>
        </section>
        <section>
          <div className="relative h-[60rem] w-full py-32 lg:h-[60rem]">
            <div className="relative h-full w-full ">
              <Image
                alt="afraa-reception"
                src="/images/reception.png"
                layout="fill"
                objectFit="cover"
              ></Image>
              <div className="absolute z-10 h-full w-full bg-black opacity-30"></div>
              <div className="absolute z-10 flex h-full w-full flex-col gap-6 items-center justify-center px-12 lg:px-32">
                <div className="text-2xl lg:text-6xl text-tint font-extrabold text-end">
                  تمتع بالفخامه و الاجواء الروحانية
                </div>
                <div className="text-2xl lg:text-6xl text-tint font-extrabold text-end">فى فندق عفراء</div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
        <Services/>
        </section>
      </Layout>
    </>
  );
}
