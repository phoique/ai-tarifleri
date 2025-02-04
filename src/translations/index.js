// biome-ignore lint/nursery/noExportedImports: <explanation>
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";
import tr from "./locales/tr.json";

i18n.use(initReactI18next).init({
	resources: { tr: { translation: tr } },
	lng: getLocales()[0]?.languageCode || "tr",
	fallbackLng: "tr",
	interpolation: { escapeValue: false },
	supportedLngs: ["tr"],
	debug: false,
	react: { useSuspense: false },
});

export default i18n;
