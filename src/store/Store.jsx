import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';
import openAiApi from '../services/openAiServices';

export const store = configureStore({
	reducer: {
		[openAiApi.reducerPath]: openAiApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			openAiApi.middleware,
		),
	devTools: process.env.REACT_APP_ENV !== 'production',
});

const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

setupListeners(store.dispatch);

export default StoreProvider;
