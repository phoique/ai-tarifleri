import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import InputLabel from '../../components/form/InputLabel';
import InputArea from '../../components/form/InputArea';
import { foodCreateSchema } from '../../validations/food';
import TypeGroup from './components/TypeGroup';
import useFoodRecommendation from '../../hooks/useFoodRecommendation';
import { setFoodRecommendation } from '../../services/storage';

const HomeScreen = () => {
	const { t } = useTranslation();
	const navigation = useNavigation();
	const foodRecommendation = useFoodRecommendation();

	return (
		<Container
			isScrollable={true}
			header={<Header title={t('screen.home.title')} />}>
			<Formik
				initialValues={{
					mealType: '',
					nutrientType: '',
					dietaryType: '',
					allergy: '',
					other: '',
				}}
				validationSchema={foodCreateSchema}
				onSubmit={async (values) => {
					const response =
						await foodRecommendation.createFoodRecommendation(values);

					setFoodRecommendation(response.id, {
						...JSON.parse(response.choices?.[0]?.message?.content),
						id: response.id,
					});
					navigation.navigate('foodDetail', { id: response.id });
				}}>
				{(formik) => (
					<View className='flex flex-1'>
						<View className='flex flex-1 gap-4'>
							<TypeGroup />
							<InputLabel title={t('form.allergy')}>
								<Input
									name='allergy'
									placeholder={t('form.allergy')}
									value={formik.values.allergy}
									onChange={formik.setFieldValue}
									onBlur={formik.handleBlur}
									onFocus={formik.setFieldTouched}
									error={formik.errors.allergy}
								/>
							</InputLabel>
							<InputLabel title={t('form.otherInfo')}>
								<InputArea
									name='other'
									placeholder={t('form.otherInfo')}
									value={formik.values.other}
									onChange={formik.setFieldValue}
									onBlur={formik.handleBlur}
									onFocus={formik.setFieldTouched}
									error={formik.errors.other}
								/>
							</InputLabel>
						</View>
						<Button
							className='bg-blue-500 rounded-2xl mt-4'
							isDisable={!formik.isValid && !!formik.submitCount}
							onPress={formik.handleSubmit}
							isLoading={foodRecommendation.isLoading}>
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
