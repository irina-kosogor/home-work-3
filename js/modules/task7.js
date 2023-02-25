import { isObject, isEmptyObject } from "./utils";

// Task 7
// Native JS

export function changeKeysWithValues(obj) {
	if (!isObject(obj)) {
		console.error("It's not an object");
		return;
	}

	if (isEmptyObject(obj)) {
		console.error("Object does not contain any elements");
		return;
	}

	const changedObj = {};

	for (let key in obj) {
		changedObj[obj[key]] = key;
	}

	return changedObj;
}
