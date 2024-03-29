import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const booking = () => {
  return (
    <div className="relative h-full w-full">
      <Layout>
        <div className="relative h-full w-full bg-shade pt-20">
          <div className="relative flex h-full w-full flex-col px-8 lg:px-20">
            <Link passHref href={"/search"}>
              <div className="flex justify-end py-2">
                <i className="icon-keyboard_backspace_black_24dp cursor-pointer text-xl font-bold text-secondary"></i>
              </div>
            </Link>
            <div className="relative flex h-full w-full flex-col gap-8 lg:flex-row lg:gap-4 ">
              <div className="h-full w-full lg:w-2/6 ">
                <div className="relative flex w-full flex-col bg-tint px-4 shadow-lg">
                  <div className="flex w-full justify-end pt-4 text-2xl font-bold">
                    معلومات الحجز{" "}
                  </div>
                  <div className="flex flex-row justify-end  gap-10 border-b border-solid border-b-shade py-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-end text-sm text-darkTint">
                        تسجيل المغادرة{" "}
                      </div>
                      <div className="flex justify-end text-end text-sm font-bold text-dark">
                        حتى الساعة 3:30 مساءْ
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <div className="flex justify-end text-sm text-darkTint">
                        تسجيل الوصول{" "}
                      </div>
                      <div className="flex justify-end text-end text-sm font-bold text-dark">
                        بعدالساعة 2:00 مساءْ
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end  gap-4 border-b border-solid border-b-shade py-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end text-sm font-bold text-dark">
                        05/02/2021 - 10/02/2021
                      </div>
                      <div className="flex justify-end text-sm font-bold text-dark">
                        2 بالغين-1اطفال
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end text-sm text-darkTint">
                        5 ليالي
                      </div>
                      <div className="flex justify-end text-sm text-darkTint">
                        {" "}
                        3 نزلاء
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between border-b border-solid border-b-shade py-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-row justify-start gap-1 text-sm font-bold text-dark">
                        <span>ريال</span>
                        <div>121.74</div>
                      </div>
                      <div className="flex flex-row justify-start gap-1 text-sm font-bold text-dark">
                        <span>ريال</span>
                        <div>18.26</div>
                      </div>
                      <div className="flex flex-row justify-start gap-1 text-sm font-bold text-dark">
                        <span>ليالي</span>
                        <div>5</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-end text-sm text-darkTint">
                        غرفة لثلاث اشخاص
                      </div>
                      <div className="flex justify-end text-sm text-darkTint">
                        ضريبة القيمة المضافة %15
                      </div>
                      <div className="flex justify-end text-sm text-darkTint">
                        المدة
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between py-3">
                    <div className="flex flex-row gap-2">
                      <span className="flex items-center font-extrabold text-secondary ">
                        SAR
                      </span>
                      <div className="text-3xl font-bold text-primary">
                        1,680.00
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-sm font-bold text-dark">
                      الإجمالي
                    </div>
                  </div>
                </div>
              </div>
              <div className=" relative flex h-full w-full flex-col gap-8 lg:w-4/6 lg:gap-4">
                <div className="relative flex w-full flex-col bg-tint px-4 shadow-lg">
                  <div className="flex w-full justify-end py-4 text-2xl font-bold">
                    أدخل بياناتك
                  </div>
                  <form>
                    <fieldset>
                      <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex flex-col  gap-2 py-4 lg:w-1/2">
                          <label
                            htmlFor="lastName"
                            className="flex justify-end text-xs text-dark"
                          >
                            اسم العائلة{" "}
                          </label>
                          <input
                            className="flex border border-solid border-shade p-3 text-end text-dark"
                            type="text"
                            id="lastName"
                          />
                        </div>
                        <div className="flex w-full flex-col gap-2 py-4 lg:w-1/2">
                          <label
                            htmlFor="firstName"
                            className="flex justify-end text-xs text-dark"
                          >
                            الاسم{" "}
                          </label>
                          <input
                            className="flex border border-solid border-shade p-3 text-end text-dark"
                            type="text"
                            id="firstName"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="flex w-full flex-col gap-2 py-4 lg:w-1/2">
                          <label
                            htmlFor="phoneNumber"
                            className="flex justify-end text-xs text-dark"
                          >
                            رقم الهاتف{" "}
                          </label>
                          <input
                            className="flex border border-solid border-shade p-3 text-end text-dark"
                            type="text"
                            id="phoneNumber"
                          />
                        </div>
                        <div className="flex w-full flex-col gap-2 py-4 lg:w-1/2">
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
                      </div>
                      <div className="flex w-full justify-end py-4 text-2xl font-bold">
                        طلبات خاصة{" "}
                      </div>
                      <div className="flex w-full flex-col gap-2 pb-4">
                        <label
                          htmlFor="email"
                          className="flex justify-end text-xs text-dark"
                        >
                          إختيارية و حسب الإمكانية و قد تخضع لرسوم إضافية{" "}
                        </label>
                        <textarea
                          className="flex h-44 border border-solid border-shade p-3 text-end text-dark lg:h-28"
                          id="email"
                        />
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div className="mb-24 flex h-16 w-full flex-row items-center justify-between bg-tint px-4 py-2 shadow-lg">
                  <Link passHref href={"/bookingPaiment"}>
                    <div className="cursor-pointer bg-secondary px-12 py-2 text-tint">
                      التالى
                    </div>
                  </Link>
                  <Link passHref href={"/search"}>
                    <div className="cursor-pointer bg-dark px-12 py-2 text-tint">
                      راجع حجزك
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default booking;
