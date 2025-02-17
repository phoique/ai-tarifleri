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
					'rounded-lg border border-gray-400 px-4 py-2 font-normal text-black',
					{ 'border-red-600': error, [props.className]: props.className },
				)}
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
				<Text
					className={classNames('mt-2 ml-2 font-normal text-red-600 text-xs', {
						[errorClassName]: errorClassName,
					})}>
					{error}
				</Text>
			)}
		</View>
	);
};

export default Input;
