import { useTranslation } from 'react-i18next';
import Button from '../../../components/form/Button';
import Input from '../../../components/form/Input';
import Icon from '../../../components/icon';

const Search = ({ search, setSearch }) => {
	const { t } = useTranslation();

	const handleSearch = (_name, text) => {
		setSearch(text);
	};

	const handleClear = () => {
		setSearch('');
	};

	return (
		<>
			<Icon name='Search' className='absolute top-2 left-2 text-black' />
			<Input
				name='search'
				placeholder={t('form.search')}
				value={search}
				onChange={handleSearch}
				className='px-8'
			/>
			<Button
				className='absolute top-2 right-2 px-0 py-0'
				onPress={handleClear}>
				<Icon name='Close' className='text-black' />
			</Button>
		</>
	);
};

export default Search;
