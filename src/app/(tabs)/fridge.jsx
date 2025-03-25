import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import FoodCategoryCard from '../../features/fridge/components/FoodCategoryCard';
import { fridgeCategories } from '../../constants/food';
import FoodSearch from '../../features/fridge/components/FoodSearch';

const MyFridgeScreen = () => {
	const { t } = useTranslation();
	const [categories, setCategories] = React.useState(fridgeCategories);

	const renderItem = React.useCallback(
		({ item }) => (
			<FoodCategoryCard category={item.category} products={item.products} />
		),
		[],
	);
	const keyExtractor = React.useCallback((item) => item.id.toString(), []);
	return (
		<Container header={<Header title={t('screen.fridge.title')} />}>
			<View className='flex flex-1 gap-4'>
				<FoodSearch setCategories={setCategories} />
				<FlatList
					data={categories}
					renderItem={renderItem}
					keyExtractor={keyExtractor}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</Container>
	);
};

export default MyFridgeScreen;
