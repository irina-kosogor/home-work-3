// Functions for checking data types used in further code

// Checks if item is array
export function checkIfArray(arr) {
	return Array.isArray(arr);
}

//Checks datatypes of the elements in array
export function checkAllItemsTypes(arr, dataType) {
	return arr.every((item) => typeof item === dataType);
}

// Checks if item is object
export function isObject(obj) {
	return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

// Checks if object is empty
export function isEmptyObject(obj) {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}
	return true;
}

//Checks datatypes of primitive values
export function checkItemType(item, dataType) {
	return typeof item === dataType;
}


