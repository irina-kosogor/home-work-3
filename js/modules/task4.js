import { checkIfArray, checkAllItemsTypes } from "./utils";

// Task 4
// Native JS

// With reduce
export function getAverageReduce(arr) {
	if (!checkIfArray(arr) || !checkAllItemsTypes(arr, "number")) {
		console.error(`Not all the values have a valid type`);
		return;
	}

	return arr.reduce((acc, curr, idx, arr) => {
		if (idx === arr.length - 1) {
			return acc;
		}
		acc.push((curr + arr[idx + 1]) / 2);
		return acc;
	}, []);
}

// With forEach
export function getAverageForEach(arr) {
	if (!checkIfArray(arr) || !checkAllItemsTypes(arr, "number")) {
		console.error(`Not all the values have a valid type`);
		return;
	}

	const resultArr = [];

	arr.forEach((item, i, arr) => {
		if (i === arr.length - 1) {
			return;
		}
		resultArr.push((item + arr[i + 1]) / 2);
	});

	return resultArr;
}

// Task 4
// Lodash
export function getAverageLodash(arr) {
	if (!_.isArray(arr) || !checkAllItemsTypes(arr, "number")) {
		console.error(`Not all the values have a valid type`);
		return;
	}

	const resultArr = [];
	_.forEach(arr, function (item, i, arr) {
		if (i === arr.length - 1) {
			return;
		}
		resultArr.push((item + arr[i + 1]) / 2);
	});
	return resultArr;
}
