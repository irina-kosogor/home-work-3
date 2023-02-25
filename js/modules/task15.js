// Task 15
// Native JS

export const postInputOnPage = () => {
	const inputField = document.querySelector("#phrase-input-field");
	const list = document.querySelector("#list");

	function debounce(func, timeout = 1000) {
		let timerId;
		return (...args) => {
			clearTimeout(timerId);
			timerId = setTimeout(() => {
				func.apply(this, args);
			}, timeout);
		};
	}

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

	const alertCountA = debounce(() => {
		alert(`Number of 'a' is ${countA()}`);
		idleTime();
	}, 500);

	const processChange = debounce(() => {
		postResult();
		alertCountA();
	});

	const idleTime = () => {
		let time;

		document.onmousemove = resetTimer;
		document.onkeydown = resetTimer;
		document.onscroll = resetTimer;

		function closeTab() {
			if (!confirm("Are you still here?")) {
				window.close();;
			}
		}

		function resetTimer() {
			clearTimeout(time);
			time = setTimeout(closeTab, 3000);
		}
	};

	inputField.addEventListener("input", () => {
		list.innerHTML = "";
		processChange();
	});
};
