import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from './icon';
import Input from './form/Input';
import Button from './form/Button';

const Search = ({ search, onChange, onClear }) => {
	const { t } = useTranslation();
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
				onChange={onChange}
				className='px-8'
			/>
			{search && (
				<Button className='absolute top-3 right-2 px-0 py-0' onPress={onClear}>
					<Icon name='Close' className='text-black dark:text-white' />
				</Button>
			)}
		</View>
	);
};

export default Search;
