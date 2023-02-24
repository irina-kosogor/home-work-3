import {checkItemType} from './utils';

// Task 9
// Native JS

export function checkIfBrickFits(a, b, c, w, h) {
	if (
		!checkItemType(a, "number") 
		|| !checkItemType(b, "number") 
		|| !checkItemType(c, "number")
        || !checkItemType(w, "number")
        || !checkItemType(h, "number")
	) {
		console.error(`Not all the values have a valid type`);
		return;
	}

	return a <= w && c <= h ? true : false;
}

