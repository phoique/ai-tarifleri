import { cssInterop } from "nativewind";
// biome-ignore lint/style/noNamespaceImport: <explanation>
import * as CustomIcons from "./custom";

const Icon = ({ name, className, size = 20, ...props }) => {
	const IconComponent = Object.values(CustomIcons).find(
		(icon) => icon.name === name,
	);

	if (!IconComponent) {
		// biome-ignore lint/suspicious/noConsole: <explanation>
		console.warn(`Icon "${name}" not found`);
		return null;
	}

	const StyledIcon = cssInterop(IconComponent, { className: "style" });

	return (
		<StyledIcon width={size} height={size} className={className} {...props} />
	);
};

export default Icon;
