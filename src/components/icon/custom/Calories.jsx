import Svg, { Path } from 'react-native-svg';

const Calories = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		fill='currentColor'
		{...props}>
		<Path d='M12 3c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.5 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm0 13.5c-2.49 0-4.5-2.01-4.5-4.5 0-.49.08-.968.21-1.417.165-.575.37-1.154.64-1.683.91 1.538 2.388 2.6 4.15 2.6 1.238 0 2.367-.47 3.22-1.233.27.528.47 1.107.64 1.683.13.45.21.927.21 1.417 0 2.49-2.01 4.5-4.5 4.5z' />
	</Svg>
);

export default Calories;
