import {checkItemType} from './utils';
// Task 14
// Native JS

export const checkBracketsBalance = () => {
	const textBlock = document.querySelector(".text-for-task14");

	const contentText =
		"Lorem ipsum dolor sit amet (consectetur adipisicing elit). Exercitationem expedita recusandae,  (sapiente quasi?) Ipsa, atque nesciunt. (Cum dicta), placeat soluta adipisci iste assumenda tempore?";

	function checkForBrackets(str) {
		if (!checkItemType(str, "string")) {
			console.error(`Not all the values have a valid type`);
			return;
		}

		const arr = str
			.split("")
			.filter((item) => item === "(" || item === ")");
		let stack = [];

		for (let i = 0; i < arr.length; i += 2) {
			if (arr[i] === "(" && arr[i + 1] === ")") {
				stack.push(true);
			} else {
				stack.push(false);
			}
		}

		return stack.every((item) => item === true);
	}

	function showTextOnPage(str) {
		if (!checkItemType(str, "string")) {
			console.error(`Not all the values have a valid type`);
			return;
		}

		if (checkForBrackets(str)) {
			textBlock.textContent = str;
		} else {
			textBlock.textContent = "Error! Brackets are unbalanced.";
			textBlock.style.color = "red";
		}
	}

	textBlock.addEventListener(
		"copy",
		(e) => {
			alert("Copying is forbiden");
			e.preventDefault();
		},
		false
	);

	showTextOnPage(contentText);
};
