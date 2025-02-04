import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./Tab";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="tab" component={Tab} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;
