import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: {
			Test1: "Test1",
			"Layout & Style": "Layout & Style",
			Test2: "Test2",
			"Connect API": "Connect API",
			Test3: "Test3",
			"Form & Table": "Form & Table",
		},
	},
	th: {
		translation: {
			Test1: "แบบทดสอบ 1",
			"Layout & Style": "การจัดภาพหน้าเว็บ",
			Test2: "แบบทดสอบ 2",
			"Connect API": "การเชื่อมต่อ API",
			Test3: "แบบทดสอบ 3",
			"Form & Table": "การจัดหน้าฟอร์ม",
		},
	},
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "th", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
