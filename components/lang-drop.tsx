import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState, Fragment } from "react";

const LangDrop = () => {
  const languages = [
    { verbose: "arabic", value: "ar" },
    { verbose: "english", value: "en" },
  ];
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const { t, i18n } = useTranslation(["common"]);
  const [selectedLanguage, setSelectedLanguage] = useState(locale);
  const changeLanguage = (language: string) => {
    setSelectedLanguage(language);
    router.push({ pathname, query }, asPath, { locale: language });
    i18n.changeLanguage(language);
  };
  return (
    <Fragment>
      <div
        onClick={() => {
          changeLanguage(i18n.language === "ar" ? "en" : "ar");
        }}
        className=""
      >
        {i18n.language === "ar" ? (
          <div
            className={`flex h-full w-56 cursor-pointer items-center justify-center border-l border-solid border-shade text-sm font-bold ${
              router.pathname === "/room" ? "text-tint" : "text-secondary"
            }`}
          >
            عربية
          </div>
        ) : (
          <div
            className={`flex h-full w-56 cursor-pointer items-center justify-center border-l border-solid border-shade text-sm font-bold ${
              router.pathname === "/room" ? "text-tint" : "text-secondary"
            }`}
          >
            English
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LangDrop;
