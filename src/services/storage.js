import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({
	id: 'ai-tarifleri',
	encryptionKey: process.env.EXPO_PUBLIC_ENCRYPTION_KEY,
});

/**
 * @description get all food recommendations from storage
 * @returns {Array}
 */
export const getFoodRecommendations = () => {
	const foodRecommendation = storage.getString('foodRecommendation');
	if (foodRecommendation) {
		const parsed = JSON.parse(foodRecommendation);
		return Object.values(parsed);
	}
	return [];
};

/**
 * @description get all food recommendation entries from storage
 * @returns {object}
 */
export const getFoodRecommendationEntries = () => {
	const foodRecommendation = storage.getString('foodRecommendation');
	if (foodRecommendation) {
		return JSON.parse(foodRecommendation);
	}
	return {};
};

/**
 * @description get food recommendation by id from storage
 * @param {string} id
 * @returns {object | null}
 */
export const getFoodRecommendation = (id) => {
	if (!id) {
		return null;
	}
	const foodRecommendation = getFoodRecommendationEntries();
	return foodRecommendation[id] || null;
};

/**
 * @description save food recommendation to storage
 * @param {string} id
 * @param {object} food
 * @returns {void}
 */
export const setFoodRecommendation = (food) => {
	if (!food) {
		return;
	}
	const foodRecommendation = getFoodRecommendationEntries();
	foodRecommendation[food.id] = food;
	storage.set('foodRecommendation', JSON.stringify(foodRecommendation));
};

/**
 * @description clear food recommendation from storage
 * @returns {void}
 */
export const clearFoodRecommendation = () => {
	storage.delete('foodRecommendation');
};

/**
 * @description get all fridge items from storage
 * @returns {Array}
 */
export const getFridgeItems = () => {
	const fridgeItems = storage.getString('fridgeItems');
	if (fridgeItems) {
		const parsed = JSON.parse(fridgeItems);
		return parsed;
	}
	return [];
};

/**
 * @description set fridge items to storage
 * @param {string} itemId
 * @returns {void}
 */
export const setFridgeItem = (itemId) => {
	const fridgeItems = getFridgeItems();
	if (!fridgeItems.includes(itemId)) {
		fridgeItems.push(itemId);
	}
	storage.set('fridgeItems', JSON.stringify(fridgeItems));
};

/**
 * @description remove fridge item from storage
 * @param {string} itemId
 * @returns {void}
 */
export const removeFridgeItem = (itemId) => {
	const fridgeItems = getFridgeItems();
	const newFridgeItems = fridgeItems.filter((item) => item !== itemId);
	storage.set('fridgeItems', JSON.stringify(newFridgeItems));
};
