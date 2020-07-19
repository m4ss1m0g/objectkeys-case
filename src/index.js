"use strict";

/**
 * Set all first char object keys to lower case
 *
 * @param {object} obj
 * @returns A new object
 */
function lowCaseKeys(obj) {
	return changeObjectKeys(obj, false);
}

/**
 * Set all first char object keys to uppper case
 *
 * @param {object} obj
 * @returns A new object
 */
function upCaseKeys(obj) {
	return changeObjectKeys(obj, true);
}

/**
 * Change the first char of all object keys to the selected case type
 *
 * @param {object} obj The object
 * @param {boolean} caseType If true to upper case, otherwise to lower case
 * @returns A new object
 */
function changeObjectKeys(obj, caseType) {
	var result = {};
	for (const prop in obj) {
		let val;
		// return the null as is
		if (obj[prop] === null) {
			val = obj[prop];
		} else {
			// Calculate the property value
			val =
				typeof obj[prop] === "object"
					? changeObjectKeys(obj[prop], caseType)
					: obj[prop];
		}

		result[changePropertyFirstCharCase(prop, caseType)] = val;
	}
	return result;
}

/**
 * Change case of the first charter of the object property,
 * according to the paramter. If toUp is true change to upper case, otherwise
 * to lowercase
 *
 * @param {string} property
 * @param {boolean} toUp
 * @returns
 */
function changePropertyFirstCharCase(property, toUp) {
	if (toUp === true) {
		return property.charAt(0).toUpperCase() + property.slice(1);
	} else {
		return property.charAt(0).toLowerCase() + property.slice(1);
	}
}

module.exports = {
	lowCaseKeys,
	upCaseKeys,
};
