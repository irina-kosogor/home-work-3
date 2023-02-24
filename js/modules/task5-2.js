import {checkItemType} from './utils';

// Task 5.2
// Native JS

export function removeABC(str) {
    if (!checkItemType(str, "string")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

	const pattern = new RegExp(/[abcABC]/gi);

	if (!str.match(pattern)) {
		return null;
	}

	return str.replace(pattern, "");
}

