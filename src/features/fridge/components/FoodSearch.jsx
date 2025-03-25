import React from 'react';
import { useTranslation } from 'react-i18next';
import { fridgeCategories } from '../../../constants/food';
import { searchInData } from '../../../utils/data';
import Search from '../../../components/Search';

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
		<Search search={search} onChange={handleSearch} onClear={handleClear} />
	);
};

export default React.memo(FoodSearch);
