import { View, Text } from 'react-native';

const InputLabel = ({ title, children }) => {
	return (
		<View>
			<Text className='font-medium text-lg mb-3'>{title}</Text>
			{children}
		</View>
	);
};

export default InputLabel;
