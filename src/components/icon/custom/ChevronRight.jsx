import Svg, { Path } from 'react-native-svg';

function ChevronRight(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			{...props}>
			<Path d='M530-481L332-679l43-43 241 241-241 241-43-43 198-198z' />
		</Svg>
	);
}

export default ChevronRight;
