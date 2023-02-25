// // Task 9
// // Native JS

export const checkIfBrickFitsHole = () => {
	const a = document.querySelector("#brick-input-heigth").value;
	const b = document.querySelector("#brick-input-width").value;
	const c = document.querySelector("#brick-input-depth").value;
	const w = document.querySelector("#hole-input-width").value;
	const h = document.querySelector("#hole-input-heigth").value;
	const resultField = document.querySelector("#brick-result-block");
	const btn = document.querySelector("#brick-check-btn");

	function checkIfBrickFits(a, b, c, w, h) {
		if (
			(a == null || a == "" || a < 1) ||
			(b == null || b == "" || b < 1) ||
			(c == null || c == "" || c < 1) ||
			(w == null || w == "" || w < 1) ||
			(h == null || h == "" || h < 1)
		) {
			return true;
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
			case checkIfBrickFits(a, b, c, w, h):
				resultField.textContent = "Missing or invalid data";
				resultField.style.color = "#fd0000";
				break;
			case checkIfBrickFits(a, b, c, w, h) === "fit":
				resultField.textContent = "This brick fits!";
				resultField.style.color = "#2E8EEE";
				break;
			case checkIfBrickFits(a, b, c, w, h) === "no fit":
				resultField.textContent = "This brick does not fit";
				resultField.style.color = "#1c540f";
				break;
		}
	});
};
