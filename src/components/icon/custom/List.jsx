import Svg, { Path } from 'react-native-svg';

function List(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M290-620v-60h550v60H290zm0 170v-60h550v60H290zm0 170v-60h550v60H290zM150-620q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.62 8.5 8.63 8.5 21.38 0 12-8.62 21-8.63 9-21.38 9zm0 170q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.62 8.5 8.63 8.5 21.38 0 12-8.62 21-8.63 9-21.38 9zm0 170q-12 0-21-9t-9-21.5q0-12.5 9-21t21.5-8.5q12.5 0 21 8.62 8.5 8.63 8.5 21.38 0 12-8.62 21-8.63 9-21.38 9z' />
		</Svg>
	);
}

export default List;
