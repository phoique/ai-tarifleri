import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const PreparationItem = ({ text, step }) => (
	<View className='bg-white p-4 rounded-2xl mb-3 border border-gray-100'>
		<View className='flex-row items-center gap-4'>
			<View className='bg-green-100 h-8 w-8 rounded-full items-center justify-center'>
				<Text className='text-green-700 font-bold'>{step}</Text>
			</View>
			<Text className='text-gray-700 flex-1 leading-5'>{text}</Text>
		</View>
	</View>
);

const PreparationCard = ({ preparations }) => {
	const { t } = useTranslation();
	return (
		<View className='gap-3'>
			<Text className='text-lg font-bold text-gray-800'>
				{t('screen.foodDetail.preparation')}
			</Text>
			{preparations.map((step, index) => (
				<PreparationItem key={step} text={step} step={index + 1} />
			))}
		</View>
	);
};

export default PreparationCard;
