import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n/next-i18next.config";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact: NextPage<{}> = () => {
  const { t } = useTranslation(["input", "button", "common", "home"]);
  return (
    <>
      <Layout>
        <div className="relative flex h-full w-full flex-col pt-16">
          <section className="relative flex h-full w-full flex-col lg:flex-row-reverse">
            <div className="relative h-1/2 w-full py-7 px-8  lg:h-full lg:w-1/2 lg:px-16">
              <div className="relative flex h-full w-full flex-col gap-8 pb-10 lg:gap-12">
                <Link passHref href="/">
                  <div className="flex items-center justify-end">
                    <i className="icon-keyboard_backspace_black_24dp font-xs cursor-pointer text-xl text-secondary hover:text-primary"></i>
                  </div>
                </Link>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-center text-sm font-extrabold text-secondary">
                    {t("common:address-p1")}
                  </div>
                  <div className="flex justify-center text-sm font-extrabold text-secondary">
                    {t("common:address-p2")}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-center text-sm font-extrabold text-secondary">
                    +966 542 555 523
                  </div>
                  <div className="flex justify-center text-sm font-extrabold text-secondary">
                    +966 555 086 177
                  </div>
                </div>
                <div className="flex justify-center text-sm font-extrabold text-secondary">
                  afrahotel1@gmail.com
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-center text-sm font-extrabold text-secondary">
                    Twitter
                  </div>
                  <div className="flex justify-center text-sm font-extrabold text-secondary">
                    Facebook
                  </div>
                  <div className="flex justify-center text-sm font-extrabold text-secondary">
                    Instagram
                  </div>
                  <div className="flex justify-center text-sm font-extrabold text-secondary">
                    Snapchat
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full bg-secondary lg:h-full lg:w-1/2">
              <div className=" relative h-full w-full  py-8 px-8 lg:px-16">
                <div className="relative h-full w-full py-4 lg:py-10">
                  <form className="flex h-full w-full flex-col gap-4">
                    <fieldset className="flex flex-col gap-6">
                      <h1 className="flex justify-end text-2xl font-extrabold text-tint ">
                        {t("common:contact")}
                      </h1>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                          <label
                            htmlFor="name"
                            className="flex justify-end text-darkTint"
                          >
                            {t("input:full-name")}
                          </label>
                          <input
                            type="text"
                            id="name"
                            className=" border border-solid border-darkTint p-3 text-end text-darkTint "
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label
                            htmlFor="email"
                            className="flex justify-end text-darkTint"
                          >
                            {t("input:email")}
                          </label>
                          <input
                            type="email"
                            id="email"
                            className=" border border-solid border-darkTint p-3 text-end text-darkTint "
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label
                            htmlFor="subject"
                            className="flex justify-end text-darkTint"
                          >
                            {t("input:subject")}
                          </label>
                          <input
                            type="text"
                            id="subject"
                            className=" border border-solid border-darkTint p-3 text-end text-darkTint "
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label
                            htmlFor="subject"
                            className="flex justify-end text-darkTint"
                          >
                            {t("input:message")}
                          </label>
                          <textarea
                            id="subject"
                            className=" min-h-[200px] border border-solid border-darkTint p-3 text-end text-darkTint "
                          ></textarea>
                        </div>
                      </div>
                    </fieldset>
                    <button className="flex w-full justify-center bg-tint py-3 font-extrabold text-secondary ">
                      {t("input:send")}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="relative h-[400px] w-full ">
            <iframe
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12939.492122698986!2d10.585889550000001!3d35.827590799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b3a0237010f%3A0x4418fc1f1a3cb73f!2sPolytechnique%20Sousse!5e0!3m2!1sar!2stn!4v1663583094761!5m2!1sar!2stn"
            ></iframe>
          </section>
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
        ["input", "button", "common", "home"],
        nextI18NextConfig
      )),
    },
  };
};

export default Contact;
