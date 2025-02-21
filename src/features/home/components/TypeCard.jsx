import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import Button from '../../../components/form/Button';

const TypeCard = ({ title, types, value, onChange, error }) => {
	const { t } = useTranslation();

	return (
		<View className='flex'>
			<View className='flex flex-row items-center'>
				<Text
					className={classNames(
						'mb-3 font-medium text-black text-lg dark:text-white',
						{ '!text-red-500': error },
					)}>
					{title}
				</Text>
				{value && (
					<Button
						icon='Close'
						className='-top-[5px] ms-3 px-0 py-0'
						onPress={() => onChange('')}
					/>
				)}
			</View>
			<View className='flex-row flex-wrap gap-3'>
				{types.map((type) => (
					<Button
						key={type}
						onPress={() => onChange(type)}
						className={classNames(
							'rounded-full border border-green-500 px-4 py-2',
							{
								'bg-green-50 dark:bg-green-100': value !== type,
								'bg-green-200 dark:bg-green-400': value === type,
							},
						)}>
						<Text className='text-green-800 text-sm dark:text-green-900'>
							{t(`screen.home.type.${type}`)}
						</Text>
					</Button>
				))}
			</View>
		</View>
	);
};

export default React.memo(TypeCard);
