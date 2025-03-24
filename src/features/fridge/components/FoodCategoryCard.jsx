import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ProductItem from './ProductItem';

const FoodCategoryCard = ({ category, products }) => {
	const keyExtractor = React.useCallback(
		(item) => `${category}-${item.name}`,
		[category],
	);

	const renderItem = React.useCallback(
		({ item }) => (
			<ProductItem id={item.id} name={item.name} image={item.image} />
		),
		[],
	);

	return (
		<View className='flex'>
			<View className='flex flex-row items-center'>
				<Text className='mb-3 font-bold text-lg dark:text-white'>
					{category}
				</Text>
			</View>
			<FlatList
				data={products}
				horizontal={true}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default FoodCategoryCard;
