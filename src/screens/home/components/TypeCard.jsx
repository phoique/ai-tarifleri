import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/form/Button';
import classNames from 'classnames';

const TypeCard = ({ title, types, value, onChange }) => {
	const { t } = useTranslation();

	return (
		<View className='flex'>
			<View className='flex flex-row items-center'>
				<Text className='text-lg font-medium mb-3'>{title}</Text>
				{value && (
					<Button
						icon='Close'
						className='px-0 py-0 ms-3 -top-1'
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
							'bg-green-50 px-4 py-2 rounded-full border border-green-500',
							{ 'bg-green-200': value === type },
						)}>
						<Text className='text-green-800 text-sm'>
							{t(`screen.home.type.${type}`)}
						</Text>
					</Button>
				))}
			</View>
		</View>
	);
};

export default React.memo(TypeCard);
