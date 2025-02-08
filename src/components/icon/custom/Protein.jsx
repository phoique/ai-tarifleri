import Svg, { Path } from 'react-native-svg';

const Protein = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		fill='currentColor'
		{...props}>
		<Path d='M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 .6.1 1.2.2 1.8C5.5 14.3 8.5 16 12 16s6.5-1.7 7.8-4.2c.1-.6.2-1.2.2-1.8z M8.5 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
	</Svg>
);

export default Protein;
