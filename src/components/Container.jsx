import classNames from 'classnames';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ edges, children, isScrollable, className, header }) => {
	const edge = edges || ['top'];
	if (isScrollable) {
		return (
			<SafeAreaView
				edges={edge}
				className={classNames('flex-1 bg-white px-4 dark:bg-gray-900', [
					className,
				])}>
				{header}
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					className='flex-1'>
					<ScrollView showsVerticalScrollIndicator={false}>
						{children}
					</ScrollView>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView
			edges={edge}
			className={classNames('flex-1 bg-white px-4 dark:bg-gray-900 ', [
				className,
			])}>
			{header}
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				className='flex-1'>
				{children}
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default Container;
