import { TouchableOpacity, ActivityIndicator } from 'react-native';
import classNames from 'classnames';
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
				'opacity-50': isDisable,
			})}>
			{isLoading && <ActivityIndicator className='mr-2' />}
			{icon && !isLoading && (
				<Icon
					name={icon}
					size={20}
					className={classNames('text-black mr-2', {
						'text-gray-400': isLoading || isDisable,
					})}
				/>
			)}
			{children}
		</TouchableOpacity>
	);
};

export default Button;
