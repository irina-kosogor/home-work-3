import { debounce } from "./utils";

// Task 15
// Native JS

export const postInputOnPage = () => {
	const inputField = document.querySelector("#phrase-input-field");
	const list = document.querySelector("#list");

	function postResult() {
		let data = inputField.value;
		const arrData = data
			.split(" ")
			.filter((item) => item !== "")
			.map((item, i, arr) => {
				if (i === 0) {
					return item.toUpperCase();
				}
				if (i === arr.length - 1 || i === arr.length - 2) {
					return item.toLowerCase();
				}
				return item;
			});
		arrData.forEach((item) => {
			const listItem = document.createElement("li");
			listItem.textContent = item;
			list.append(listItem);
		});
	}

	function countA() {
		let count = 0;
		let data = inputField.value;
		for (let i = 0; i < data.length; i++) {
			if (data[i] === "a" || data[i] === "A") {
				count++;
			}
		}
		return count;
	}

	const alertCountA = () => {
		alert(`Number of 'a' is ${countA()}`);
		idleTime();
	};

	const processChange = debounce(() => {
		postResult();
		setTimeout(alertCountA, 500);
	});

	const idleTime = () => {
		let time;

		document.onmousemove = resetTimer;
		document.onkeydown = resetTimer;
		document.onscroll = resetTimer;

		function closeTab() {
			if (!confirm("Are you still here?")) {
				window.close();
			}
		}

		function resetTimer() {
			clearTimeout(time);
			//One potential issue is that the window.close() method is only allowed to be called from windows that were opened by a script using the window.open() method. As the window was not opened using this method, it is forbidden to close it using window.close(). Additionally, some browsers might prevent windows from being closed automatically, and will require the user to explicitly click a button to close the window.
			time = setTimeout(closeTab, 300000);
		}
	};

	inputField.addEventListener("input", () => {
		list.innerHTML = "";
		processChange();
	});
};
