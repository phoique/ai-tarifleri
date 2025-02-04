import React, { useMemo, useCallback } from "react";
import { Text, View, Platform, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import classNames from "classnames";
import HomeScreen from "../screens/home/HomeScreen";
import RecommendationsScreen from "../screens/recommendations/RecommendationsScreen";
import MyFridgeScreen from "../screens/fridge/MyFridgeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import Icon from "../components/icon";
import { tabs } from "../constants/tab";

const TabButton = React.memo(({ tab, isFocused, onPress }) => (
	<Pressable className="flex-1 items-center justify-center" onPress={onPress}>
		<View
			className={classNames("p-2 rounded-xl", {
				"bg-green-50": isFocused,
				"bg-transparent": !isFocused,
			})}
		>
			<Icon
				name={tab.icon}
				size={24}
				className={classNames({
					"text-green-600": isFocused,
					"text-gray-400": !isFocused,
				})}
			/>
		</View>
		<Text
			className={classNames("text-xs mt-0.5", {
				"text-green-600 font-medium": isFocused,
				"text-gray-500": !isFocused,
			})}
		>
			{tab.label}
		</Text>
	</Pressable>
));

const CustomTabBar = React.memo(({ state, navigation }) => {
	const insets = useSafeAreaInsets();

	const containerStyle = useMemo(
		() => ({
			paddingBottom: Math.max(insets.bottom, 4),
			height: Platform.select({ ios: 80, android: 65 }) + insets.bottom,
		}),
		[insets.bottom],
	);

	const handlePress = useCallback(
		(tab, isFocused) => {
			const event = navigation.emit({
				type: "tabPress",
				target: tab.name,
				canPreventDefault: true,
			});

			if (!isFocused && !event.defaultPrevented) {
				navigation.navigate(tab.name);
			}
		},
		[navigation],
	);

	return (
		<View
			className="flex-row bg-white border-t border-gray-100"
			style={containerStyle}
		>
			{tabs.map((tab, index) => {
				const isFocused = state.index === index;

				return (
					<TabButton
						key={tab.name}
						tab={tab}
						isFocused={isFocused}
						onPress={() => handlePress(tab, isFocused)}
					/>
				);
			})}
		</View>
	);
});

const BottomTab = createBottomTabNavigator();
const Tab = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={(props) => <CustomTabBar {...props} />}
		>
			<BottomTab.Screen name="home" component={HomeScreen} />
			<BottomTab.Screen
				name="recommendations"
				component={RecommendationsScreen}
			/>
			<BottomTab.Screen name="fridge" component={MyFridgeScreen} />
			<BottomTab.Screen name="settings" component={SettingsScreen} />
		</BottomTab.Navigator>
	);
};

export default Tab;
