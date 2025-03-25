import Svg, { Path } from 'react-native-svg';

function Warning(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M40-120l440-760 440 760H40zm104-60h672L480-760 144-180zm340.18-57q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5zM454-348h60v-224h-60v224zm26-122z' />
		</Svg>
	);
}

export default Warning;
