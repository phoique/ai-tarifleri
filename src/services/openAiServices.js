import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const openAiApi = createApi({
	reducerPath: 'openAiApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.openai.com/v1/',
		prepareHeaders: (headers) => {
			headers.set(
				'Authorization',
				`Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`,
			);
			headers.set('Content-Type', 'application/json');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getFoodRecommendation: builder.mutation({
			query: (body) => ({
				url: 'chat/completions',
				method: 'POST',
				body: { model: 'gpt-4o', ...body },
			}),
		}),
	}),
});

export default openAiApi;
