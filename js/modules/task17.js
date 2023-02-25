import { checkIfArray, checkAllItemsTypes } from "./utils";

// Task 17
// Native JS

export function changeElelementsOrder(arr) {
	if (!checkIfArray(arr) || !checkAllItemsTypes(arr, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const sortedArr = arr.sort((a, b) => a - b);
	const oddIndex = [];
	const evenIndex = [];

	sortedArr.forEach((item, i) => {
		i % 2 ? evenIndex.push(item) : oddIndex.push(item);
	});

	return oddIndex.concat(evenIndex.reverse());
}

// Task 17
// Lodash

export function changeElelementsOrderLodash(arr) {
	if (!_.isArray(arr) || !checkAllItemsTypes(arr, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const sortedArr = _.sortBy(arr);
	const oddIndex = [];
	const evenIndex = [];

	_.forEach(sortedArr, function (item, i) {
		i % 2 ? evenIndex.push(item) : oddIndex.push(item);
	});

	return _.concat(oddIndex, _.reverse(evenIndex));
}
