import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const bookingPaiment = () => {
  return (
    <div className="relative h-full w-full">
      <Layout>
        <div className="relative h-full w-full bg-shade pt-20 lg:pb-40">
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
                  <form className="flex flex-col gap-4">
                    <div className="text-end font-bold text-darkTint">
                      اخترالبنك الذى يناسبك وسنرسل اليك التفاصيل فى ايميل
                    </div>
                    <div className="relative flex h-4/6 w-full flex-col space-y-2">
                      <div className="flex flex-col  divide-y-2 divide-basic">
                        <label className="flex flex-row items-center justify-end space-x-4 py-4">
                          <span className="text-md font-semibold text-dark">
                            مصرف الراجحي
                          </span>
                          <input
                            type="checkbox"
                            value={"bank1"}
                            name="bank"
                            className="h-4 w-4 rounded-full text-secondary outline-none ring-1 ring-primary ring-offset-0 checked:ring-secondary "
                          />
                        </label>
                        <label className="flex flex-row items-center justify-end space-x-4 py-4">
                          <span className="text-md font-semibold text-dark">
                            بنك ساب
                          </span>
                          <input
                            type="checkbox"
                            value={"bank1"}
                            name="bank"
                            className="h-4 w-4 rounded-full text-secondary outline-none ring-1 ring-primary ring-offset-0 checked:ring-secondary "
                          />
                        </label>
                        <label className="flex flex-row items-center justify-end space-x-4 py-4">
                          <span className="text-md font-semibold text-dark">
                            بنك الجزيرة
                          </span>
                          <input
                            type="checkbox"
                            value={"bank1"}
                            name="bank"
                            className="h-4 w-4 rounded-full text-secondary outline-none ring-1 ring-primary ring-offset-0 checked:ring-secondary "
                          />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mb-24 flex h-16 w-full flex-row items-center justify-between bg-tint px-4 py-2 shadow-lg">
                  <Link passHref href={"/bookingConfirmation"}>
                    <div className="cursor-pointer bg-secondary px-12 py-2 text-tint">
                      التالى
                    </div>
                  </Link>
                  <Link passHref href={"/booking"}>
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

export default bookingPaiment;
