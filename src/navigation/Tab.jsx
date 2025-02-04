import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import RecommendationsScreen from "../screens/recommendations/RecommendationsScreen";
import MyFridgeScreen from "../screens/fridge/MyFridgeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import Icon from "../components/icon";

const BottomTab = createBottomTabNavigator();

const TabItem = React.memo(({ isFocused, icon }) => (
	<TouchableOpacity>
		<Icon name={icon} size={24} className="text-white" />
	</TouchableOpacity>
));

const Tab = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
			}}
		>
			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabItem isFocused={focused} icon="Home" />
					),
				}}
			/>
			<BottomTab.Screen
				name="recommendations"
				component={RecommendationsScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabItem isFocused={focused} icon="Food" />
					),
				}}
			/>
			<BottomTab.Screen
				name="fridge"
				component={MyFridgeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabItem isFocused={focused} icon="Fridge" />
					),
				}}
			/>
			<BottomTab.Screen
				name="settings"
				component={SettingsScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<TabItem isFocused={focused} icon="Settings" />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default Tab;
