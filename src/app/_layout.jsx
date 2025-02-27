import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
// biome-ignore lint/style/noNamespaceImport: <explanation>
import * as SplashScreen from 'expo-splash-screen';
import { ErrorBoundary } from 'react-error-boundary';
import StoreProvider from '../store/Store';
import ErrorScreen from './error';
import '../translations';
import '../../global.css';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 1000, fade: true });

const RootLayout = () => {
	const onLayoutRootView = React.useCallback(() => {
		SplashScreen.hide();
	}, []);

	return (
		<ErrorBoundary FallbackComponent={ErrorScreen}>
			<GestureHandlerRootView className='flex-1' onLayout={onLayoutRootView}>
				<SafeAreaProvider>
					<StoreProvider>
						<Stack screenOptions={{ headerShown: false }}>
							<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
						</Stack>
					</StoreProvider>
				</SafeAreaProvider>
			</GestureHandlerRootView>
		</ErrorBoundary>
	);
};

export default RootLayout;
