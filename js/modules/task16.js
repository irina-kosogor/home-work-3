// Task 16
// Native JS

export const createPassword = () => {
	const resultField = document.querySelector("#result-field");
	const passLengthRange = document.querySelector("#pass-length-range");
	const passLengthValue = document.querySelector("#pass-length-value");
	const generateBtn = document.querySelector("#pass-generate-btn");

	passLengthRange.addEventListener("change", (e) => {
		passLengthValue.innerText = e.target.value;
	});

	generateBtn.addEventListener("click", () => {
		const passwordLength = passLengthRange.value;
		let generatedPass = "";

		do {
			generatedPass = generatePassword(passwordLength);
		} while (!checkPassValidity(generatedPass));
		resultField.value = generatedPass;
	});

	function generatePassword(passwordLength) {
		const generatedPassword = [];

		for (let i = 0; i < passwordLength; i++) {
			generatedPassword.push(getRandomChar());
		}

		generatedPassword[Math.floor(Math.random() * passwordLength)] = "_";

		return generatedPassword.join("");
	}

	function checkPassValidity(str) {
		let countUpperChars = 0;
		let countAllDigits = 0;
		let countUnderScores = 0;

		for (let i = 0; i < str.length; i++) {
			if (/[A-Z]/.test(str[i])) {
				countUpperChars++;
			}
			if (/\d+/g.test(str[i])) {
				countAllDigits++;
			}
			if (/_+/g.test(str[i])) {
				countUnderScores++;
			}
		}

		if (/\d[2,]/.test(str)) {
			return false;
		}

		return countUpperChars >= 2 && countAllDigits <= 5 && countUnderScores <= 1;
	}

	function getRandomChar() {
		return String.fromCharCode(Math.floor(Math.random() * 90) + 33);
	}
};
