import React from 'react';
import { useTranslation } from 'react-i18next';
import openAiServices from '../services/openAiServices';

const useFoodRecommendation = () => {
	const { t } = useTranslation();
	const [getFoodRecommendationMutation, getFoodRecommendationResponse] =
		openAiServices.useGetFoodRecommendationMutation();

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
		[getFoodRecommendationMutation, t],
	);

	return {
		isLoading: getFoodRecommendationResponse.isLoading,
		createFoodRecommendation,
	};
};

export default useFoodRecommendation;
