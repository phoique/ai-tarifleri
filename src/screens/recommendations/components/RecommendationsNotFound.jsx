import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Button from '../../../components/form/Button';

const RecommendationsNotFound = () => {
	const { t } = useTranslation();
	const navigation = useNavigation();

	const handleNavigateHome = () => {
		navigation.navigate('home');
	};

	return (
		<View className='flex-1 items-center justify-center p-4'>
			<View className='items-center gap-4'>
				<Text className='font-bold text-gray-800 text-xl'>
					{t('screen.recommendations.notFound.title')}
				</Text>
				<Text className='text-center font-normal text-gray-600'>
					{t('screen.recommendations.notFound.description')}
				</Text>
				<Button
					className='rounded-2xl bg-blue-500'
					onPress={handleNavigateHome}>
					<Text className='w-1/2 text-center font-bold text-base text-white'>
						{t('form.button.recommend')}
					</Text>
				</Button>
			</View>
		</View>
	);
};

export default RecommendationsNotFound;
