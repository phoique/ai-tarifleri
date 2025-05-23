import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Button from '../../components/form/Button';
import Input from '../../components/form/Input';
import InputArea from '../../components/form/InputArea';
import InputLabel from '../../components/form/InputLabel';
import useFoodRecommendation from '../../hooks/useFoodRecommendation';
import { setFoodRecommendation } from '../../services/storage';
import { foodCreateSchema } from '../../validations/food';
import TypeGroup from '../../features/home/components/TypeGroup';

const HomeScreen = () => {
	const { t } = useTranslation();
	const router = useRouter();
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

					setFoodRecommendation({
						...JSON.parse(response.choices?.[0]?.message?.content),
						id: response.id,
					});
					router.navigate(`/foodDetail/${response.id}`);
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
							className='mt-4 rounded-2xl bg-blue-500'
							isDisable={!formik.isValid && !!formik.submitCount}
							onPress={formik.handleSubmit}
							isLoading={foodRecommendation.isLoading}>
							<View className='flex flex-1 py-1'>
								<Text className='text-center font-bold text-base text-white'>
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
