import { checkItemType } from "./utils";

// Task 3
// Native JS

export function checkForEnding(str, ending) {
	if (!checkItemType(str, "string") || !checkItemType(ending, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	return str.slice(-ending.length) === ending;
}

// Task 3
// Lodash

export function checkForEndingLodash(str, ending) {
	if (!_.isString(str) || !_.isString(ending)) {
		console.error("Not all the values have a valid type");
		return;
	}

	return _.endsWith(str, ending);
}
