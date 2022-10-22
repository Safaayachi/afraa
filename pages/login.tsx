import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import useForm from "react-hook-form";

const login = () => {
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
                تسجيل الدخول
              </h1>
              <p className="flex justify-center text-xs text-darkTint">
                باستخدام ملفك الشخصي علي شبكة التواصل الاجتماعى
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
                بواسطة بريدك الالكترونى
              </p>
              <form>
                <fieldset>
                  <div className="flex flex-col gap-2 py-4">
                    <label
                      htmlFor="email"
                      className="flex justify-end text-xs text-dark"
                    >
                      البريد الالكترونى الخاص بك
                    </label>
                    <input
                      className="flex border border-solid border-shade p-3 text-end text-dark"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col gap-2 py-4">
                    <label
                      htmlFor="password"
                      className="flex justify-end text-xs text-dark"
                    >
                      كلمة المرور
                    </label>
                    <div className="relative flex h-12 w-full flex-row border border-solid border-shade">
                      <i className="icon-visibility_black_24dp font-xs flex cursor-pointer items-center px-2 text-xl text-darkTint"></i>
                      <input
                        className="flex  w-full text-end text-dark"
                        type="password"
                        id="password"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-end gap-2 py-4">
                      <label
                        htmlFor="rememberMe"
                        className="flex justify-end text-xs text-dark"
                      >
                        تذكرنى
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
                  تسجيل الدخول{" "}
                </button>
              </form>
              <div className="relative flex w-full flex-row justify-between py-4">
                <Link passHref href={"/"}>
                  <div className="cursor-pointer text-xs font-bold text-primary underline">
                    هل نسيت كلمة المرور؟
                  </div>
                </Link>
                <Link passHref href={"/register"}>
                  <div className="cursor-pointer text-xs font-bold text-primary underline">
                    إنشاء حساب الان
                  </div>
                </Link>
              </div>
              <div className="flex w-full justify-end">
                <p className="mt-4 text-center text-xs  text-dark">
                  تسجيلك الدخول يعني موافقتك على{" "}
                  <span className="font-bold text-primary underline">
                    <Link href="/">شروط الاستخدام</Link>
                  </span>{" "}
                  و{" "}
                  <span className="font-bold text-primary underline">
                    <Link href="/">سياسة الخصوصية </Link>
                  </span>{" "}
                  فندق عفراء
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default login;
