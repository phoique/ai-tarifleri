import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodDetailScreen from '../screens/foodDetail/FoodDetailScreen';
import Tab from './Tab';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name='tab' component={Tab} />
				<Stack.Screen name='foodDetail' component={FoodDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;
