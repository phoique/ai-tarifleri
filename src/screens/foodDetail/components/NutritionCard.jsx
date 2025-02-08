import { Text, View } from 'react-native';

const NutritionCard = ({ title, value, unit = 'g' }) => (
	<View className='flex bg-green-50 p-4 rounded-2xl justify-center items-center'>
		<Text className='text-lg font-bold text-gray-800'>
			{value}
			{unit}
		</Text>
		<Text className='text-gray-600 text-sm'>{title}</Text>
	</View>
);

export default NutritionCard;
