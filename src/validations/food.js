import { object, string } from 'yup';

// yemek önerisi oluştur şeması
export const foodCreateSchema = object().shape({
	mealType: string().required(),
	nutrientType: string(),
	dietaryPreference: string(),
});
