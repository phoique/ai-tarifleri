import { TextInput, View, Text } from 'react-native';
import classNames from 'classnames';

const InputArea = ({
	name,
	placeholder,
	value,
	onChange,
	editable,
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
					'rounded-lg border border-gray-400 px-4 py-2 font-normal text-black h-28',
					{ 'border-red-600': error },
				)}
				onBlur={onBlur(name)}
				placeholder={placeholder}
				value={value || ''}
				onChangeText={handleChange}
				editable={editable}
				onFocus={handleFocus}
				multiline={true}
				numberOfLines={numberOfLines}
				{...props}
			/>
			{error && (
				<Text
					className={classNames('mt-2 ml-2 font-normal text-xs text-red-600', {
						[errorClassName]: errorClassName,
					})}>
					{error}
				</Text>
			)}
		</View>
	);
};

export default InputArea;
