import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import classNames from 'classnames';

const Container = ({ edges, children, isScrollable, className }) => {
	if (isScrollable) {
		return (
			<SafeAreaView
				edges={edges}
				className={classNames('flex-1 bg-white px-4', [className])}>
				<ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView
			edges={edges}
			className={classNames('flex-1 bg-white px-4', [className])}>
			{children}
		</SafeAreaView>
	);
};

export default Container;
