import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import FoodCategoryCard from '../../features/fridge/components/FoodCategoryCard';
import { fridgeCategories } from '../../constants/food';

const MyFridgeScreen = () => {
	const { t } = useTranslation();

	const renderItem = React.useCallback(
		({ item }) => (
			<FoodCategoryCard category={item.category} products={item.products} />
		),
		[],
	);

	return (
		<Container header={<Header title={t('screen.fridge.title')} />}>
			<View className='flex gap-4'>
				<FlatList
					data={fridgeCategories}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</Container>
	);
};

export default MyFridgeScreen;
