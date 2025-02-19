import classNames from 'classnames';
import { Text, TextInput, View } from 'react-native';

const InputArea = ({
	name,
	placeholder,
	value,
	onChange,
	editable = true,
	onBlur,
	numberOfLines = 4,
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

	if (!name) {
		return null;
	}

	return (
		<View>
			<TextInput
				className={classNames(
					'min-h-28 rounded-xl border bg-gray-50 p-4 font-normal',
					'border-gray-200 text-gray-900',
					'dark:border-gray-700 dark:bg-gray-800 dark:text-white',
					'focus:border-blue-500 dark:focus:border-blue-400',
					{
						'border-red-500 dark:border-red-500': error,
						'bg-gray-100 dark:bg-gray-900': !editable,
					},
				)}
				onBlur={onBlur(name)}
				placeholder={placeholder}
				value={value || ''}
				onChangeText={handleChange}
				editable={editable}
				onFocus={handleFocus}
				multiline={true}
				numberOfLines={numberOfLines}
				placeholderTextColor={props.theme === 'dark' ? '#9ca3af' : '#6b7280'}
				{...props}
			/>
			{error && (
				<Text className='mt-1.5 ml-1 font-normal text-red-500 text-xs'>
					{error}
				</Text>
			)}
		</View>
	);
};

export default InputArea;
