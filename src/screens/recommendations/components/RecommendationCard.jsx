import { Text, View } from 'react-native';
import Icon from '../../../components/icon';

const RecommendationCard = ({ food }) => (
	<View className='mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm'>
		<View className='mb-3 flex-row items-center justify-between'>
			<Text className='font-bold text-gray-800 text-lg'>{food.title}</Text>
			<Icon name='Food' size={24} className='text-green-600' />
		</View>
		<Text className='mb-3 text-gray-600 leading-5' numberOfLines={2}>
			{food.description}
		</Text>
		<View className='flex-row flex-wrap gap-2'>
			{food.nutritionalValues?.vitaminAndMinerals.slice(0, 3).map((vitamin) => (
				<View key={vitamin} className='rounded-full bg-green-50 px-3 py-1'>
					<Text className='font-normal text-green-700 text-sm'>{vitamin}</Text>
				</View>
			))}
		</View>
	</View>
);
export default RecommendationCard;
