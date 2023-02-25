import { checkItemType } from "./utils";

// Task 5
// Native JS

// With ReqExp
export function countVowelsReqExp(str) {
	if (!checkItemType(str, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const matches = str.toLowerCase().match(/[aeiouy]/gi);
	return matches ? matches.length : 0;
}

// With forEach
export function countVowels(str) {
	if (!checkItemType(str, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const vowels = ["a", "e", "i", "o", "u", "y"];
	let count = 0;
	str.toLowerCase()
		.split("")
		.forEach((item) => (vowels.indexOf(item) !== -1 ? (count += 1) : 0));
	return count;
}
