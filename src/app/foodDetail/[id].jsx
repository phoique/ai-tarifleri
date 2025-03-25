import { ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useLocalSearchParams } from 'expo-router';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Icon from '../../components/icon';
import { getFoodRecommendation } from '../../services/storage';
import NutritionCard from '../../features/foodDetail//components/NutritionCard';
import PreparationCard from '../../features/foodDetail//components/PreparationCard';
import VitaminAndMineralCard from '../../features/foodDetail//components/VitaminAndMineralCard';
import IngredientCard from '../../features/foodDetail/components/IngredientCard';

const FoodDetailScreen = () => {
	const { t } = useTranslation();
	const { id } = useLocalSearchParams();

	const food = getFoodRecommendation(id);

	if (!food) {
		throw new Error('No food found for the given id');
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
					<IngredientCard
						inFridge={food.ingredients.inFridge}
						missing={food.ingredients.missing}
					/>
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
