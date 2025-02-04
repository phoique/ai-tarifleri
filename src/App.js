import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainNavigation from "./navigation/Main";
import "../global.css";

const App = () => {
	return (
		<GestureHandlerRootView className="flex-1">
			<SafeAreaProvider>
				<MainNavigation />
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};

export default App;
