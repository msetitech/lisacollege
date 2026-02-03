import { useTranslation } from "react-i18next";

export const useLanguage = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("language", lng);
	};

	const currentLanguage = i18n.language;

	return {
		changeLanguage,
		currentLanguage,
	};
};
