import { Tabs } from 'expo-router';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabButton from './components/TabButton';
import { tabs } from '../../constants/tab';

export default function TabLayout() {
	const insets = useSafeAreaInsets();

	const containerStyle = {
		paddingBottom: Math.max(insets.bottom, 4),
		height: Platform.select({ ios: 80, android: 65 }) + insets.bottom,
	};

	return (
		<Tabs
			screenOptions={{ headerShown: false }}
			tabBar={({ navigation, state }) => (
				<View
					className='flex-row border-gray-100 border-t bg-white dark:border-gray-800 dark:bg-gray-900'
					style={containerStyle}>
					{tabs.map((tab, index) => {
						const isFocused = state.index === index;
						return (
							<TabButton
								key={tab.name}
								tab={tab}
								isFocused={isFocused}
								onPress={() => {
									const event = navigation.emit({
										type: 'tabPress',
										target: tab.name,
										canPreventDefault: true,
									});
									if (!isFocused && !event.defaultPrevented) {
										navigation.navigate(tab.name);
									}
								}}
							/>
						);
					})}
				</View>
			)}>
			<Tabs.Screen name='index' />
			<Tabs.Screen name='recommendations' />
			<Tabs.Screen name='fridge' />
			<Tabs.Screen name='settings' />
		</Tabs>
	);
}
