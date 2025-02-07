import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './navigation/Main';
import StoreProvider from './store/Store';
import './translations';
import '../global.css';

const App = () => {
	return (
		<GestureHandlerRootView className='flex-1'>
			<SafeAreaProvider>
				<StoreProvider>
					<MainNavigation />
				</StoreProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};

export default App;
