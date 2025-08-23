import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function I18nDemo() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className="text-center mt-10 p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">{t("welcome")}</h1>
      <p className="mb-4">{t("description")}</p>

      <div>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-4 py-2 rounded mr-2 ${language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className={`px-4 py-2 rounded ${language === "es" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Español
        </button>
      </div>
    </div>
  );
}

export default I18nDemo;
