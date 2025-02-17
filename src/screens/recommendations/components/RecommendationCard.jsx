import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../../components/icon';

const RecommendationCard = ({ food }) => {
	const navigation = useNavigation();

	const foodDetailRedirect = () => {
		navigation.navigate('foodDetail', { id: food.id });
	};

	return (
		<TouchableOpacity
			className='mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800'
			onPress={foodDetailRedirect}>
			<View className='mb-3 flex-row items-start justify-between'>
				<Text className='mr-2 flex-1 font-bold text-gray-800 text-lg dark:text-white'>
					{food.title}
				</Text>
				<Icon name='Food' size={24} className='flex-shrink-0 text-green-600' />
			</View>
			<Text
				className='mb-3 text-gray-600 leading-5 dark:text-gray-300'
				numberOfLines={2}>
				{food.description}
			</Text>
			<View className='flex-row flex-wrap gap-2'>
				{food.nutritionalValues?.vitaminAndMinerals
					.slice(0, 3)
					.map((vitamin) => (
						<View
							key={vitamin}
							className='rounded-full bg-green-50 px-3 py-1 dark:bg-green-200'>
							<Text className='font-normal text-green-700 text-sm dark:text-green-900'>
								{vitamin}
							</Text>
						</View>
					))}
			</View>
		</TouchableOpacity>
	);
};

export default RecommendationCard;
