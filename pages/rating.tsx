import React from 'react'
import Layout from '../components/Layout'
import RatingRange from '../components/RatingRange'
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n/next-i18next.config";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Rating: NextPage<{}> = () => {
    const { t, i18n } = useTranslation(["home"]);
  return (
    <>
    <Layout>
        <div className='h-[800px] pt-24'>
           <RatingRange/>
        </div>
    </Layout>
    </>
  )
}
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
export default Rating