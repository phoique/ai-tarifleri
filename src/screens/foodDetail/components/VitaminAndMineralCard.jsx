import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/icon';

const VitaminAndMineralCard = ({ vitaminAndMinerals }) => {
	const { t } = useTranslation();
	return (
		<View>
			<Text className='text-lg font-bold text-gray-800 mb-4'>
				{t('screen.foodDetail.vitaminMinerals')}
			</Text>
			<View className='flex-row flex-wrap'>
				{vitaminAndMinerals.map((nutrient) => (
					<View key={nutrient} className='w-1/3 px-3'>
						<View className='bg-white p-4 rounded-2xl flex-1 border border-gray-100 justify-center items-center'>
							<View className='bg-purple-50 p-2 rounded-xl items-center justify-center mb-2'>
								<Icon name='Vitamin' size={24} className='text-purple-600' />
							</View>
							<Text className='text-gray-700 font-medium text-sm text-center'>
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
