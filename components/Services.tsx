import React, { useState } from "react";
import Image from "next/image";

const Services = () => {
  const [slug, setSlug] = useState("");
  return (
    <div className="relative h-[80rem] w-full p-16 lg:h-[80rem]">
      <div className="relative flex h-full w-full flex-col">
        <div className="relative flex h-1/6 w-full justify-end ">
          <div className="flex items-center text-7xl font-black text-dark lg:text-8xl">
            خدماتنا{" "}
          </div>
        </div>
        <div className="relative flex h-5/6 w-full flex-row gap-20">
          <div className="relative h-full w-3/5  ">
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
          <div className="relative flex h-full w-2/5 flex-col py-14 ">
            <div
              className="relative flex h-1/3 w-full cursor-pointer flex-col items-end gap-10 text-darkTint hover:text-dark"
              onClick={() => setSlug("restaurants")}
            >
              <div className="text-5xl font-bold ">مطاعم و مقاهي</div>
              <div className="text-end text-3xl ">
                عيش التجربة و استمتع بالخيرات الكثيرة المتاحة من خلال مطاعم
                ومقاهي عفراء التى تقدم لكم أفضل المؤكولات و المشروبات المميزة
              </div>
            </div>
            <div
              className="flex h-1/3 w-full cursor-pointer flex-col items-end gap-10 text-darkTint hover:text-dark "
              onClick={() => setSlug("massage")}
            >
              <div className="text-5xl font-bold ">كرسي المساج</div>
              <div className="text-end text-3xl ">
                يوفر لكم فندق عفراء كرسي المساج لتوفير المزيد من الراحة و
                الاسترخاء
              </div>
            </div>
            <div
              className="flex h-1/3 w-full cursor-pointer flex-col items-end gap-10 text-darkTint hover:text-dark"
              onClick={() => setSlug("kidsPark")}
            >
              <div className="text-5xl font-bold ">نادي للاطفال</div>
              <div className="text-end text-3xl ">
                يوفر لكم فندق عفراء صالة ترفيهية للأطفال لمزيد من الرفاهية
                لأطفالكم
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;