import classNames from 'classnames';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ edges, children, isScrollable, className, header }) => {
	const edge = edges || ['top'];
	if (isScrollable) {
		return (
			<SafeAreaView
				edges={edge}
				className={classNames('flex-1 bg-white px-4', [className])}>
				{header}
				<ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView
			edges={edge}
			className={classNames('flex-1 bg-white px-4', [className])}>
			{header}
			{children}
		</SafeAreaView>
	);
};

export default Container;
