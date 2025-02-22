import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import Button from '../components/form/Button';
import Container from '../components/Container';

const NotFoundScreen = () => {
	const router = useRouter();
	const { t } = useTranslation();

	const handleRedirect = () => {
		router.replace('(tabs)');
	};

	return (
		<Container edges={['top', 'bottom', 'left', 'right']}>
			<View className='flex-1 items-center justify-center bg-white px-6 dark:bg-gray-900'>
				<View className='flex flex-1 items-center justify-center'>
					<Text className='text-center font-bold text-3xl text-gray-900 dark:text-white'>
						{t('screen.notFound.title')}
					</Text>
					<Text className='mt-4 mb-10 text-center text-base text-gray-600 dark:text-gray-400'>
						{t('screen.notFound.description')}
					</Text>
				</View>
				<Button className='mb-5' onPress={handleRedirect}>
					<View className='flex flex-1 py-1'>
						<Text className='text-center font-bold text-base text-black dark:text-white'>
							{t('screen.notFound.backToHome')}
						</Text>
					</View>
				</Button>
			</View>
		</Container>
	);
};

export default NotFoundScreen;
