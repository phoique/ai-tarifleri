import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { setStringAsync } from 'expo-clipboard';
import Container from '../components/Container';
import Button from '../components/form/Button';

const ErrorScreen = ({ error, resetErrorBoundary }) => {
	const { t } = useTranslation();

	const copyErrorToClipboard = async () => {
		const errorJSON = JSON.stringify({
			message: error?.message,
			stack: error?.stack,
			name: error?.name,
		});
		await setStringAsync(errorJSON);
	};

	const handleReset = () => {
		if (resetErrorBoundary) {
			resetErrorBoundary();
		}
	};

	return (
		<Container isScrollable={false} edges={['top', 'bottom', 'left', 'right']}>
			<View className='flex-1 items-center justify-center p-4'>
				<View className='items-center gap-4'>
					<Text className='font-bold text-gray-800 text-xl dark:text-white'>
						{t('screen.error.title')}
					</Text>
					<Text className='text-center font-normal text-gray-600 dark:text-gray-300'>
						{t('screen.error.description')}
					</Text>
					<Button
						className='rounded-2xl bg-gray-200 p-3 dark:bg-gray-700'
						onPress={copyErrorToClipboard}>
						<Text className='text-center font-bold text-base text-gray-700 dark:text-white'>
							{t('form.button.copyError')}
						</Text>
					</Button>
				</View>
			</View>
			<View className='flex items-center justify-center'>
				<Button onPress={handleReset}>
					<Text className='text-center font-bold text-black text-lg dark:text-white'>
						{t('screen.error.reset')}
					</Text>
				</Button>
			</View>
		</Container>
	);
};

export default ErrorScreen;
