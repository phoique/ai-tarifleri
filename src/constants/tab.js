import i18n from "../translations";

export const tabs = [
	{ name: "home", icon: "Home", label: i18n.t("navigation.home") },
	{
		name: "recommendations",
		icon: "Food",
		label: i18n.t("navigation.recommendations"),
	},
	{ name: "fridge", icon: "Fridge", label: i18n.t("navigation.fridge") },
	{ name: "settings", icon: "Settings", label: i18n.t("navigation.settings") },
];
