import * as CustomSvgIcons from "./custom";

const Icon = ({ type = "custom", name, className, size = 20 }) => {
	if (type === "custom" && CustomSvgIcons[name]) {
		const SvgIconWrapper = CustomSvgIcons[name];
		return <SvgIconWrapper height={size} width={size} className={className} />;
	}

	return null;
};

export default Icon;
