import Svg, { Path } from 'react-native-svg';

function Stairs(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			{...props}>
			<Path d='M250-250h157v-133h103v-133h103v-134h97v-60H553v133H450v133H347v134h-97v60zm-70 130q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180zm0-60h600v-600H180v600zm0-600v600-600z' />
		</Svg>
	);
}

export default Stairs;
