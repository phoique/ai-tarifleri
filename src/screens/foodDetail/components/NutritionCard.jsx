import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Icon from '../../../components/icon';
import { nutrientCardItems } from '../../../constants/food';

const NutritionItem = ({ title, value, unit, icon }) => (
	<View className='flex-1 items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800'>
		<View className='mb-2 h-12 w-12 items-center justify-center rounded-xl bg-green-50 p-2 dark:bg-green-200'>
			<Icon
				name={icon}
				size={24}
				className='text-green-600 dark:text-green-800'
			/>
		</View>
		<Text className='mb-1 text-gray-500 text-sm dark:text-gray-300'>
			{title}
		</Text>
		<Text className='font-bold text-green-600 text-xl dark:text-green-800'>
			{value}
			<Text className='text-gray-500 text-sm dark:text-gray-300'> {unit}</Text>
		</Text>
	</View>
);

const NutritionCard = ({ nutritionalValues }) => {
	const { t } = useTranslation();

	return (
		<View className='gap-3'>
			<Text className='font-bold text-gray-800 text-lg dark:text-white'>
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
