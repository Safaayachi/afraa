import React, { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n/next-i18next.config";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
type Inputs = {
  UserName: string;
  Password: string;
  FirstName: string;
  LastName: string;
};

const Register: NextPage<{}> = () => {
  const { t } = useTranslation(["input", "button", "common"]);
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const router = useRouter();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<Inputs>({
    reValidateMode: "onChange",
    mode: "all",
  });
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (isValid) {
      const options = {
        method: "POST",
        Headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API}/account/register`,
          options
        );
        const data = await res.json();
        if (data.success) {
          console.log(data);
          console.log("hello");
          router.push("/auth/login");
        }
      } catch (err) {}
    }
  };
  return (
    <>
      <Layout hasFooter={false}>
        <div className="relative flex min-h-screen w-full px-8 pt-20 lg:min-h-screen lg:items-center lg:justify-center lg:bg-shade lg:py-36">
          <div className="relative flex h-full w-full flex-col gap-4  bg-tint py-6 lg:w-1/3 lg:py-2 lg:px-4">
            <div className="flex flex-col">
              <Link passHref href={"/"}>
                <div className="hidden justify-start lg:flex">
                  <i className="icon-close_black_24dp font-xs flex cursor-pointer items-center px-2 text-xl text-dark"></i>
                </div>
              </Link>
              <h1 className="flex justify-center py-6 text-2xl font-bold text-dark lg:py-3">
                {t("common:sign-up")}
              </h1>
              <p className="flex justify-center text-xs text-darkTint">
                {t("input:socials")}
              </p>
              <div className="flex justify-center border-b border-solid border-shade py-6 lg:py-3">
                <div className="relative flex flex-row gap-4 ">
                  <Link passHref href={"/"}>
                    <div className="relative h-8 w-8 cursor-pointer">
                      <Image
                        alt="afraa-hotel"
                        src="/images/google.svg"
                        layout="fill"
                        objectFit="cover"
                      ></Image>
                    </div>
                  </Link>
                  <Link passHref href={"/"}>
                    <div className="relative h-8 w-8 cursor-pointer">
                      <Image
                        alt="afraa-hotel"
                        src="/images/facebook-icon.svg"
                        layout="fill"
                        objectFit="cover"
                      ></Image>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <p className="flex justify-center text-xs text-darkTint">
                {t("input:via-email")}
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                  <div className="flex flex-col gap-2 py-4">
                    <label
                      htmlFor="email"
                      className="flex justify-end text-xs text-dark"
                    >
                      {t("input:email")}*
                    </label>
                    <input
                      className="flex border border-solid border-shade p-3 text-end text-dark"
                      type="email"
                      id="email"
                      {...register("UserName", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                    />
                    {errors.LastName && (
                      <div className="text-xxs text-end text-danger">wrong</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 py-4">
                    <label
                      htmlFor="Password"
                      className="flex justify-end text-xs text-dark"
                    >
                      {t("input:password")}
                    </label>
                    <div className="relative flex h-12 w-full flex-row border border-solid border-shade">
                      <i className="icon-visibility_black_24dp font-xs flex cursor-pointer items-center px-2 text-xl text-darkTint"></i>
                      <input
                        className="flex  w-full text-end text-dark"
                        type="Password"
                        id="Password"
                        {...register("Password", { required: true })}
                      />
                    </div>
                    {errors.LastName && (
                      <div className="text-xxs text-end text-danger">wrong</div>
                    )}

                    <div className="flex flex-col gap-2 py-4">
                      <label
                        htmlFor="FirstName"
                        className="flex justify-end text-xs text-dark"
                      >
                        {t("input:first-name")}
                      </label>
                      <input
                        className="flex border border-solid border-shade p-3 text-end text-dark"
                        type="text"
                        id="FirstName"
                        {...register("FirstName", {
                          required: true,
                          pattern: /^[A-Za-z]+$/i,
                        })}
                      />
                      {errors.LastName && (
                        <div className="text-xxs text-end text-danger">
                          wrong
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 py-4">
                      <label
                        htmlFor="LastName"
                        className="flex justify-end text-xs text-dark"
                      >
                        {t("input:last-name")}
                      </label>
                      <input
                        className="flex border border-solid border-shade p-3 text-end text-dark"
                        type="text"
                        id="LastName"
                        {...register("LastName", {
                          required: true,
                          pattern: /^[A-Za-z]+$/i,
                        })}
                      />
                      {errors.LastName && (
                        <div className="text-xxs text-end text-danger">
                          wrong
                        </div>
                      )}
                    </div>
                  </div>
                </fieldset>
                <button
                  className="flex w-full justify-center bg-secondary py-3 text-lg font-bold text-tint"
                  type="button"
                >
                  {t("common:sign-up")}
                </button>
              </form>
              <div className="relative flex w-full  justify-start py-4">
                <Link passHref href={"/login"}>
                  <div className="cursor-pointer text-xs font-bold text-primary underline">
                  {t("input:already-have-account")}
                  </div>
                </Link>
              </div>
            </div>
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
        ["input", "button", "common", "home"],
        nextI18NextConfig
      )),
    },
  };
};

export default Register;
