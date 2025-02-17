import Svg, { Path } from 'react-native-svg';

function System(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M57-160q-23.51 0-40.26-17.63Q0-195.25 0-220h141q-24 0-42-18t-18-42v-500q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.62 42.5Q924.75-160 900-160H57zm423-22q14.45 0 24.23-9.77Q514-201.55 514-216q0-14.45-9.77-24.23Q494.45-250 480-250q-14.45 0-24.23 9.77Q446-230.45 446-216q0 14.45 9.77 24.23Q465.55-182 480-182zm-339-98h678v-500H141v500zm0 0v-500 500z' />
		</Svg>
	);
}

export default System;
