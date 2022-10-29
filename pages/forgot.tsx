import React from "react";
import Layout from "../components/Layout";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SubmitHandler, useForm } from "react-hook-form";
import nextI18NextConfig from "../i18n/next-i18next.config";
import { useTranslation } from "next-i18next";

const Forgot: NextPage<{}> = () => {
  const { t } = useTranslation(["home", "common", "auth"]);
  return (
    <div>
      <Layout hasFooter={false}>
        <div className="relative flex min-h-screen w-full flex-col gap-20 px-8 pt-28">
          <Link passHref href={"/search"}>
            <div className="flex justify-end py-2">
              <i className="icon-keyboard_backspace_black_24dp cursor-pointer text-xl  text-dark"></i>
            </div>
          </Link>
          <div className="flex w-full flex-col items-end gap-4">
            <div className="text-3xl font-bold text-dark">
              {t("auth:your-password")}
            </div>
            <div className="text-end text-xs text-darkTint">
              {t("auth:forgot-pass-description")}
            </div>
            <form action="" className="flex w-full flex-col items-end">
              <label htmlFor="email" className="py-2 text-xs text-dark">
                {t("auth:your-email")}
              </label>
              <input
                type="email"
                className="w-full border border-solid border-shade py-3 text-end px-4"
              />
              <Link passHref href={"/passwordChanged"}>
                <button className="mt-8 w-full cursor-pointer bg-secondary py-3 font-bold text-tint">
                  {t("auth:confirm")}
                </button>
              </Link>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(
        context.locale as string,
        ["home", "common", "auth"],
        nextI18NextConfig
      )),
    },
  };
};
export default Forgot;
