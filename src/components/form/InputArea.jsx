import classNames from 'classnames';
import { Text, TextInput, View } from 'react-native';

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
					'h-28 rounded-lg border border-gray-400 px-4 py-2 font-normal text-black',
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
					className={classNames('mt-2 ml-2 font-normal text-red-600 text-xs', {
						[errorClassName]: errorClassName,
					})}>
					{error}
				</Text>
			)}
		</View>
	);
};

export default InputArea;
