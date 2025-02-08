import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({
	id: 'ai-tarifleri',
	encryptionKey: process.env.EXPO_PUBLIC_ENCRYPTION_KEY,
});

/**
 * @description get saved food recommendation from storage
 * @returns {Array}
 */
export const getFoodRecommendations = () => {
	const foodRecommendation = storage.getString('foodRecommendation');
	if (foodRecommendation) {
		const parsed = JSON.parse(foodRecommendation);
		return Object.values(parsed);
	}
	return {};
};

/**
 * @description get saved food recommendation by id from storage
 * @param {string} id
 * @returns {object | null}
 */
export const getFoodRecommendation = (id) => {
	if (!id) {
		return null;
	}
	const foodRecommendation = getFoodRecommendations();
	return foodRecommendation[id];
};

/**
 * @description save food recommendation to storage
 * @param {string} id
 * @param {object} food
 * @returns {void}
 */
export const setFoodRecommendation = (id, food) => {
	if (!id || !food) {
		return;
	}
	const foodRecommendation = getFoodRecommendations();
	foodRecommendation[id] = food;
	storage.set('foodRecommendation', JSON.stringify(foodRecommendation));
};

/**
 * @description clear food recommendation from storage
 * @returns {void}
 */
export const clearFoodRecommendation = () => {
	storage.delete('foodRecommendation');
};
