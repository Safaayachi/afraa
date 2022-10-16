import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Fragment>
      <header
        className={
          "fixed z-20 w-full border-b-shade border-solid border-b "
        }
      >
        <nav className="relative flex  h-20 w-full lg:hidden border-shade bg-tint">
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
          <div className="flex h-full w-1/6 cursor-pointer items-center justify-center border-l border-solid border-shade">
            <i className="icon-menu_black_24dp-6 font-md text-3xl text-secondary"></i>
          </div>
        </nav>
        <nav className={`relative hidden h-20 w-full flex-row justify-between border-shade lg:flex ${router.pathname==="/room" ? "":"bg-tint"}`}>
          <div className="relative flex h-full  w-56 items-center justify-center border-r border-solid border-shade p-4 px-6">
            <Link passHref href={"/login"}>
              <div className="text-md flex h-full w-full cursor-pointer items-center justify-center bg-primary font-bold text-tint ">
                تسجيل الدخول
              </div>
            </Link>
          </div>
          <div className="relative flex h-full w-full ">
            <div className={`relative flex h-full w-5/12 flex-row justify-around text-secondary ${router.pathname==="/room" ? "text-tint":""}`}>
              <div className="relative flex h-full flex-row gap-8 xl:gap-12">
                <Link passHref href={"/contact"}>
                  <div className="flex h-full cursor-pointer items-center justify-center text-sm font-bold ">
                    اتصل بنا
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold ">
                    الخصوصية
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold ">
                    الشروط والأحكام
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex h-full  w-2/12 items-center justify-center">
              <Link passHref href={"/"}>
                <div className={`relative h-20 w-60 cursor-pointer`}>
                  <Image
                    alt={"afraa-logo"}
                    src={`${router.pathname==="/room" ? "/images/room-page-logo.png" :"/images/image2.png" }`}
                    layout="fill"
                  ></Image>
                </div>
              </Link>
            </div>
            <div className={`relative flex h-full w-5/12 flex-row justify-around text-secondary ${router.pathname==="/room" ? "text-tint":""}`}>
              <div className="flex h-full flex-row gap-8 xl:gap-12">
                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold ">
                    تقييم
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold ">
                    حجوزاتى
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold">
                    الغرف و الأجنحة
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={`flex h-full w-56 cursor-pointer items-center justify-center border-l border-solid border-shade text-sm font-bold ${router.pathname==="/room" ? "text-tint":"text-secondary"}`}>
            عربية
          </div>
        </nav>

      </header>
    </Fragment>
  );
};

export default Header;
