// // Task 9
// // Native JS

export const checkIfBrickFitsHole = () => {
	const brickInputHeigth = document.querySelector("#brick-input-heigth");
	const brickInputWidth = document.querySelector("#brick-input-width");
	const brickInputDepth = document.querySelector("#brick-input-depth");
	const holeInputHeigth = document.querySelector("#hole-input-heigth");
	const holeInputWidth = document.querySelector("#hole-input-width");
	const resultField = document.querySelector("#brick-result-block");
	const btn = document.querySelector("#brick-check-btn");

	function checkIfBrickFits(a, b, c, w, h) {
		a = brickInputHeigth.value;
		b = brickInputWidth.value;
		c = brickInputDepth.value;
		w = holeInputHeigth.value;
		h = holeInputWidth.value;
		
		if (
			(a == null || a == "") &&
			(b == null || b == "") &&
			(c == null || c == "") &&
			(w == null || w == "") &&
			(h == null || h == "")
		) {
			return false;
		}

		if (
			(w >= a && h >= b) ||
			(w >= a && h >= c) ||
			(w >= b && h >= a) ||
			(w >= b && h >= c) ||
			(w >= c && h >= a) ||
			(w >= c && h >= b) 
		) {
			return "fit";
		} else {
			return "no fit";
		}
	}

	btn.addEventListener("click", () => {
		switch (true) {
			case checkIfBrickFits() === "fit":
				resultField.textContent = "This brick fits!";
				resultField.style.color = "#2E8EEE";
				break;
			case checkIfBrickFits() === "no fit":
				resultField.textContent = "This brick does not fit";
				resultField.style.color = "#914A55";
				break;
			case !checkIfBrickFits():
				resultField.textContent = "Please fill in all required fields";
				resultField.style.color = "#914A55";
				break;
		}
	});
};
