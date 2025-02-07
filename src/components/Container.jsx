import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import classNames from 'classnames';

const Container = ({ edges, children, isScrollable, className, header }) => {
	if (isScrollable) {
		return (
			<SafeAreaView
				edges={edges}
				className={classNames('flex-1 bg-white px-4', [className])}>
				{header}
				<ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView
			edges={edges}
			className={classNames('flex-1 bg-white px-4', [className])}>
			{header}
			{children}
		</SafeAreaView>
	);
};

export default Container;
