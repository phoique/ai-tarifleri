import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { providesTags } from '../utils/tag';

const foodServices = createApi({
	reducerPath: 'foodServices',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://world.openfoodfacts.org' }),
	tagTypes: ['getCategories', 'getCategoryFoods'],
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: () => '/categories.json?lc=tr',
			providesTags: (result) => providesTags(result, 'getCategories', 'id'),
		}),

		getCategoryFoods: builder.query({
			query: (category) => `/category/${category}.json?lc=tr`,
			transformResponse: (response) => response.products || [],
			providesTags: (result) =>
				providesTags(result, 'getCategoryFoods', 'code'),
		}),
	}),
});

export default foodServices;
