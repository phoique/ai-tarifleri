import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Container from '../../components/Container';
import Header from '../../components/Header';
import FoodCard from './components/FoodCard';

const MyFridgeScreen = () => {
	const { t } = useTranslation();
	return (
		<Container
			isScrollable={true}
			header={<Header title={t('screen.fridge.title')} />}>
			<View className='flex gap-4'>
				<FoodCard
					category='Fruits'
					foods={[
						{
							name: 'Banana',
							isFoodAvailable: true,
							image:
								'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
						},
						{
							name: 'Apple',
							isFoodAvailable: true,
							image:
								'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
						},
						{
							name: 'Orange',
							isFoodAvailable: false,
							image:
								'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
						},
					]}
				/>
			</View>
		</Container>
	);
};

export default MyFridgeScreen;
