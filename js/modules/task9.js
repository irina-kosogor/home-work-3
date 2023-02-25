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
			(w >= a && h >= b) ||
			(w >= a && h >= c) ||
			(w >= b && h >= a) ||
			(w >= b && h >= c) ||
			(w >= c && h >= a) ||
			(w >= c && h >= b) 
		) {
			return true;
		} else {
			return false;
		}
	}

	btn.addEventListener("click", () => {
		if (checkIfBrickFits()) {
			resultField.textContent = "This brick fits!";
			resultField.style.color = "#2E8EEE";
		} else {
			resultField.textContent = "This brick does not fit!";
			resultField.style.color = "#914A55";
		}

	});
};
