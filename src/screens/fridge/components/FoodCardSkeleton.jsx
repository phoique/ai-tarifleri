import { View } from 'react-native';

const FoodCardSkeleton = () => {
	return (
		<View className='flex flex-col'>
			<View className='h-9 w-1/3 animate-pulse rounded-xl bg-gray-200' />
			<View className='mt-4 flex flex-row gap-4'>
				<View className='h-24 w-24 animate-pulse rounded-2xl bg-gray-200' />
				<View className='h-24 w-24 animate-pulse rounded-2xl bg-gray-200' />
				<View className='h-24 w-24 animate-pulse rounded-2xl bg-gray-200' />
			</View>
		</View>
	);
};

export default FoodCardSkeleton;
