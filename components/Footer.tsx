import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative h-full w-full bg-secondary ">
      <div className="  px-8 lg:px-16">
        <div className="relative flex h-full w-full justify-start ">
          <div className="relative flex h-full w-full items-center justify-start border-b border-solid border-b-darkTint py-8">
            <div className="relative flex h-16 w-96 flex-row gap-2">
              <Link passHref href={"/"}>
                <div className="flex h-full w-1/2 cursor-pointer items-center justify-center bg-tint text-2xl font-bold text-secondary">
                  إحجز الان
                </div>
              </Link>
              <div className="text-md flex h-full w-1/2 items-center justify-end bg-secondary  text-tint">
                تريد الحصول على حجز؟
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex h-full w-full flex-col py-4 lg:flex-row-reverse">
          <div className="relative h-full w-full  lg:w-1/3">
            <div className="relative flex h-full w-full flex-row justify-end gap-10 ">
              <div className="flex flex-col">
                <Link passHref href={"/"}>
                  <div className="flex cursor-pointer justify-end pb-6 text-lg font-semibold text-tint">
                    ابحث عن حجزك
                  </div>
                </Link>
                <Link passHref href={"/"}>
                  <div className="flex cursor-pointer justify-end pb-6 text-lg font-semibold text-tint">
                    الخصوصية
                  </div>
                </Link>
                <Link passHref href={"/"}>
                  <div className="flex cursor-pointer justify-end pb-6 text-end text-lg font-semibold text-tint">
                    الشروط و الاحكام
                  </div>
                </Link>
              </div>
              <div className="flex flex-col">
                <Link passHref href={"/"}>
                  <div className="flex cursor-pointer justify-end pb-6 text-lg font-semibold text-tint">
                    إحجز الان
                  </div>
                </Link>
                <Link passHref href={"/"}>
                  <div className="flex cursor-pointer justify-end pb-6 text-lg font-semibold text-tint">
                    خدماتنا
                  </div>
                </Link>
                <Link passHref href={"/"}>
                  <div className="flex cursor-pointer justify-end pb-6 text-end text-lg font-semibold text-tint">
                    الغرف و الأجنحة
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full pb-14 lg:w-1/3">
            <Link passHref href={"/"}>
              <div className="flex cursor-pointer  justify-end  pb-6 text-lg font-semibold text-tint">
                اتصل بنا
              </div>
            </Link>
          </div>
          <div className="relative h-full w-full pb-14 lg:w-1/3">
            <div className="relative flex h-full w-full flex-col lg:w-96">
              <label className="flex justify-end pb-6 text-2xl font-bold text-tint">
                اشترك في نشرتنا الإخبارية
              </label>
              <form className="relative flex h-20 w-full flex-row border-b border-solid border-b-darkTint">
                <Link passHref href={"/"}>
                  <button
                    type="submit"
                    className="h-full w-1/6 cursor-pointer bg-tint "
                  >
                    <i className="icon-keyboard_arrow_down_black_-1 font-md text-3xl text-secondary"></i>
                  </button>
                </Link>
                <input
                  type="email"
                  placeholder="ادخل بريدك الالكتروني"
                  className="h-full w-5/6 text-end text-tint"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col justify-between gap-6 py-8  lg:flex-row-reverse">
          <div className="flex h-full flex-row justify-center gap-10 lg:justify-end">
            <Link passHref href={"/"}>
              <div>
                <i className="icon-iconmonstr-snapchat-1 font-md cursor-pointer text-3xl text-tint"></i>
              </div>
            </Link>
            <Link passHref href={"/"}>
              <div>
                <i className="icon-Group-48 font-md cursor-pointer text-3xl text-tint"></i>
              </div>
            </Link>
            <Link passHref href={"/"}>
              <div>
                <i className="icon-icons8-facebook font-md cursor-pointer text-3xl text-tint"></i>
              </div>
            </Link>
            <Link passHref href={"/"}>
              <div>
                <i className="icon-icons8-twitter font-md cursor-pointer text-3xl text-tint"></i>
              </div>
            </Link>
          </div>
          <div className="flex h-full w-full justify-center py-2 lg:justify-start ">
            <p className="text-sm font-light text-tint">
              &copy; Copyright AFRAA HOTEL 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
