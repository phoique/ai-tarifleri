import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from './icon';

const Header = ({ lastContent, title, isBack }) => {
	const navigation = useNavigation();

	const handleBack = () => {
		navigation.goBack();
	};

	return (
		<View className='mb-3 flex flex-row items-center justify-between'>
			<View className='w-10'>
				{isBack && (
					<TouchableOpacity
						className='flex justify-center'
						onPress={handleBack}>
						<Icon
							name='Back'
							size={24}
							className='text-black dark:text-white'
						/>
					</TouchableOpacity>
				)}
			</View>
			<View className='flex-1 px-2'>
				<Text className='text-center font-bold text-black text-xl dark:text-white'>
					{title}
				</Text>
			</View>
			<View className='w-10 items-end'>{lastContent}</View>
		</View>
	);
};

export default Header;
