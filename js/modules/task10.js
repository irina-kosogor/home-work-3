import { checkItemType } from "./utils";

// Task 10
// Native JS

export function getFileName(url) {
	if (!checkItemType(url, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	let fileName = url.split("\\");
	return fileName[fileName.length - 1].split(".")[0];
}
