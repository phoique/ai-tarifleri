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
export const searchInData = (data, search, key) => {
	if (data?.length === 0 || key?.length === 0) {
		return data;
	}
	const response = [];

	for (let dataIndex = 0; dataIndex < data.length; dataIndex += 1) {
		const item = data[dataIndex];
		for (let keyIndex = 0; keyIndex < key.length; keyIndex += 1) {
			const itemValue = item[key[keyIndex]];

			if (
				typeof itemValue === 'string' &&
				toLocaleNormalizeString(itemValue).includes(
					toLocaleNormalizeString(search),
				)
			) {
				response.push(item);
				break;
			}
			if (
				(typeof itemValue === 'number' || typeof itemValue === 'boolean') &&
				itemValue === search
			) {
				response.push(item);
				break;
			}
		}
	}

	return response;
};
