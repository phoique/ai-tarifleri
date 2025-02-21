import { Pressable, Text, View } from 'react-native';
import classNames from 'classnames';
import Icon from '../../../components/icon';

export default function TabButton({ tab, isFocused, onPress }) {
	return (
		<Pressable className='flex-1 items-center justify-center' onPress={onPress}>
			<View
				className={classNames('rounded-xl bg-transparent p-2', {
					'bg-green-50 dark:bg-green-950': isFocused,
				})}>
				<Icon
					name={tab.icon}
					size={24}
					className={classNames('text-gray-400 dark:text-gray-500', {
						'text-green-600 dark:text-green-400': isFocused,
					})}
				/>
			</View>
			<Text
				className={classNames(
					'mt-0.5 text-gray-500 text-xs dark:text-gray-400',
					{ 'font-bold text-green-600 dark:text-green-400': isFocused },
				)}>
				{tab.label}
			</Text>
		</Pressable>
	);
}
