import { Text, View } from 'react-native';

const InputLabel = ({ title, children }) => {
	return (
		<View>
			<Text className='mb-3 font-medium text-black text-lg dark:text-white'>
				{title}
			</Text>
			{children}
		</View>
	);
};

export default InputLabel;
