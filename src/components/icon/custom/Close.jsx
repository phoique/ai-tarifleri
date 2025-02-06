import Svg, { Path } from 'react-native-svg';

function Close(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			{...props}>
			<Path d='M249-207l-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231z' />
		</Svg>
	);
}

export default Close;
