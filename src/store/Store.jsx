import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import foodServices from '../services/foodServices';
import openAiApi from '../services/openAiServices';

export const store = configureStore({
	reducer: {
		[foodServices.reducerPath]: foodServices.reducer,
		[openAiApi.reducerPath]: openAiApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(foodServices.middleware, openAiApi.middleware),
	devTools: process.env.REACT_APP_ENV !== 'production',
});

const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

setupListeners(store.dispatch);

export default StoreProvider;
