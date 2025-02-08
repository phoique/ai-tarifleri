import Svg, { Path } from 'react-native-svg';

function Description(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M319-250h322v-60H319v60zm0-170h322v-60H319v60zM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220zm331-554v-186H220v680h520v-494H551zM220-820v186-186 680-680z' />
		</Svg>
	);
}

export default Description;
