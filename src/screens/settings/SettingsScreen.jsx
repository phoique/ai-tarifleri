import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
	return (
		<SafeAreaView edges={['top', 'bottom']}>
			<View>
				<Text>SettingsScreen</Text>
			</View>
		</SafeAreaView>
	);
};

export default SettingsScreen;
