import {checkIfArray, checkAllItemsTypes} from "./utils";
// Task #1
// Native JS

export function getDifference(arr) {
	if (arr.length <= 1) {
		return 0;
	}

	if (!checkIfArray(arr) || !checkAllItemsTypes(arr, "number")) {
		console.error(`Not all the values have a valid type`);
		return;
	}

	return Math.max(...arr) - Math.min(...arr);
}

// Task #1
//Lodash

export function getDifferenceLodash(arr) {
	if (arr.length <= 1) {
		return 0;
	}

	if (!_.isArray(arr) || !checkAllItemsTypes(arr, "number")) {
		console.error(`Not all the values have a valid type`);
		return;
	}

	return _.max(arr) - _.min(arr);
}


