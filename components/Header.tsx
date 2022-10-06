import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <Fragment>
      <header className={"w-full border-b  border-solid border-shade bg-tint"}>
        <nav className="relative flex  h-20 w-full lg:hidden">
          <div className="flex w-1/6 cursor-pointer items-center justify-center bg-primary">
            <i className="icon-perm_identity_black_24dp font-md text-3xl text-tint"></i>
          </div>
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
        <nav className="relative hidden h-20 w-full flex-row justify-between lg:flex ">
          <div className="relative flex h-full  w-56 items-center justify-center border-r border-solid border-shade p-4 px-6">
            <div className="flex h-full w-full items-center justify-center bg-primary text-sm font-bold text-tint ">
              تسجيل الدخول
            </div>
          </div>
          <div className="relative flex h-full w-full ">
            <div className="relative flex h-full w-5/12 justify-around">
              <div className="flex h-full flex-row gap-12">
                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold text-secondary">
                    اتصل بنا
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold text-secondary">
                    الخصوصية
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold text-secondary">
                    الشروط والأحكام
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex h-full  w-2/12 items-center justify-center">
              <Link passHref href={"/"}>
                <div className={`relative h-20 w-40 cursor-pointer`}>
                  <Image
                    alt={"afraa-logo"}
                    src={"/images/image2.png"}
                    layout="fill"
                  ></Image>
                </div>
              </Link>
            </div>
            <div className="relative flex h-full w-5/12 flex-row justify-around">
              <div className="flex h-full flex-row gap-12">
                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold text-secondary">
                    تقييم
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold text-secondary">
                    حجوزاتى
                  </div>
                </Link>

                <Link passHref href={"/"}>
                  <div className="flex h-full  cursor-pointer items-center justify-center text-sm font-bold text-secondary">
                    الغرف و الأجنحة
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex h-full w-56 cursor-pointer items-center justify-center border-l border-solid border-shade text-sm font-bold text-secondary">
            عربية
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
