import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import Container from '../../components/Container';
import Header from '../../components/Header';
import MealTypeCard from './components/TypeCard';
import { dietaryTypes, mealTypes, nutrientTypes } from '../../constants/food';
import Button from '../../components/form/Button';

const HomeScreen = () => {
	const { t } = useTranslation();

	return (
		<Container
			isScrollable={false}
			header={<Header title={t('screen.home.title')} />}>
			<Formik
				initialValues={{
					mealType: null,
					nutrientType: null,
					dietaryType: null,
				}}>
				{(formik) => (
					<View className='flex flex-1'>
						<View className='flex flex-1 gap-4'>
							<MealTypeCard
								title={t('screen.home.mealTitle')}
								types={mealTypes}
								onChange={(value) => formik.setFieldValue('mealType', value)}
								value={formik.values.mealType}
							/>
							<MealTypeCard
								title={t('screen.home.dietaryTitle')}
								types={dietaryTypes}
								onChange={(value) => formik.setFieldValue('dietaryType', value)}
								value={formik.values.dietaryType}
							/>
							<MealTypeCard
								title={t('screen.home.nutrientTitle')}
								types={nutrientTypes}
								onChange={(value) =>
									formik.setFieldValue('nutrientType', value)
								}
								value={formik.values.nutrientType}
							/>
						</View>
						<Button className='bg-blue-500 rounded-2xl'>
							<View className='flex flex-1'>
								<Text className='text-white text-center text-base font-bold'>
									{t('form.button.recommend')}
								</Text>
							</View>
						</Button>
					</View>
				)}
			</Formik>
		</Container>
	);
};

export default HomeScreen;
