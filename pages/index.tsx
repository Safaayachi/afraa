import Image from "next/image";
import Layout from "../components/Layout";
import RoomsSearch from "../components/RoomsSearch";
import Services from "../components/Services";
import Rooms from "./rooms/index";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n/next-i18next.config";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage<{}> = () => {
  const { t, i18n } = useTranslation(["home"]);
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
              <div className="absolute z-10 h-full w-full py-16 px-8 lg:px-28 lg:pt-52">
                <div className="relative flex h-full w-full flex-col gap-6 lg:gap-0">
                  <div className="relative flex h-2/6 w-full items-end justify-end">
                    <div className="flex w-full flex-col gap-4 lg:gap-6 ">
                      <div className="text-end text-4xl font-extrabold text-tint md:text-6xl">
                        {t("home:welcoming-part1")}
                      </div>
                      <div className="text-end text-4xl font-extrabold text-tint md:text-6xl">
                        {t("home:welcoming-part2")}
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
                    {t("home:best-services")}
                  </h1>
                  <p className="text-end text-2xl text-secondary">
                    {t("home:best-services-description")}
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
                  <h1 className="text-end text-3xl font-bold text-secondary lg:text-5xl">
                    {t("home:best-services")}
                  </h1>
                  <p className="text-end text-xl text-secondary lg:text-2xl">
                    {t("home:best-services-description")}
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
            <Rooms rooms={undefined} />
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
              <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-6 px-12 lg:px-32">
                <div className="text-end text-2xl font-extrabold text-tint lg:text-6xl">
                  {t("home:reception-description-part1")}
                </div>
                <div className="text-end text-2xl font-extrabold text-tint lg:text-6xl">
                  {t("home:reception-description-part2")}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
          <Services />
        </section>
      </Layout>
    </>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale as string,
        ["home","common","input"],
        nextI18NextConfig
      )),
    },
  };
};
export default Home;
