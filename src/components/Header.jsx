import { Text, TouchableOpacity, View } from 'react-native';
import Icon from './icon';

const Header = ({ lastContent, title, isBack }) => {
	return (
		<View className='mb-3 flex flex-row items-center justify-between'>
			<View className='flex-1'>
				{isBack && (
					<TouchableOpacity className='flex justify-center'>
						<Icon name='Back' size={24} />
					</TouchableOpacity>
				)}
			</View>
			<View className='flex-2 items-center justify-center'>
				<Text className='font-bold text-black text-xl'>{title}</Text>
			</View>
			<View className='flex-1 items-end'>{lastContent}</View>
		</View>
	);
};

export default Header;
