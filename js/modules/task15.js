// Task 15
// Native JS

export const makeInput = () => {
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
			.map((item, i) => {
				if (i === 0) {
					return item.toUpperCase();
				}
				if (
					i === data.split(" ").length - 1 ||
					i === data.split(" ").length - 2
				) {
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
			if (data[i] === "a") {
				count++;
			}
		}
		return count;
	}

	const alertCountA = debounce(() => {
		alert(`Number of 'a' is ${countA()}`);
	});

	const pingUser = debounce(() => {
		setTimeout(() => {
			if (!confirm("Are you still here?")) {
				window.close();
			}
		}, 300000);
	});

	const processChange = debounce(() => {
		postResult();
		alertCountA();
		pingUser();
	});

	inputField.addEventListener("input", () => {
		list.innerHTML = "";
		processChange();
	});
};
