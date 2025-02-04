import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MyFridgeScreen = () => {
	return (
		<SafeAreaView edges={["top", "bottom"]}>
			<View>
				<Text>MyFridgeScreen</Text>
			</View>
		</SafeAreaView>
	);
};

export default MyFridgeScreen;
