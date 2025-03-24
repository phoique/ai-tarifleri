export const mealTypes = [
	'breakfast',
	'mainCourse',
	'appetizer',
	'dinner',
	'dessert',
];

export const dietaryTypes = ['vegan', 'vegetarian', 'glutenFree', 'lowCalorie'];

export const nutrientTypes = ['protein', 'carbohydrate', 'fat'];

export const nutrientCardItems = [
	{ key: 'calories', icon: 'Calories', unit: 'kcal' },
	{ key: 'protein', icon: 'Protein', unit: 'g' },
	{ key: 'carbohydrate', icon: 'Carbs', unit: 'g' },
	{ key: 'fat', icon: 'Fat', unit: 'g' },
];

export const fridgeCategories = [
	{
		id: 1,
		category: 'meat',
		products: [
			{ id: '1-1', name: 'chicken' },
			{ id: '1-2', name: 'beef' },
			{ id: '1-3', name: 'pork' },
			{ id: '1-4', name: 'fish' },
			{ id: '1-5', name: 'seafood' },
			{ id: '1-6', name: 'lamb' },
			{ id: '1-7', name: 'turkey' },
			{ id: '1-8', name: 'duck' },
			{ id: '1-9', name: 'bacon' },
		],
	},
	{
		id: 2,
		category: 'dairy',
		products: [
			{ id: '2-1', name: 'milk' },
			{ id: '2-2', name: 'cheese' },
			{ id: '2-3', name: 'yogurt' },
			{ id: '2-4', name: 'butter' },
			{ id: '2-5', name: 'cream' },
			{ id: '2-6', name: 'sour cream' },
			{ id: '2-7', name: 'cottage cheese' },
			{ id: '2-8', name: 'ice cream' },
			{ id: '2-9', name: 'whipped cream' },
		],
	},
];
