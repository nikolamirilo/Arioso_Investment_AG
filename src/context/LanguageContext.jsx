// import { changeLanguage } from "i18next";
// import { createContext, useContext, useState } from "react";
// import { useTranslation } from "react-i18next";

// const LanguageContext = createContext();

// export const useLanguageContext = () => {
//   return useContext(LanguageContext);
// };

// export const LanguageContextProvider = ({ children }) => {
//   const { t } = useTranslation();
//   const [lang, setLang] = useState("");
//   const [currentPage, setCurrentPage] = useState("");

//   const languages = [
//     { value: "", label: t("Language") },
//     { value: "en", label: t("English") },
//     { value: "de", label: t("German") },
//   ];

//   const handleChange = (e) => {
//     setLang(e.target.value);
//     let loc = `${currentPage}`;
//     changeLanguage(e.target.value);
//     window.location.replace(loc + "?lng=" + e.target.value);
//   };

//   return (
//     <LanguageContext.Provider value={{ lang, setLang, languages, currentPage, setCurrentPage, t, handleChange }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };
