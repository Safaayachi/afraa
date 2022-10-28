import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useLocalStorage } from "react-use";
import nextI18NextConfig from "../i18n/next-i18next.config";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Inputs = {
  UserName: string;
  Password: string;
};

const Login: NextPage<{}> = () => {
  const { t } = useTranslation(["input", "button", "common", "home"]);
  const [user, setUser, removeUser] = useLocalStorage("user");
  const [token, setToken, removeToken] = useLocalStorage("token", "" || null);
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
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API}/account/Login`,
          options
        );
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
          setToken(data.token);
          router.push({ pathname: "/" });
        }
      } catch (err) {}
    }
  };
  return (
    <>
      <Layout hasFooter={false}>
        <div className="relative flex min-h-screen w-full px-8 pt-20 lg:min-h-screen lg:items-center lg:justify-center lg:bg-shade    lg:py-36">
          <div className="relative flex h-full w-full flex-col gap-4  bg-tint py-6 lg:w-1/3 lg:px-4 xl:w-1/4 ">
            <div className="flex flex-col">
              <Link passHref href={"/"}>
                <div className="hidden justify-start lg:flex">
                  <i className="icon-close_black_24dp font-xs flex cursor-pointer items-center px-2 text-xl text-dark"></i>
                </div>
              </Link>
              <h1 className="flex justify-center py-6 text-2xl font-bold text-dark">
                {t("common:login")}
              </h1>
              <p className="flex justify-center text-xs text-darkTint">
                {t("input:socials")}
              </p>
              <div className="flex justify-center border-b border-solid border-shade py-6">
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
                      {t("input:email")}
                    </label>
                    <input
                      className="flex border border-solid border-shade p-3 text-end text-dark"
                      type="email"
                      id="email"
                      {...register("UserName", {
                        required: true,
                      })}
                    />
                    {errors.UserName && (
                      <div className="text-xxs text-danger">wrong</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 py-4">
                    <label
                      htmlFor="password"
                      className="flex justify-end text-xs text-dark"
                    >
                      {t("input:password")}
                    </label>
                    <div className="relative flex h-12 w-full flex-row border border-solid border-shade">
                      <i className="icon-visibility_black_24dp font-xs flex cursor-pointer items-center px-2 text-xl text-darkTint"></i>
                      <input
                        className="flex  w-full text-end text-dark"
                        type="password"
                        id="password"
                        {...register("Password", {
                          required: true,
                        })}
                      />
                      {errors.Password && (
                        <div className="text-xxs text-danger">
                          {t("validation:fill-all-fields")}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-row items-center justify-end gap-2 py-4">
                      <label
                        htmlFor="rememberMe"
                        className="flex justify-end text-xs text-dark"
                      >
                        {t("input:remember-me")}
                      </label>
                      <input
                        type="checkbox"
                        id="rememberMe"
                        className="form-checkbox h-4 w-4 cursor-pointer border border-solid border-shade "
                      />
                    </div>
                  </div>
                </fieldset>
                <button className="flex w-full justify-center bg-secondary py-3 text-lg font-bold text-tint">
                  {t("common:login")}
                </button>
              </form>
              <div className="relative flex w-full flex-row justify-between py-4">
                <Link passHref href={"/forgot"}>
                  <div className="cursor-pointer text-xs font-bold text-primary underline">
                    {t("input:forgot-password")}
                  </div>
                </Link>
                <Link passHref href={"/register"}>
                  <div className="cursor-pointer text-xs font-bold text-primary underline">
                    {t("common:sign-up")}
                  </div>
                </Link>
              </div>
              <div className="flex w-full justify-end ">
                <p className="mt-4 text-center text-xs  text-dark">
                  {t("input:accept-terms-conditions")} 
                  <span className="font-bold text-primary underline">
                    <Link href="/">{t("common:terms-of-use")}</Link>
                  </span>{" "}
                  و{" "}
                  <span className="font-bold text-primary underline">
                    <Link href="/">{t("common:privacy-policy")}</Link>
                  </span>{" "}
                  {t("common:aafra-hotel")}
                </p>
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
export default Login;
