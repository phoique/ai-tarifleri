import Svg, { Path } from 'react-native-svg';

function Back(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			{...props}>
			<Path d='M274-450l248 248-42 42-320-320 320-320 42 42-248 248h526v60H274z' />
		</Svg>
	);
}

export default Back;
