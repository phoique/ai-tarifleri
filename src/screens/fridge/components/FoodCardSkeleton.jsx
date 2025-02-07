import { View } from 'react-native';

const FoodCardSkeleton = () => {
	return (
		<View className='flex flex-col'>
			<View className='bg-gray-200 rounded-xl animate-pulse h-9 w-1/3' />
			<View className='flex flex-row gap-4 mt-4'>
				<View className='bg-gray-200 animate-pulse w-24 h-24 rounded-2xl' />
				<View className='bg-gray-200 animate-pulse w-24 h-24 rounded-2xl' />
				<View className='bg-gray-200 animate-pulse w-24 h-24 rounded-2xl' />
			</View>
		</View>
	);
};

export default FoodCardSkeleton;
