import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import classNames from 'classnames';
import React, { useMemo, useCallback } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '../components/icon';
import { tabs } from '../constants/tab';
import MyFridgeScreen from '../screens/fridge/MyFridgeScreen';
import HomeScreen from '../screens/home/HomeScreen';
import RecommendationsScreen from '../screens/recommendations/RecommendationsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const TabButton = React.memo(({ tab, isFocused, onPress }) => (
	<Pressable className='flex-1 items-center justify-center' onPress={onPress}>
		<View
			className={classNames('rounded-xl bg-transparent p-2', {
				'bg-green-50': isFocused,
			})}>
			<Icon
				name={tab.icon}
				size={24}
				className={classNames('text-gray-400', { 'text-green-600': isFocused })}
			/>
		</View>
		<Text
			className={classNames('mt-0.5 text-gray-500 text-xs', {
				'font-bold text-green-600': isFocused,
			})}>
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
				type: 'tabPress',
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
			className='flex-row border-gray-100 border-t bg-white'
			style={containerStyle}>
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
			tabBar={(props) => <CustomTabBar {...props} />}>
			<BottomTab.Screen name='home' component={HomeScreen} />
			<BottomTab.Screen
				name='recommendations'
				component={RecommendationsScreen}
			/>
			<BottomTab.Screen name='fridge' component={MyFridgeScreen} />
			<BottomTab.Screen name='settings' component={SettingsScreen} />
		</BottomTab.Navigator>
	);
};

export default Tab;
