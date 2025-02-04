import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
	return (
		<SafeAreaView edges={["top", "bottom"]}>
			<View>
				<Text>HomeScreen</Text>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
