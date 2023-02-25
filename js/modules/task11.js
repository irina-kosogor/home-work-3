import { checkItemType } from "./utils";

// Task 11
// Native JS

export function checkStrings(str1, str2) {
	if (!checkItemType(str1, "string") || !checkItemType(str2, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}
	return str1.length === str2.length && (str2 + str2).includes(str1);
}

// Task 11
// Lodash

export function checkStringsLodash(str1, str2) {
	if (!_.isString(str1) || !_.isString(str2)) {
		console.error("Not all the values have a valid type");
		return;
	}

	if (_.size(str1) !== _.size(str2)) {
		return false;
	}

	return _.includes(str2 + str2, str1);
}
