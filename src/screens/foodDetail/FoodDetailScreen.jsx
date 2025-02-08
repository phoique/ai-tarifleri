import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import FoodInfoCard from './components/FoodInfoCard';
import Icon from '../../components/icon';
import NutritionCard from './components/NutritionCard';
import { getFoodRecommendation } from '../../services/storage';

const FoodDetailScreen = () => {
	const { t } = useTranslation();
	const params = useRoute();
	const navigate = useNavigation();

	if (!params?.params?.id) {
		navigate.goBack();
	}

	const food = getFoodRecommendation(params?.params?.id);
	return (
		<Container
			isScrollable={true}
			header={<Header title={food.title} />}
			edges={['top', 'bottom']}>
			<View className='flex flex-1 gap-6'>
				{/* Yemek açıklaması */}
				<FoodInfoCard
					icon='Description'
					title={t('screen.foodDetail.foodSummary')}>
					<Text className='text-gray-600 font-normal'>{food.description}</Text>
				</FoodInfoCard>

				{/* Malzemeler */}
				<FoodInfoCard
					icon='Ingredient'
					title={t('screen.foodDetail.ingredients')}>
					<View className='flex gap-4'>
						{food.ingredients.map((ingredient) => (
							<View className='flex flex-row items-center' key={ingredient}>
								<Icon name='StepInto' size={24} className='text-black' />
								<Text className='text-gray-600 font-normal'>{ingredient}</Text>
							</View>
						))}
					</View>
				</FoodInfoCard>

				{/* Yapım aşaması */}
				<FoodInfoCard icon='Stairs' title={t('screen.foodDetail.preparation')}>
					<View className='flex gap-4'>
						{food.preparation.map((step) => (
							<View key={step} className='flex-row'>
								<Text className='text-gray-600 font-normal'>{step}</Text>
							</View>
						))}
					</View>
				</FoodInfoCard>

				{/* Servis Önerisi */}
				<View className='bg-green-50 p-4 rounded-2xl'>
					<FoodInfoCard
						icon='Recommend'
						title={t('screen.foodDetail.servingSuggestions')}>
						<View className='flex-row'>
							<Text className='text-gray-600 font-normal'>
								{food.servingSuggestions}
							</Text>
						</View>
					</FoodInfoCard>
				</View>

				{/* Besin Değerleri */}
				<FoodInfoCard
					icon='Calculate'
					title={t('screen.foodDetail.nutritionalValue')}>
					<View>
						<View className='flex flex-row flex-wrap gap-4'>
							{['calories', 'protein', 'carbohydrate', 'fat'].map(
								(nutrient) => (
									<NutritionCard
										key={nutrient}
										title={t(`screen.foodDetail.${nutrient}`)}
										value={food.nutritionalValues.per100g[nutrient]}
										unit={nutrient === 'calories' ? 'kcal' : 'g'}
									/>
								),
							)}
						</View>
					</View>
				</FoodInfoCard>

				{/* Vitamin ve Mineraller */}
				<FoodInfoCard
					icon='Description'
					title={t('screen.foodDetail.vitaminMinerals')}>
					<View className='flex flex-row flex-wrap gap-2'>
						{food.nutritionalValues.vitaminAndMinerals.map((vitamin) => (
							<View key={vitamin} className='bg-green-100 p-3 rounded-full'>
								<Text className='text-green-800 font-normal'>{vitamin}</Text>
							</View>
						))}
					</View>
				</FoodInfoCard>
			</View>
		</Container>
	);
};

export default FoodDetailScreen;
