import React, { useState } from "react";
import Image from "next/image";

const Services = () => {
  const [slug, setSlug] = useState("");
  return (
    <div className="relative h-[60rem] w-full px-8 lg:h-[50rem] lg:px-32 ">
      <div className="relative flex h-full w-full flex-col">
        <div className="relative flex h-1/6 w-full justify-end ">
          <div className="flex items-center text-4xl font-black text-dark lg:text-6xl">
            خدماتنا{" "}
          </div>
        </div>
        <div className="relative hidden h-4/5 w-full flex-row gap-20 lg:flex">
          <div className="relative h-full w-3/5 ">
            {slug == "kidsPark" ? (
              <Image
                alt="afraa-hotel"
                src="/images/kidsPark.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            ) : slug == "massage" ? (
              <Image
                alt="afraa-hotel"
                src="/images/massage.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            ) : slug == "restaurants" ? (
              <Image
                alt="afraa-hotel"
                src="/images/restaurants.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            ) : null}
          </div>
          <div className="relative flex h-full w-2/5 flex-col py-14 gap-10">
            <div
              className="relative flex h-1/3 w-full cursor-pointer flex-col items-end gap-4 text-darkTint hover:text-dark"
              onClick={() => setSlug("restaurants")}
            >
              {slug == "restaurants" ? (
                <>
                  <div className="text-3xl font-bold text-dark">
                    مطاعم و مقاهي
                  </div>
                  <div className="text-end text-xl  text-dark">
                    عيش التجربة و استمتع بالخيرات الكثيرة المتاحة من خلال مطاعم
                    ومقاهي عفراء التى تقدم لكم أفضل المؤكولات و المشروبات
                    المميزة
                  </div>
                </>
              ) : (
                <>
                  <div className="text-3xl font-bold ">مطاعم و مقاهي</div>
                  <div className="text-end text-xl ">
                    عيش التجربة و استمتع بالخيرات الكثيرة المتاحة من خلال مطاعم
                    ومقاهي عفراء التى تقدم لكم أفضل المؤكولات و المشروبات
                    المميزة
                  </div>
                </>
              )}
            </div>
            <div
              className="flex h-1/3 w-full cursor-pointer flex-col items-end gap-4 text-darkTint hover:text-dark "
              onClick={() => setSlug("massage")}
            >
              {slug == "massage" ? (
                <>
                  <div className="text-3xl font-bold text-dark ">
                    كرسي المساج
                  </div>
                  <div className="text-end text-xl text-dark ">
                    يوفر لكم فندق عفراء كرسي المساج لتوفير المزيد من الراحة و
                    الاسترخاء
                  </div>
                </>
              ) : (
                <>
                  <div className="text-3xl font-bold ">كرسي المساج</div>
                  <div className="text-end text-xl ">
                    يوفر لكم فندق عفراء كرسي المساج لتوفير المزيد من الراحة و
                    الاسترخاء
                  </div>
                </>
              )}
            </div>
            <div
              className="flex h-1/3 w-full cursor-pointer flex-col items-end gap-4 text-darkTint hover:text-dark"
              onClick={() => setSlug("kidsPark")}
            >
              {slug == "kidsPark" ? (
                <>
                  <div className="text-3xl font-bold text-dark">
                    نادي للاطفال
                  </div>
                  <div className="text-end text-xl text-dark ">
                    يوفر لكم فندق عفراء صالة ترفيهية للأطفال لمزيد من الرفاهية
                    لأطفالكم
                  </div>
                </>
              ) : (
                <>
                  <div className="text-3xl font-bold ">نادي للاطفال</div>
                  <div className="text-end text-xl ">
                    يوفر لكم فندق عفراء صالة ترفيهية للأطفال لمزيد من الرفاهية
                    لأطفالكم
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="relative flex h-full gap-6 overflow-x-auto lg:hidden">
          <div className="relative flex h-full min-w-full  flex-col gap-10">
            <div className="relative h-[350px] ">
              <Image
                alt="afraa-hotel"
                src="/images/kidsPark.png"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="flex flex-col items-end gap-4">
              <div className="text-3xl font-bold ">نادي للاطفال</div>
              <div className="text-end text-xl ">
                يوفر لكم فندق عفراء صالة ترفيهية للأطفال لمزيد من الرفاهية
                لأطفالكم
              </div>
            </div>
          </div>
          <div className="h-full min-w-full">
            <div className="relative flex h-full min-w-full  flex-col gap-10">
              <div className="relative h-[350px]">
                <Image
                  alt="afraa-hotel"
                  src="/images/massage.png"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="text-3xl font-bold ">كرسي المساج</div>
                <div className="text-end text-xl ">
                  يوفر لكم فندق عفراء كرسي المساج لتوفير المزيد من الراحة و
                  الاسترخاء
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full min-w-full ">
            <div className="relative flex h-full min-w-full shrink-0 flex-col gap-10">
              <div className="relative h-[350px]">
                <Image
                  alt="afraa-hotel"
                  src="/images/restaurants.png"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="text-3xl font-bold ">مطاعم و مقاهي</div>
                <div className="text-end text-xl ">
                  عيش التجربة و استمتع بالخيرات الكثيرة المتاحة من خلال مطاعم
                  ومقاهي عفراء التى تقدم لكم أفضل المؤكولات و المشروبات المميزة
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Services;
