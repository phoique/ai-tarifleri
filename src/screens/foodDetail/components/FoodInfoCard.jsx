import { View, Text } from 'react-native';
import Icon from '../../../components/icon';

const FoodInfoCard = ({ icon, title, children }) => {
	return (
		<View className='d-flex'>
			<View className='flex-row items-center mb-3'>
				<Icon name={icon} size={24} className='text-black mr-2' />
				<Text className='text-xl font-bold text-gray-800'>{title}</Text>
			</View>
			<View className='ml-2'>{children}</View>
		</View>
	);
};

export default FoodInfoCard;
