import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/icon';
import classNames from 'classnames';

const IngredientCard = ({ inFridge, missing }) => {
	const { t } = useTranslation();

	const ingredientList = [...inFridge, ...missing].sort();
	return (
		<View className='rounded-2xl bg-white p-4 shadow-sm dark:bg-gray-800'>
			<View className='mb-3 flex-row items-center gap-3'>
				<Icon name='List' size={24} className='text-green-600' />
				<Text className='font-bold text-gray-800 text-lg dark:text-white'>
					{t('screen.foodDetail.ingredients')}
				</Text>
			</View>
			<View className='ml-2 flex flex-col gap-2'>
				{ingredientList.map((ingredient) => {
					const isInFridge = inFridge.includes(ingredient);
					return (
						<View key={ingredient} className='flex-row items-center gap-2'>
							<Icon
								name={isInFridge ? 'CheckCircle' : 'Warning'}
								size={16}
								className={classNames('text-green-600', {
									'text-red-400': !isInFridge,
								})}
							/>
							<Text
								className={classNames('text-gray-600 dark:text-gray-300', {
									'text-red-400 dark:text-red-400': !isInFridge,
								})}>
								{ingredient}
							</Text>
						</View>
					);
				})}
			</View>
		</View>
	);
};

export default IngredientCard;
