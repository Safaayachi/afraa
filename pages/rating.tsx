import React from "react";
import Layout from "../components/Layout";
import RatingRange from "../components/RatingRange";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n/next-i18next.config";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Rating: NextPage<{}> = () => {
  const { t, i18n } = useTranslation(["home", "room"]);
  return (
    <>
      <Layout>
        <div className="px-20 py-24">
          <Link passHref href={"/search"}>
            <div className="flex justify-end py-2">
              <i className="icon-keyboard_backspace_black_24dp cursor-pointer text-xl font-bold text-dark"></i>
            </div>
          </Link>
          <div className="flex justify-end  py-6 text-3xl font-extrabold text-dark">
            تقييم
          </div>
          <div className="flex w-full flex-col  items-center gap-10 lg:flex-row lg:justify-between ">
            <div className="flex flex-col gap-4 items-end">
              <div className="flex flex-col">
                <div className="flex justify-end  text-md font-bold text-dark">
                  {t("room:facilities")}
                </div>
                <RatingRange />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-end  text-md font-bold text-dark">
                  {t("room:comforts")}
                </div>
                <RatingRange />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-end  text-md font-bold text-dark">
                  {t("room:location")}
                </div>
                <RatingRange />
              </div>
            </div>
            <div className="flex flex-col gap-4 items-end">
              <div className="flex flex-col">
                <div className="flex justify-end  text-md font-bold text-dark">
                  {t("room:crew")}
                </div>
                <RatingRange />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-end  text-md font-bold text-dark">
                  {t("room:hygiene")}
                </div>
                <RatingRange />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-end  text-md font-bold text-dark">
                  {t("room:value-for-price")}
                </div>
                <RatingRange />
              </div>
            </div>
          </div>
          <div className="flex justify-end  py-4 text-lg font-bold text-dark">
            تعليقك
          </div>
          <textarea
            name=""
            id=""
            className="h-40 w-full border border-solid border-darkTint text-end"
          ></textarea>
          <div className="flex w-full justify-start py-4">
            <div className="bg-primary px-12 py-3 font-bold text-tint">حفظ</div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale as string,
        ["home", "common", "input","room"],
        nextI18NextConfig
      )),
    },
  };
};
export default Rating;
