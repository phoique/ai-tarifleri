import Svg, { Path } from 'react-native-svg';

function Calculate(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			{...props}>
			<Path d='M314-228h50v-88h88v-50h-88v-88h-50v88h-88v50h88v88zm215-35h201v-49H529v49zm0-107h201v-50H529v50zm37-163l61-61 61 61 36-36-61-61 61-61-36-36-61 61-61-61-36 36 61 61-61 61 36 36zm-325-72h196v-50H241v50zm-61 485q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180zm0-60h600v-600H180v600zm0-600v600-600z' />
		</Svg>
	);
}

export default Calculate;
