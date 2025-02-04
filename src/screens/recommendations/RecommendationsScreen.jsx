import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RecommendationsScreen = () => {
	return (
		<SafeAreaView edges={["top", "bottom"]}>
			<View>
				<Text>Recommendations</Text>
			</View>
		</SafeAreaView>
	);
};

export default RecommendationsScreen;
