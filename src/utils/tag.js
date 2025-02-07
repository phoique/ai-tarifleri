/**
 * @description Add tags to the query response
 * @param {Array} result
 * @param {string} type
 * @param {string} idKey
 * @returns {Array}
 */
export const providesTags = (result, type, idKey = 'id') => {
	if (result) {
		if (Array.isArray(result)) {
			if (result.length > 0) {
				return [
					...result.map((item) => ({ type, id: item[idKey] })),
					{ type, id: 'LIST' },
				];
			}
			return [{ type, id: 'LIST' }];
		}
		return [{ type, id: result[idKey] }];
	}
	return [];
};

/**
 * @description Get tags that are invalidated by the query response
 * @param {string} type
 * @param {string} id
 * @returns {Array}
 */
export const invalidatesTags = (type, id) => {
	if (Array.isArray(type)) {
		if (id) {
			return type.map((t) => ({ type: t, id }));
		}
		return type.map((t) => ({ type: t, id: 'LIST' }));
	}
	if (id) {
		return [{ type, id }];
	}
	return [{ type, id: 'LIST' }];
};
