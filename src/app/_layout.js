import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import StoreProvider from '../store/Store';
import '../translations';
import '../../global.css';

const RootLayout = () => {
	return (
		<GestureHandlerRootView className='flex-1'>
			<SafeAreaProvider>
				<StoreProvider>
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
					</Stack>
				</StoreProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};

export default RootLayout;
