import Svg, { Path } from 'react-native-svg';

function StepInto(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			{...props}>
			<Path d='M479.88-80Q434-80 402-112.12q-32-32.12-32-78T402.12-268q32.12-32 78-32T558-267.88q32 32.12 32 78T557.88-112q-32.12 32-78 32zm.12-330L294-596l42-42 114 113v-354h60v354l113-113 43 42-186 186z' />
		</Svg>
	);
}

export default StepInto;
