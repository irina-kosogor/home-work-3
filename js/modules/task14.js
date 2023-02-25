import { checkItemType } from "./utils";
// Task 14
// Native JS

const textBlock = document.querySelector(".text-for-task14");

function checkForBrackets(str) {
	if (!checkItemType(str, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	let stack = [];

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (char == "(") {
			stack.push(char);
		}

		if (char === ")") {
			if (stack.length > 0) {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	return stack.length == 0;
}

export function showTextOnPage(str) {
	if (!checkItemType(str, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	if (checkForBrackets(str)) {
		textBlock.textContent = str;
	} else {
		textBlock.textContent = "Error! Brackets are unbalanced.";
		textBlock.style.color = "#fd0000";
		textBlock.style.textAlign = "center";
	}
}

textBlock.addEventListener("copy", (e) => {
	alert("Copying is forbidden");
	e.preventDefault();
});

textBlock.addEventListener("contextmenu", (e) => {
	e.preventDefault();
});
