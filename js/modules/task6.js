import { checkIfArray } from "./utils";

// Task 6
// Native JS

export function findUnique(arr1, arr2) {
	if (!checkIfArray(arr1) || !checkIfArray(arr2)) {
		console.error("Not all the values have a valid type");
		return;
	}

	return Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
}

// Task 6
// Lodash

export function findUniqueLodash(arr1, arr2) {
	if (!_.isArray(arr1) && !_.isArray(arr2)) {
		console.error("Not all the values have a valid type");
		return;
	}

	return _.sortedUniq(_.sortBy([...arr1, ...arr2]));
}
