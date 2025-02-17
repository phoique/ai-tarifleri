import { View, Text } from 'react-native';
import Button from '../../../components/form/Button';
import Icon from '../../../components/icon';

const SettingButton = ({ onPress, title, description, icon }) => {
	return (
		<Button
			onPress={onPress}
			className='h-20 rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-500 dark:bg-gray-800'>
			<View className='flex-1 flex-row items-center justify-between'>
				<View className='space-y-1.5'>
					<View className='flex-row items-center gap-2'>
						<Text className='font-semibold text-gray-800 text-lg dark:text-gray-200'>
							{title}
						</Text>
					</View>
					{description && (
						<Text className='text-gray-500 dark:text-gray-400'>
							{description}
						</Text>
					)}
				</View>
				<View>
					<Icon name={icon} size={24} className='text-black dark:text-white' />
				</View>
			</View>
		</Button>
	);
};

export default SettingButton;
