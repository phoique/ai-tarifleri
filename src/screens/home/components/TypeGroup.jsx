import { useTranslation } from 'react-i18next';
import { useFormikContext } from 'formik';
import TypeCard from './TypeCard';
import {
	mealTypes,
	dietaryTypes,
	nutrientTypes,
} from '../../../constants/food';

const TypeGroup = () => {
	const { t } = useTranslation();
	const { setFieldValue, values, errors } = useFormikContext();

	return (
		<>
			<TypeCard
				title={t('screen.home.mealTitle')}
				types={mealTypes}
				onChange={(value) => setFieldValue('mealType', value)}
				value={values.mealType}
				error={errors.mealType}
			/>
			<TypeCard
				title={t('screen.home.dietaryTitle')}
				types={dietaryTypes}
				onChange={(value) => setFieldValue('dietaryType', value)}
				value={values.dietaryType}
				error={errors.dietaryType}
			/>
			<TypeCard
				title={t('screen.home.nutrientTitle')}
				types={nutrientTypes}
				onChange={(value) => setFieldValue('nutrientType', value)}
				value={values.nutrientType}
				error={errors.nutrientType}
			/>
		</>
	);
};

export default TypeGroup;
