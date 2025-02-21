import classNames from 'classnames';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import Button from '../../../components/form/Button';

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
						className={classNames('h-24 w-24 rounded-2xl', {
							'opacity-40': !item.isFoodAvailable,
						})}
						source={{ uri: item.image }}
					/>
					<Text
						className={classNames('mt-1 font-normal text-sm', {
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
				<Text className='mb-3 font-bold text-lg'>{category}</Text>
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
