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
	const [debouncedSearch, setDebouncedSearch] = React.useState('');

	// Translate products once and memoize
	const translatedCategories = React.useMemo(
		() =>
			fridgeCategories.map((category) => ({
				...category,
				products: category.products.map((product) => ({
					...product,
					title: t(`fridge.items.${product.name}`),
				})),
			})),
		[t],
	);

	// Debounce search
	React.useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearch(search);
		}, 200);

		return () => clearTimeout(timer);
	}, [search]);

	// Memoize search results
	const filteredCategories = React.useMemo(() => {
		if (!debouncedSearch || debouncedSearch.length < 2) {
			return fridgeCategories;
		}

		return translatedCategories
			.map((category) => {
				const filteredProducts = searchInData(
					category.products,
					debouncedSearch,
					['title'],
				);

				if (filteredProducts.length > 0) {
					return {
						...category,
						products: filteredProducts.map(({ id, name, image }) => ({
							id,
							name,
							image,
						})),
					};
				}
				return null;
			})
			.filter(Boolean);
	}, [debouncedSearch, translatedCategories]);

	React.useEffect(() => {
		setCategories(filteredCategories);
	}, [filteredCategories, setCategories]);

	const handleSearch = React.useCallback((_name, text) => {
		setSearch(text);
	}, []);

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

export default React.memo(FoodSearch);
