import Svg, { Path } from "react-native-svg";

function Fridge(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="48px"
			viewBox="0 -960 960 960"
			width="48px"
			fill="currentColor"
			{...props}
		>
			<Path d="M309-650v-118h60v118h-60zm0 361v-196h60v196h-60zM220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-680q0-24.75 17.63-42.38Q195.25-880 220-880h520q24.75 0 42.38 17.62Q800-844.75 800-820v680q0 24.75-17.62 42.37Q764.75-80 740-80H220zm0-60h520v-398H220v398zm0-458h520v-222H220v222z" />
		</Svg>
	);
}

export default Fridge;
