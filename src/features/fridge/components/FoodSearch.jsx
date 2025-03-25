import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/icon';
import Input from '../../../components/form/Input';
import Button from '../../../components/form/Button';
import { fridgeCategories } from '../../../constants/food';
import { searchInData } from '../../../utils/data';

const FoodSearch = ({ setCategories }) => {
	const { t } = useTranslation();
	const [search, setSearch] = React.useState('');

	const handleSearch = React.useCallback(
		(_name, text) => {
			setSearch(text);

			if (!text || text.length < 2) {
				setCategories(fridgeCategories);
				return;
			}

			const filteredCategories = fridgeCategories
				.map((category) => {
					// Her ürünü i18n çevirisiyle birlikte yeni obje olarak hazırla
					const productsWithTranslation = category.products.map((product) => ({
						...product,
						title: t(`fridge.items.${product.name}`),
					}));

					// searchInData kullanarak arama yap
					const filteredProducts = searchInData(productsWithTranslation, text, [
						'title',
					]);

					if (filteredProducts.length > 0) {
						return {
							...category,
							products: filteredProducts.map((item) => ({
								id: item.id,
								name: item.name,
								image: item.image,
							})),
						};
					}
					return null;
				})
				.filter(Boolean);

			setCategories(filteredCategories);
		},
		[t, setCategories],
	);

	const handleClear = React.useCallback(() => {
		setSearch('');
		setCategories(fridgeCategories);
	}, [setCategories]);

	return (
		<View className='relative mb-4'>
			<Icon
				name='Search'
				className='absolute top-3 left-2 z-10 text-black dark:text-white'
			/>
			<Input
				name='search'
				placeholder={t('form.search')}
				value={search}
				onChange={handleSearch}
				className='px-8'
			/>
			{search && (
				<Button
					className='absolute top-3 right-2 px-0 py-0'
					onPress={handleClear}>
					<Icon name='Close' className='text-black dark:text-white' />
				</Button>
			)}
		</View>
	);
};

export default FoodSearch;
