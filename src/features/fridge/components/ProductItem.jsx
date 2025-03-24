import React from 'react';
import { View, Text, Image } from 'react-native';
import classNames from 'classnames';
import Button from '../../../components/form/Button';
import {
	getFridgeItems,
	removeFridgeItem,
	setFridgeItem,
} from '../../../services/storage';

const ProductItem = ({ id, name, image }) => {
	const isFoodIcludes = getFridgeItems().includes(id);

	const [isFoodAvailable, setIsFoodAvailable] = React.useState(isFoodIcludes);

	const handlePress = () => {
		setIsFoodAvailable((prev) => {
			if (prev) {
				setFridgeItem(id);
				return false;
			}
			removeFridgeItem(id);
			return true;
		});
	};
	return (
		<Button className='mb-5 px-0 py-0 pr-5' onPress={handlePress}>
			<View className='flex flex-col items-center'>
				<View
					className={classNames('rounded-2xl border ', {
						'border border-green-500': isFoodAvailable,
						'border-transparent': !isFoodAvailable,
					})}>
					{image ? (
						<Image
							className={classNames('h-24 w-24 rounded-2xl', {
								'opacity-40': !isFoodAvailable,
							})}
							source={{ uri: image }}
						/>
					) : (
						<View className='flex h-24 w-24 items-center justify-center rounded-2xl bg-gray-300 dark:bg-gray-700'>
							<Text className='text-center font-normal text-gray-500 dark:text-gray-500'>
								{name}
							</Text>
						</View>
					)}
				</View>
				<Text
					className={classNames(
						'mt-1 font-normal text-gray-600 text-sm dark:text-gray-200',
						{
							'text-green-600 dark:text-green-400': isFoodAvailable,
						},
					)}>
					{name}
				</Text>
			</View>
		</Button>
	);
};

export default ProductItem;
