import React, { Fragment } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LangDrop from "./lang-drop";
import { useTranslation } from "next-i18next";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [ratingModal, setRatingModal] = useState(false);
  const { t } = useTranslation(["common", "input", "home"]);
  const router = useRouter();
  return (
    <Fragment>
      <header
        className={"fixed z-20 w-full border-b border-solid border-b-shade "}
      >
        <nav className="relative flex  h-20 w-full border-shade bg-tint lg:hidden">
          <Link passHref href={"/login"}>
            <div className="flex w-1/6 cursor-pointer items-center justify-center bg-primary">
              <i className="icon-perm_identity_black_24dp font-md text-3xl text-tint"></i>
            </div>
          </Link>
          <div className="relative flex h-full w-4/6 items-center justify-center">
            <Link passHref href={"/"}>
              <div className={`relative h-full w-60 cursor-pointer`}>
                <Image
                  alt={"afraa-logo"}
                  src={"/images/image2.png"}
                  layout="fill"
                ></Image>
              </div>
            </Link>
          </div>
          <button className="flex h-full w-1/6 cursor-pointer items-center justify-center border-l border-solid border-shade">
            <i
              className="icon-menu_black_24dp-6 font-md text-3xl text-secondary"
              onClick={
                showMenu ? () => setShowMenu(false) : () => setShowMenu(true)
              }
            ></i>
          </button>
        </nav>
        {showMenu ? (
          <>
            <div
              onClick={() => setShowMenu(false)}
              className="fixed z-10 h-full w-full  bg-secondary opacity-40 lg:hidden "
            ></div>
            <div className="fixed right-0 z-20 flex h-full w-3/5  justify-end bg-tint px-6 pt-28 md:w-1/2 lg:hidden ">
              <div className="flex flex-col gap-14">
                <div className="flex flex-col gap-8 ">
                  <Link passHref href={"/Rooms"}>
                    <div className="flex cursor-pointer items-center justify-end text-lg font-extrabold">
                      {t("home:rooms-and-suites")}
                    </div>
                  </Link>
                  <Link passHref href={"/"}>
                    <div className="flex cursor-pointer items-center justify-end text-lg font-extrabold ">
                      {t("common:reservations")}
                    </div>
                  </Link>
                  <Link passHref href={"/"}>
                    <div className="flex cursor-pointer items-center justify-end text-lg font-extrabold ">
                      {t("common:terms-and-conditions")}
                    </div>
                  </Link>
                  <Link passHref href={"/"}>
                    <div className="flex cursor-pointer items-center justify-end text-lg font-extrabold ">
                      {t("common:privacy")}
                    </div>
                  </Link>
                  <Link passHref href={"/contact"}>
                    <div className="flex cursor-pointer items-center justify-end text-lg font-extrabold ">
                      {t("common:contact")}
                    </div>
                  </Link>
                </div>
                <LangDrop />
              </div>
            </div>
          </>
        ) : null}
        <nav
          className={`relative hidden h-20 w-full flex-row justify-between border-shade lg:flex ${
            router.pathname === "/room" ? "" : "bg-tint"
          }`}
        >
          <div className="relative flex h-full  w-56 items-center justify-center border-r border-solid border-shade p-4 px-6">
            <Link passHref href={"/login"}>
              <div className="text-md flex h-full w-full cursor-pointer items-center justify-center bg-primary font-bold text-tint ">
                {t("common:login")}
              </div>
            </Link>
          </div>
          <div className="relative flex h-full w-full ">
            <div
              className={`relative flex h-full w-5/12 flex-row justify-around text-secondary ${
                router.pathname === "/room" ? "text-tint" : ""
              }`}
            >
              <div className="relative flex h-full flex-row gap-8 xl:gap-12">
                <Link passHref href={"/contact"}>
                  <div className="flex h-full cursor-pointer items-center justify-center text-sm font-bold ">
                    {t("common:contact")}
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold ">
                    {t("common:privacy")}
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold ">
                    {t("common:terms-and-conditions")}
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex h-full  w-2/12 items-center justify-center">
              <Link passHref href={"/"}>
                <div className={`relative h-20 w-60 cursor-pointer`}>
                  <Image
                    alt={"afraa-logo"}
                    src={`${
                      router.pathname === "/room"
                        ? "/images/room-page-logo.png"
                        : "/images/image2.png"
                    }`}
                    layout="fill"
                  ></Image>
                </div>
              </Link>
            </div>
            <div
              className={`relative flex h-full w-5/12 flex-row justify-around text-secondary ${
                router.pathname === "/room" ? "text-tint" : ""
              }`}
            >
              <div className="flex h-full flex-row gap-8 xl:gap-12">
                <Link passHref href={"/"}>
                  <div
                    className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold "
                    onClick={() => setRatingModal(true)}
                  >
                    {t("common:rating")}
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold ">
                    {t("common:reservations")}
                  </div>
                </Link>

                <Link passHref href={"/Rooms"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold">
                    {t("home:rooms-and-suites")}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <LangDrop />
        </nav>
        {ratingModal ? (
          <div className="fixed inset-0 z-40  h-full w-full">
            <div className="fixed inset-0 z-40 flex h-full w-full flex-col items-center justify-center p-4">
            <div
                  className="fixed inset-0 z-40 h-full w-full bg-dark opacity-50 "
                  onClick={() => setRatingModal(false)}
                ></div>
              <div className="h-112 fixed z-40 flex w-5/6 flex-col bg-tint  p-4 lg:w-2/5">
                <div
                  className="justify-start"
                  onClick={() => setRatingModal(false)}
                >
                  <i className="icon-close_black_24dp font-xs flex cursor-pointer items-center px-2 text-xl text-dark"></i>
                </div>

                <div className="flex flex-col gap-6 px-10">
                  <div className="flex justify-center py-2  text-2xl font-bold text-dark">
                    {t("input:reservation-details")}
                  </div>
                  <div className="flex justify-center  text-center text-sm text-dark ">
                    {t("input:reservation-number-verification")}
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="resNumber"
                      className="flex justify-end py-3 text-sm text-darkTint"
                    >
                      {t("input:reservation-number")}
                    </label>
                    <input
                      type="text"
                      id="reNumber"
                      className="h-12 w-full border border-solid border-shade p-2 text-end text-sm text-dark"
                      placeholder="رقم الحجز"
                    />
                  </div>
                  <div className="flex flex-row gap-6 ">
                    <div className="flex w-1/2 flex-col gap-3">
                      <label className="text-end text-sm text-darkTint">
                        {t("input:departure-date")}
                      </label>
                      <div className="flex h-12 justify-between border border-solid border-shade p-2">
                        <i className="icon-calendar_today_black_24dp-3 font-xs flex cursor-pointer items-center px-2 text-xl text-dark"></i>
                        <div className="flex items-center text-sm text-dark">
                          يوليو 30 ,2021
                        </div>
                      </div>
                    </div>
                    <div className="flex w-1/2 flex-col gap-3">
                      <label className="text-end text-sm text-darkTint">
                        {t("input:date-of-arrival")}
                      </label>
                      <div className="flex h-12 justify-between border border-solid border-shade p-2">
                        <i className="icon-calendar_today_black_24dp-3 font-xs flex cursor-pointer items-center px-2 text-xl text-dark"></i>
                        <div className="flex items-center text-sm text-dark">
                          يوليو 30 ,2021
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link passHref href={"/rating"}>
                    <div className="flex h-12 cursor-pointer items-center justify-center bg-primary text-lg font-bold text-tint">
                      {t("input:rate-stay")}
                    </div>
                  </Link>
                </div>
                <div className="px-14 py-2 text-center text-xs text-darkTint">
                  {t("input:rate-stay-description")}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </Fragment>
  );
};

export default Header;
