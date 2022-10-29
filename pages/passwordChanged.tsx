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
        <div className="relative flex min-h-screen w-full items-center justify-center gap-20 px-8">
          <div className="flex w-full flex-col  gap-4">
            <div className="text-3xl font-bold text-center text-dark">
              {t("auth:new-password")}
            </div>
            <div className="text-center text-xs text-darkTint">
              {t("auth:new-pass-description")}
            </div>
            <Link passHref href={"/"}>
              <button className="mt-8 w-full cursor-pointer bg-secondary py-3 font-bold text-tint">
                {t("auth:back-to-homepage")}
              </button>
            </Link>
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
