import classNames from 'classnames';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from '../icon';

const Button = ({
	onPress,
	icon,
	isDisable,
	isLoading,
	children,
	className,
}) => {
	return (
		<TouchableOpacity
			disabled={!!(isDisable || isLoading)}
			onPress={onPress}
			className={classNames('flex flex-row items-center rounded-xl p-3', {
				[className]: className,
				'opacity-50': isDisable === true || isLoading === true,
			})}>
			{isLoading && <ActivityIndicator className='mr-2 text-white' />}
			{icon && !isLoading && (
				<Icon
					name={icon}
					size={20}
					className={classNames('mr-2 text-black dark:text-white', {
						'text-gray-400': isLoading || isDisable,
					})}
				/>
			)}
			{children}
		</TouchableOpacity>
	);
};

export default Button;
