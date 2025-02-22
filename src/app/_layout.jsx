import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { ErrorBoundary } from 'react-error-boundary';
import StoreProvider from '../store/Store';
import ErrorScreen from './error';
import '../translations';
import '../../global.css';

const RootLayout = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorScreen}>
			<GestureHandlerRootView className='flex-1'>
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
