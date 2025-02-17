import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

const PreparationItem = ({ text, step }) => (
	<View className='mb-3 rounded-2xl border border-gray-100 bg-white p-4'>
		<View className='flex-row items-center gap-4'>
			<View className='h-8 w-8 items-center justify-center rounded-full bg-green-100'>
				<Text className='font-bold text-green-700'>{step}</Text>
			</View>
			<Text className='flex-1 text-gray-700 leading-5'>{text}</Text>
		</View>
	</View>
);

const PreparationCard = ({ preparations }) => {
	const { t } = useTranslation();
	return (
		<View className='gap-3'>
			<Text className='font-bold text-gray-800 text-lg'>
				{t('screen.foodDetail.preparation')}
			</Text>
			{preparations.map((step, index) => (
				<PreparationItem key={step} text={step} step={index + 1} />
			))}
		</View>
	);
};

export default PreparationCard;
