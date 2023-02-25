import { isObject, isEmptyObject, checkItemType } from "./utils";
// Task 8
// Native JS

export function calculateInsuranceDifference(obj, limit) {
	if (!isObject(obj) || !checkItemType(limit, "number")) {
		console.error("Not all the items have a valid type");
		return;
	}

	if (isEmptyObject(obj)) {
		console.error("Object does not contain any elements");
		return;
	}

	let sum = 0;
	for (let key in obj) {
		sum += obj[key];
	}

	if (sum < limit) {
		console.log("Sum of the elements are lower than an insurance value");
		return;
	}

	return sum - limit;
}
