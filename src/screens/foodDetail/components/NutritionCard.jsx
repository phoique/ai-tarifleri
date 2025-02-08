import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Icon from '../../../components/icon';
import { nutrientCardItems } from '../../../constants/food';

const NutritionItem = ({ title, value, unit, icon }) => (
	<View className='bg-white p-4 rounded-2xl flex-1 border border-gray-100 justify-center items-center'>
		<View className='bg-green-50 p-2 rounded-xl w-12 h-12 items-center justify-center mb-2'>
			<Icon name={icon} size={24} className='text-green-600' />
		</View>
		<Text className='text-gray-500 text-sm mb-1'>{title}</Text>
		<Text className='text-xl font-bold text-green-600'>
			{value}
			<Text className='text-sm text-gray-500'> {unit}</Text>
		</Text>
	</View>
);

const NutritionCard = ({ nutritionalValues }) => {
	const { t } = useTranslation();

	return (
		<View className='gap-3'>
			<Text className='text-lg font-bold text-gray-800'>
				{t('screen.foodDetail.nutritionalValue')}
			</Text>
			<View className='flex-row flex-wrap gap-3'>
				{nutrientCardItems.map((item) => (
					<View key={item.key} className='w-1/3'>
						<NutritionItem
							title={t(`screen.foodDetail.${item.key}`)}
							value={nutritionalValues.per100g[item.key]}
							unit={item.unit}
							icon={item.icon}
						/>
					</View>
				))}
			</View>
		</View>
	);
};

export default NutritionCard;
