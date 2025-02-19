import classNames from 'classnames';
import { Text, TextInput, View } from 'react-native';

const Input = ({
	name,
	placeholder,
	value,
	onChange,
	keyboardType,
	editable,
	secureTextEntry,
	onBlur,
	multiline,
	numberOfLines,
	error,
	errorClassName,
	...props
}) => {
	const handleChange = (text) => {
		if (onChange) {
			onChange(name, text);
		}
	};

	const handleFocus = () => {
		if (props.onFocus) {
			props.onFocus(name);
		}
	};

	const handleOnBlur = () => {
		if (onBlur) {
			onBlur(name);
		}
	};

	if (!name) {
		return null;
	}

	return (
		<View>
			<TextInput
				className={classNames(
					'h-12 rounded-xl border bg-gray-50 px-4 font-normal',
					'border-gray-200 text-gray-900',
					'dark:border-gray-700 dark:bg-gray-800 dark:text-white',
					'focus:border-blue-500 dark:focus:border-blue-400',
					{
						'border-red-500 dark:border-red-500': error,
						'bg-gray-100 dark:bg-gray-900': !editable,
						[props.className]: props.className,
					},
				)}
				placeholderTextColor={props.theme === 'dark' ? '#9ca3af' : '#6b7280'}
				onBlur={handleOnBlur}
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				value={value || ''}
				onChangeText={handleChange}
				keyboardType={keyboardType}
				editable={editable}
				onFocus={handleFocus}
				multiline={multiline}
				numberOfLines={numberOfLines}
			/>
			{error && (
				<Text className='mt-1.5 ml-1 font-normal text-red-500 text-xs'>
					{error}
				</Text>
			)}
		</View>
	);
};

export default Input;
