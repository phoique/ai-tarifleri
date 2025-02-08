import Svg, { Path } from 'react-native-svg';

const Carbs = (props) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		fill='currentColor'
		{...props}>
		<Path d='M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96zM12 19c-4.41 0-8-3.59-8-8 0-.05 0-.1.01-.15 2.6-.98 4.69-2.99 5.74-5.55 3.38 4.14 7.97 3.73 8.99 3.61-.7 5.73-5.55 10.09-6.74 10.09z' />
	</Svg>
);

export default Carbs;
