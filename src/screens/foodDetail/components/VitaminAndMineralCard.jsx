import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Icon from '../../../components/icon';

const VitaminAndMineralCard = ({ vitaminAndMinerals }) => {
	const { t } = useTranslation();
	return (
		<View>
			<Text className='mb-4 font-bold text-gray-800 text-lg'>
				{t('screen.foodDetail.vitaminMinerals')}
			</Text>
			<View className='flex-row flex-wrap'>
				{vitaminAndMinerals.map((nutrient) => (
					<View key={nutrient} className='w-1/3 px-3'>
						<View className='flex-1 items-center justify-center rounded-2xl border border-gray-100 bg-white p-4'>
							<View className='mb-2 items-center justify-center rounded-xl bg-purple-50 p-2'>
								<Icon name='Vitamin' size={24} className='text-purple-600' />
							</View>
							<Text className='text-center font-medium text-gray-700 text-sm'>
								{nutrient}
							</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
};

export default VitaminAndMineralCard;
