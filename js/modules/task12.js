import { checkIfArray, checkAllItemsTypes } from "./utils";

// Task 12
// Native JS

export function composeArrays(a) {
	if (!checkIfArray(a) || !checkAllItemsTypes(a, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const sortedArr = a.sort((a, b) => a - b);
	const b = [];
	const c = [];

	for (let i = 0; i < sortedArr.length; i += 2) {
		b.push(sortedArr[i]);
		c.push(sortedArr[i + 1]);
	}

	return `Array b: [${b}], array c: [${c}]`;
}

// Task 12
// Lodash

export function composeArraysLodash(a) {
	if (!_.isArray(a) || !checkAllItemsTypes(a, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const b = [];
	const c = [];

	const sortedArr = _.sortBy(a);

	for (let i = 0; i < _.size(sortedArr); i += 2) {
		b.push(sortedArr[i]);
		c.push(sortedArr[i + 1]);
	}

	return `Array b: [${b}]; array c: [${c}]`;
}
