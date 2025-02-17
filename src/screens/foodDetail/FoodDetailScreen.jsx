import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Icon from '../../components/icon';
import { getFoodRecommendation } from '../../services/storage';
import NutritionCard from './components/NutritionCard';
import PreparationCard from './components/PreparationCard';
import VitaminAndMineralCard from './components/VitaminAndMineralCard';

const FoodDetailScreen = () => {
	const { t } = useTranslation();
	const params = useRoute();

	const food = getFoodRecommendation(params?.params?.id);

	if (!food) {
		return (
			<Container isScrollable={false}>
				<View className='flex-1 items-center justify-center'>
					<Text className='font-normal text-gray-600 text-lg dark:text-gray-400'>
						{t('notFound')}
					</Text>
				</View>
			</Container>
		);
	}

	return (
		<Container
			isScrollable={false}
			edges={['top', 'bottom']}
			header={<Header title={food.title} isBack={true} />}>
			<ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
				<View className='flex flex-1 gap-6 p-4'>
					<View className='rounded-2xl bg-white p-4 shadow-sm dark:bg-gray-800'>
						<View className='mb-3 flex-row items-center gap-3'>
							<Icon name='Description' size={24} className='text-green-600' />
							<Text className='font-bold text-gray-800 text-lg dark:text-white'>
								{t('screen.foodDetail.foodSummary')}
							</Text>
						</View>
						<Text className='text-gray-600 leading-6 dark:text-gray-300'>
							{food.description}
						</Text>
					</View>
					<NutritionCard nutritionalValues={food.nutritionalValues} />
					<PreparationCard preparations={food.preparation} />
					<View className='rounded-2xl bg-green-50 p-4 dark:bg-gray-800'>
						<View className='mb-3 flex-row items-center gap-3'>
							<Icon name='Restaurant' size={24} className='text-green-600' />
							<Text className='font-bold text-gray-800 text-lg dark:text-white'>
								{t('screen.foodDetail.servingSuggestions')}
							</Text>
						</View>
						<Text className='text-gray-700 dark:text-gray-300'>
							{food.servingSuggestions}
						</Text>
					</View>
					<VitaminAndMineralCard
						vitaminAndMinerals={food.nutritionalValues.vitaminAndMinerals}
					/>
				</View>
			</ScrollView>
		</Container>
	);
};

export default FoodDetailScreen;
