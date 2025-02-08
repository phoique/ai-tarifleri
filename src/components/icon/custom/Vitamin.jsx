import Svg, { Path } from 'react-native-svg';

const Vitamin = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		fill='currentColor'
		{...props}>
		<Path d='M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v2h-9v-2zm-5 2h3v-2H6v2zm14-7H4v2h16V7z' />
	</Svg>
);

export default Vitamin;
