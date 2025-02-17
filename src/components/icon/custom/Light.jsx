import Svg, { Path } from 'react-native-svg';

function Light(props) {
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			height='48px'
			viewBox='0 -960 960 960'
			width='48px'
			fill='currentColor'
			{...props}>
			<Path d='M480-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41zm0 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280zM200-450H40v-60h160v60zm720 0H760v-60h160v60zM450-760v-160h60v160h-60zm0 720v-160h60v160h-60zM262-658l-100-97 43-44 96 100-39 41zm494 496l-98-100 41-41 99 98-42 43zm-99-537l98-99 44 42-99 98-43-41zM162-205l99-98 42 42-98 99-43-43zm318-275z' />
		</Svg>
	);
}

export default Light;
