// // Task 9
// // Native JS

const resultField = document.querySelector("#brick-result-block");
const btn = document.querySelector("#brick-check-btn");

export function checkIfBrickFits() {
	const a = document.querySelector("#brick-input-width").value;
	const b = document.querySelector("#brick-input-width").value;
	const c = document.querySelector("#brick-input-depth").value;
	const w = document.querySelector("#hole-input-heigth").value;
	const h = document.querySelector("#hole-input-width").value;
	const dimensions = [a, b, c].sort((x, y) => x - y);
	const holeDimensions = [w, h].sort((x, y) => x - y);

	if (
		(a == null || a == "") ||
		(b == null || b == "") ||
		(c == null || c == "") ||
		(w == null || w == "") ||
		(h == null || h == "")
	) {
		return "empty";
	}

	if (dimensions[0] <= holeDimensions[0] && dimensions[1] <= holeDimensions[1]) {
		return true;
	} else {
		return false;
	}
}

btn.addEventListener("click", () => {
	switch (true) {
		case checkIfBrickFits():
			resultField.textContent = "This brick fits!";
			resultField.style.color = "#2E8EEE";
			break;
		case !checkIfBrickFits():
			resultField.textContent = "This brick does not fit";
			resultField.style.color = "#1c540f";
			break;
		case checkIfBrickFits() === "empty":
			resultField.textContent = "Please fill in all required fields";
			resultField.style.color = "#fd0000";
			break;
	}
});

