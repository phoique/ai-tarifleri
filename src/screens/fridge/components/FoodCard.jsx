import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Button from '../../../components/form/Button';
import classNames from 'classnames';

const FoodCard = ({ category, foods }) => {
	const keyExtractor = React.useCallback(
		(item) => `${category}-${item.name}`,
		[category],
	);

	const renderItem = React.useCallback(({ item }) => {
		return (
			<Button className='px-0 py-0 pr-3'>
				<View className='flex flex-col items-center'>
					<Image
						className={classNames('w-24 h-24 rounded-2xl', {
							'opacity-40': !item.isFoodAvailable,
						})}
						source={{ uri: item.image }}
					/>
					<Text
						className={classNames('text-sm mt-1 font-normal', {
							'text-gray-400': !item.isFoodAvailable,
						})}>
						{item.name}
					</Text>
				</View>
			</Button>
		);
	}, []);

	return (
		<View className='flex'>
			<View className='flex flex-row items-center'>
				<Text className='text-lg font-bold mb-3'>{category}</Text>
			</View>
			<FlatList
				data={foods}
				horizontal={true}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default FoodCard;
