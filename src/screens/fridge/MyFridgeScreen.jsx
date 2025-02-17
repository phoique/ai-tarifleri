import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import foodServices from '../../services/foodServices';
import FoodCard from './components/FoodCard';
import FoodCardSkeleton from './components/FoodCardSkeleton';

const MyFridgeScreen = () => {
	const { t } = useTranslation();

	const getCategoriesQuery = foodServices.useGetCategoriesQuery();

	if (getCategoriesQuery.isFetching) {
		return (
			<Container header={<Header title={t('screen.fridge.title')} />}>
				<View className='flex gap-4'>
					{Array.from({ length: 3 }).map((_, index) => (
						<FoodCardSkeleton
							key={`food-card-skeleton-${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								index
							}`}
						/>
					))}
				</View>
			</Container>
		);
	}

	return (
		<Container header={<Header title={t('screen.fridge.title')} />}>
			<View className='flex gap-4'>
				<FlatList
					data={getCategoriesQuery.data?.tags}
					renderItem={({ item }) => (
						<FoodCard key={item.id} category={item.name} foods={[]} />
					)}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</Container>
	);
};

export default MyFridgeScreen;
