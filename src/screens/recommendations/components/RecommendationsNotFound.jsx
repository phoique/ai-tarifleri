import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/form/Button';

const RecommendationsNotFound = () => {
	const { t } = useTranslation();
	const navigation = useNavigation();

	const handleNavigateHome = () => {
		navigation.navigate('home');
	};

	return (
		<View className='flex-1 justify-center items-center p-4'>
			<View className='items-center gap-4'>
				<Text className='text-xl font-bold text-gray-800'>
					{t('screen.recommendations.notFound.title')}
				</Text>
				<Text className='text-gray-600 text-center font-normal'>
					{t('screen.recommendations.notFound.description')}
				</Text>
				<Button
					className='bg-blue-500 rounded-2xl'
					onPress={handleNavigateHome}>
					<Text className='text-white text-center text-base font-bold w-1/2'>
						{t('form.button.recommend')}
					</Text>
				</Button>
			</View>
		</View>
	);
};

export default RecommendationsNotFound;
