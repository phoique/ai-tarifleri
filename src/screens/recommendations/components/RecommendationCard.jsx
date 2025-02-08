import { Text, View } from 'react-native';
import Icon from '../../../components/icon';

const RecommendationCard = ({ food }) => (
	<View className='bg-white p-4 rounded-2xl shadow-sm mb-4 border border-gray-100'>
		<View className='flex-row justify-between items-center mb-3'>
			<Text className='text-lg font-bold text-gray-800'>{food.title}</Text>
			<Icon name='Food' size={24} className='text-green-600' />
		</View>
		<Text className='text-gray-600 mb-3 leading-5' numberOfLines={2}>
			{food.description}
		</Text>
		<View className='flex-row flex-wrap gap-2'>
			{food.nutritionalValues?.vitaminAndMinerals.slice(0, 3).map((vitamin) => (
				<View key={vitamin} className='bg-green-50 px-3 py-1 rounded-full'>
					<Text className='text-green-700 text-sm font-normal'>{vitamin}</Text>
				</View>
			))}
		</View>
	</View>
);
export default RecommendationCard;
