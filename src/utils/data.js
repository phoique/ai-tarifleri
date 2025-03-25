/**
 * @description Verilen veri içerisindeki boş olan verileri temizler.
 * @param {string} text
 * @returns {string}
 */
export const toLocaleNormalizeString = (text) => {
	if (!text) {
		return text;
	}
	return (
		text
			.toString()
			.toLowerCase()
			.normalize('NFD')
			// biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
			.replace(/[\u0300-\u036f]/g, '')
	);
};

/**
 * @description Arama yapılacak veri içerisinde arama yapar.
 * @param {Array} data
 * @param {any} search
 * @param {array} key
 * @returns {Array}
 */
export const searchInData = (data, search, keys) => {
	if (data?.length === 0 || keys?.length === 0) {
		return data;
	}
	const response = [];

	for (const dataItem of data) {
		for (const key of keys) {
			const itemValue = dataItem[key];
			if (
				typeof itemValue === 'string' &&
				toLocaleNormalizeString(itemValue).includes(
					toLocaleNormalizeString(search),
				)
			) {
				response.push(dataItem);
				break;
			}
			if (
				(typeof itemValue === 'number' || typeof itemValue === 'boolean') &&
				itemValue === search
			) {
				response.push(dataItem);
				break;
			}
		}
	}

	return response;
};
