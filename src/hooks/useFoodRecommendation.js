import React from 'react';
import { useTranslation } from 'react-i18next';
import openAiServices from '../services/openAiServices';
import { getFridgeItems } from '../services/storage';
import { fridgeCategories } from '../constants/food';

const useFoodRecommendation = () => {
	const { t } = useTranslation();
	const [getFoodRecommendationMutation, getFoodRecommendationResponse] =
		openAiServices.useGetFoodRecommendationMutation();

	const fridgeItemsText = React.useMemo(() => {
		const fridgeItems = getFridgeItems();

		if (fridgeItems.length === 0) {
			return '';
		}

		return fridgeItems
			.map((itemId) => {
				const [categoryId, productIndex] = itemId.split('-').map(Number);
				const category = fridgeCategories.find((cat) => cat.id === categoryId);
				const product = category?.products[productIndex - 1];
				return product ? t(`fridge.items.${product.name}`) : '';
			})
			.join(', ');
	}, [t]);

	const createFoodRecommendation = React.useCallback(
		(values) => {
			return new Promise((resolve, reject) => {
				getFoodRecommendationMutation({
					messages: [
						{
							role: 'system',
							content: t('hook.foodRecommendation.systemRoleContent'),
							response_format: 'json',
						},
						{
							role: 'user',
							content: t('hook.foodRecommendation.userRoleContent', {
								mealType: values.mealType
									? t(`screen.home.type.${values.mealType}`)
									: '',
								nutrientType: values.nutrientType
									? t(`screen.home.type.${values.nutrientType}`)
									: '',
								dietaryType: values.dietaryType
									? t(`screen.home.type.${values.dietaryType}`)
									: '',
								allergy: values.allergy,
								other: values.other,
								fridgeItems: fridgeItemsText,
							}),
						},
					],
				})
					.unwrap()
					.then((response) => {
						resolve(response);
					})
					.catch((error) => {
						reject(error);
					});
			});
		},
		[getFoodRecommendationMutation, t, fridgeItemsText],
	);

	return {
		isLoading: getFoodRecommendationResponse.isLoading,
		createFoodRecommendation,
	};
};

export default useFoodRecommendation;
