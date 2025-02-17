import { Text, View } from 'react-native';
import Icon from '../../../components/icon';

const FoodInfoCard = ({ icon, title, children }) => {
	return (
		<View className='d-flex'>
			<View className='mb-3 flex-row items-center'>
				<Icon name={icon} size={24} className='mr-2 text-black' />
				<Text className='font-bold text-gray-800 text-xl'>{title}</Text>
			</View>
			<View className='ml-2'>{children}</View>
		</View>
	);
};

export default FoodInfoCard;
