import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="relative w-full pt-20">
          <div className=" h-[60rem] w-full lg:h-[40rem] 2xl:h-[50rem]">
            <div className="relative h-full w-full">
              <Image
                alt="afraa-hotel"
                src="/images/landingPageCover.png"
                layout="fill"
                objectFit="cover"
              ></Image>
              <div className="absolute z-10 h-full w-full bg-black opacity-50"></div>
              <div className="absolute z-10 h-full w-full p-6 py-20 lg:px-16">
                <div className="relative flex h-full w-full flex-col gap-10">
                  <div className="relative flex h-2/6 w-full justify-end">
                    <div className="flex flex-col gap-10 lg:w-1/2 ">
                      <div className="text-end text-5xl font-bold text-tint  2xl:text-7xl">
                        مرحبا بكم في{" "}
                      </div>
                      <div className="text-end text-5xl font-bold text-tint  2xl:text-7xl">
                        فندق عفراء العزيزية
                      </div>
                    </div>
                  </div>
                  <div className="relative flex h-4/6 justify-end items-center">
                    <div className="w-full h-full bg-tint lg:w-5/6 lg:h-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-10"></section>
      </Layout>
    </>
  );
}
