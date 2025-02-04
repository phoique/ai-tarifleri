import Svg, { Path } from "react-native-svg";

function Food(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			height="48px"
			viewBox="0 -960 960 960"
			width="48px"
			fill="currentColor"
			{...props}
		>
			<Path
				d="M140-120q-24.75 0-42.37-17.63Q80-155.25 80-180v-128h800v128q0 24.75-17.62 42.37Q844.75-120 820-120H140zm0-128v68h680v-68H140zm340-178q-41 0-60.5 22T346-382q-54 0-71.5-22T216-426q-41 0-61.36 22-20.35 22-74.64 22v-60q33 0 57.5-22t78.5-22q54 0 71.5 22t58.5 22q41 0 60.5-22t73.5-22q54 0 73.5 22t60.5 22q41 0 58.5-22t71.5-22q54 0 78.5 22t57.5 22v60q-54 0-74.5-22T744-426q-41 0-58.5 22T614-382q-54 0-73.5-22T480-426zM80-558v-40q0-109 105-175.5T480-840q190 0 295 66.5T880-598v40H80zm400-222q-148 0-242.5 46.5T142-618h676q-3-69-96.5-115.5T480-780zm0 532zm0-370z"
				fill="currentColor"
			/>
		</Svg>
	);
}

export default Food;
