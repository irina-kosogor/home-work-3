/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/task1.js":
/*!*****************************!*\
  !*** ./js/modules/task1.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDifference": () => (/* binding */ getDifference),
/* harmony export */   "getDifferenceLodash": () => (/* binding */ getDifferenceLodash)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");

// Task #1
// Native JS

function getDifference(arr) {
	if (arr.length <= 1) {
		return 0;
	}

	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkIfArray)(arr) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkAllItemsTypes)(arr, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	return Math.max(...arr) - Math.min(...arr);
}

// Task #1
//Lodash

function getDifferenceLodash(arr) {
	if (_.size(arr) <= 1) {
		return 0;
	}

	if (!_.isArray(arr) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkAllItemsTypes)(arr, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	return _.max(arr) - _.min(arr);
}


/***/ }),

/***/ "./js/modules/task10.js":
/*!******************************!*\
  !*** ./js/modules/task10.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFileName": () => (/* binding */ getFileName)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 10
// Native JS

function getFileName(url) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(url, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	let fileName = url.split("\\");
	return fileName[fileName.length - 1].split(".")[0];
}


/***/ }),

/***/ "./js/modules/task11.js":
/*!******************************!*\
  !*** ./js/modules/task11.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkStrings": () => (/* binding */ checkStrings),
/* harmony export */   "checkStringsLodash": () => (/* binding */ checkStringsLodash)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 11
// Native JS

function checkStrings(str1, str2) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str1, "string") || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str2, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	return str1.length === str2.length && str2.repeat(2).includes(str1);
}

// Task 11
// Lodash

function checkStringsLodash(str1, str2) {
	if (!_.isString(str1) || !_.isString(str2)) {
		console.error("Not all the values have a valid type");
		return;
	}

	if (_.size(str1) !== _.size(str2)) {
		return false;
	}

	return _.includes(str1 + str1, str2);
}


/***/ }),

/***/ "./js/modules/task12.js":
/*!******************************!*\
  !*** ./js/modules/task12.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeArrays": () => (/* binding */ composeArrays),
/* harmony export */   "composeArraysLodash": () => (/* binding */ composeArraysLodash)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 12
// Native JS

function composeArrays(a) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkIfArray)(a) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkAllItemsTypes)(a, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const sortedArr = a.sort((a, b) => a - b);
	const b = [];
	const c = [];

	for (let i = 0; i < sortedArr.length; i += 2) {
		b.push(sortedArr[i]);
		c.push(sortedArr[i + 1]);
	}

	return `Array b: [${b}], array c: [${c}]`;
}

// Task 12
// Lodash

function composeArraysLodash(a) {
	if (!_.isArray(a) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkAllItemsTypes)(a, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const b = [];
	const c = [];

	const sortedArr = _.sortBy(a);

	for (let i = 0; i < _.size(sortedArr); i += 2) {
		b.push(sortedArr[i]);
		c.push(sortedArr[i + 1]);
	}

	return `Array b: [${b}]; array c: [${c}]`;
}


/***/ }),

/***/ "./js/modules/task13.js":
/*!******************************!*\
  !*** ./js/modules/task13.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeNewString": () => (/* binding */ composeNewString)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");

// Task 13
// Native JS

function composeNewString(str) {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str, "string")) {
        console.error("Not all the values have a valid type");
        return;
    }

	const patternForUrl =
		/((http|https):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/gim;
	const patternForEmail =
		/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
	const patternForDigits = /\d{4,}/g;

	const newStr = str[0].toUpperCase() + str.substring(1).toLowerCase()
			.replace(patternForUrl, "[посилання заборонено]")
			.replace(patternForEmail, "[контакти заборонені]")
            .replace(patternForDigits, "");

    if (str.length < newStr.length) {
        let timerId = setTimeout(function askIfHelpNeeded() {
            alert("Чи потрібна Вам допомога?");
            timerId = setTimeout(askIfHelpNeeded, 5000)
        }, 5000);      
    }

    return newStr;
}



/***/ }),

/***/ "./js/modules/task14.js":
/*!******************************!*\
  !*** ./js/modules/task14.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showTextOnPage": () => (/* binding */ showTextOnPage)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");

// Task 14
// Native JS

const textBlock = document.querySelector(".text-for-task14");

function checkForBrackets(str) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str, "string")) {
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

function showTextOnPage(str) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	if (checkForBrackets(str)) {
		textBlock.textContent = str;
	} else {
		textBlock.textContent = "Error! Brackets are unbalanced.";
		textBlock.style.color = "#914A55";
	}
}

textBlock.addEventListener(
	"copy",
	(e) => {
		alert("Copying is forbidden");
		e.preventDefault();
	}
);

textBlock.addEventListener(
	"contextmenu",
	(e) => {
		e.preventDefault();
	}
);



/***/ }),

/***/ "./js/modules/task15.js":
/*!******************************!*\
  !*** ./js/modules/task15.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postInputOnPage": () => (/* binding */ postInputOnPage)
/* harmony export */ });
// Task 15
// Native JS

const postInputOnPage = () => {
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
				if (
					i === arr.length - 1 ||
					i === arr.length - 2
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
			if (data[i] === "a" || data[i] === "A") {
				count++;
			}
		}
		return count;
	}

	const alertCountA = debounce(() => {
		alert(`Number of 'a' is ${countA()}`);
	});

	const pingUser = setTimeout(() => {
		if (!confirm("Are you still here?")) {
			window.close();
		}
	}, 300000);

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


/***/ }),

/***/ "./js/modules/task16.js":
/*!******************************!*\
  !*** ./js/modules/task16.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPassword": () => (/* binding */ createPassword)
/* harmony export */ });
// Task 16
// Native JS

const createPassword = () => {
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

		for (let i = 0; i < str.length; i++) {
			if (/[A-Z]/.test(str[i])) {
				countUpperChars++;
			}
			if (/\d+/g.test(str[i])) {
				countAllDigits++;
			}
		}

		if (/\d[2,]/.test(str)) {
			return false;
		}

		return countUpperChars >= 2 && countAllDigits <= 5;
	}

	function getRandomChar() {
		return String.fromCharCode(Math.floor(Math.random() * 90) + 33);
	}
};


/***/ }),

/***/ "./js/modules/task17.js":
/*!******************************!*\
  !*** ./js/modules/task17.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeElelementsOrder": () => (/* binding */ changeElelementsOrder),
/* harmony export */   "changeElelementsOrderLodash": () => (/* binding */ changeElelementsOrderLodash)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 17
// Native JS

function changeElelementsOrder(arr) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkIfArray)(arr) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkAllItemsTypes)(arr, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const sortedArr = arr.sort((a, b) => a - b);
	const oddIndex = [];
	const evenIndex = [];

	sortedArr.forEach((item, i) => {
		i % 2 ? evenIndex.push(item) : oddIndex.push(item);
	});

	return oddIndex.concat(evenIndex.reverse());
}

// Task 17
// Lodash

function changeElelementsOrderLodash(arr) {
	if (!_.isArray(arr) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkAllItemsTypes)(arr, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const sortedArr = _.sortBy(arr);
	const oddIndex = [];
	const evenIndex = [];

	_.forEach(sortedArr, function (item, i) {
		i % 2 ? evenIndex.push(item) : oddIndex.push(item);
	});

	return _.concat(oddIndex, _.reverse(evenIndex));
}


/***/ }),

/***/ "./js/modules/task2.js":
/*!*****************************!*\
  !*** ./js/modules/task2.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArrayWithWords": () => (/* binding */ getArrayWithWords),
/* harmony export */   "getArrayWithWordsLodash": () => (/* binding */ getArrayWithWordsLodash)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task #2
// Native JS

function getArrayWithWords(str, num) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str, "string") || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(num, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	return str.split(" ").filter((item) => item.length > num);
}

// Task #2
// Lodash

function getArrayWithWordsLodash(str, num) {
	if (!_.isString(str) || !_.isNumber(num)) {
		console.error("Not all the values have a valid type");
		return;
	}

	const arr = _.split(str, " ");
	return _.filter(arr, (item) => item.length > num);
}


/***/ }),

/***/ "./js/modules/task3.js":
/*!*****************************!*\
  !*** ./js/modules/task3.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkForEnding": () => (/* binding */ checkForEnding),
/* harmony export */   "checkForEndingLodash": () => (/* binding */ checkForEndingLodash)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 3
// Native JS

function checkForEnding(str, ending) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str, "string") || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(ending, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	return str.slice(-ending.length) === ending;
}

// Task 3
// Lodash

function checkForEndingLodash(str, ending) {
	if (!_.isString(str) || !_.isString(ending)) {
		console.error("Not all the values have a valid type");
		return;
	}

	return _.endsWith(str, ending);
}


/***/ }),

/***/ "./js/modules/task4.js":
/*!*****************************!*\
  !*** ./js/modules/task4.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAdjacentPairAverageForEach": () => (/* binding */ getAdjacentPairAverageForEach),
/* harmony export */   "getAdjacentPairAverageLodash": () => (/* binding */ getAdjacentPairAverageLodash),
/* harmony export */   "getAdjacentPairAverageReduce": () => (/* binding */ getAdjacentPairAverageReduce)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 4
// Native JS

// With reduce
function getAdjacentPairAverageReduce(arr) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkIfArray)(arr) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkAllItemsTypes)(arr, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	return arr.reduce((acc, curr, idx, arr) => {
		if (idx === arr.length - 1) {
			return acc;
		}
		acc.push((curr + arr[idx + 1]) / 2);
		return acc;
	}, []);
}

// With forEach
function getAdjacentPairAverageForEach(arr) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkIfArray)(arr) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkAllItemsTypes)(arr, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const resultArr = [];

	arr.forEach((item, i, arr) => {
		if (i === arr.length - 1) {
			return;
		}
		resultArr.push((item + arr[i + 1]) / 2);
	});

	return resultArr;
}

// Task 4
// Lodash
function getAdjacentPairAverageLodash(arr) {
	if (!_.isArray(arr) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkAllItemsTypes)(arr, "number")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const resultArr = [];
	_.forEach(arr, function (item, i, arr) {
		if (i === arr.length - 1) {
			return;
		}
		resultArr.push((item + arr[i + 1]) / 2);
	});
	return resultArr;
}


/***/ }),

/***/ "./js/modules/task5-2.js":
/*!*******************************!*\
  !*** ./js/modules/task5-2.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeABC": () => (/* binding */ removeABC)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 5.2
// Native JS

function removeABC(str) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const pattern = new RegExp(/[abcABC]/gi);

	if (!str.match(pattern)) {
		return null;
	}

	return str.replace(pattern, "");
}


/***/ }),

/***/ "./js/modules/task5.js":
/*!*****************************!*\
  !*** ./js/modules/task5.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countVowels": () => (/* binding */ countVowels),
/* harmony export */   "countVowelsReqExp": () => (/* binding */ countVowelsReqExp)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 5
// Native JS

// With ReqExp
function countVowelsReqExp(str) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const matches = str.toLowerCase().match(/[aeiouy]/gi);
	return matches ? matches.length : 0;
}

// With forEach
function countVowels(str) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(str, "string")) {
		console.error("Not all the values have a valid type");
		return;
	}

	const vowels = ["a", "e", "i", "o", "u", "y"];
	let count = 0;
	str.toLowerCase()
		.split("")
		.forEach((item) => (vowels.indexOf(item) !== -1 ? (count += 1) : 0));
	return count;
}


/***/ }),

/***/ "./js/modules/task6.js":
/*!*****************************!*\
  !*** ./js/modules/task6.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findUnique": () => (/* binding */ findUnique),
/* harmony export */   "findUniqueLodash": () => (/* binding */ findUniqueLodash)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 6
// Native JS

function findUnique(arr1, arr2) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkIfArray)(arr1) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkIfArray)(arr2)) {
		console.error("Not all the values have a valid type");
		return;
	}

	return Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
}

// Task 6
// Lodash

function findUniqueLodash(arr1, arr2) {
	if (!_.isArray(arr1) && !_.isArray(arr2)) {
		console.error("Not all the values have a valid type");
		return;
	}

	return _.sortedUniq(_.sortBy([...arr1, ...arr2]));
}


/***/ }),

/***/ "./js/modules/task7.js":
/*!*****************************!*\
  !*** ./js/modules/task7.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeKeysWithValues": () => (/* binding */ changeKeysWithValues)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");


// Task 7
// Native JS

function changeKeysWithValues(obj) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj)) {
		console.error("It's not an object");
		return;
	}

	if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(obj)) {
		console.error("Object does not contain any elements");
		return;
	}

	const changedObj = {};

	for (let key in obj) {
		changedObj[obj[key]] = key;
	}

	return changedObj;
}


/***/ }),

/***/ "./js/modules/task8.js":
/*!*****************************!*\
  !*** ./js/modules/task8.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateInsuranceDifference": () => (/* binding */ calculateInsuranceDifference)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./js/modules/utils.js");

// Task 8
// Native JS

function calculateInsuranceDifference(obj, limit) {
	if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(obj) || !(0,_utils__WEBPACK_IMPORTED_MODULE_0__.checkItemType)(limit, "number")) {
		console.error("Not all the items have a valid type");
		return;
	}

	if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(obj)) {
		console.error("Object does not contain any elements");
		return;
	}

	let sum = 0;
	for (let key in obj) {
		sum += obj[key];
	}

	if (sum < limit) {
		console.log("Sum of the elements are lower than an insurance value");
		return;
	}

	return sum - limit;
}


/***/ }),

/***/ "./js/modules/task9.js":
/*!*****************************!*\
  !*** ./js/modules/task9.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfBrickFitsHole": () => (/* binding */ checkIfBrickFitsHole)
/* harmony export */ });
// // Task 9
// // Native JS

const checkIfBrickFitsHole = () => {
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


/***/ }),

/***/ "./js/modules/utils.js":
/*!*****************************!*\
  !*** ./js/modules/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAllItemsTypes": () => (/* binding */ checkAllItemsTypes),
/* harmony export */   "checkIfArray": () => (/* binding */ checkIfArray),
/* harmony export */   "checkItemType": () => (/* binding */ checkItemType),
/* harmony export */   "isEmptyObject": () => (/* binding */ isEmptyObject),
/* harmony export */   "isObject": () => (/* binding */ isObject)
/* harmony export */ });
// Functions for checking data types used in further code

// Checks if item is array
function checkIfArray(arr) {
	return Array.isArray(arr);
}

//Checks datatypes of the elements in array
function checkAllItemsTypes(arr, dataType) {
	return arr.every((item) => checkItemType(item, dataType));
	// return arr.every((item) => typeof item === dataType);
}

// Checks if item is object
function isObject(obj) {
	return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

// Checks if object is empty
function isEmptyObject(obj) {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}
	return true;
}

//Checks datatypes of primitive values
function checkItemType(item, dataType) {
	return typeof item === dataType;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_task1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task1 */ "./js/modules/task1.js");
/* harmony import */ var _modules_task2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task2 */ "./js/modules/task2.js");
/* harmony import */ var _modules_task3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task3 */ "./js/modules/task3.js");
/* harmony import */ var _modules_task4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task4 */ "./js/modules/task4.js");
/* harmony import */ var _modules_task5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/task5 */ "./js/modules/task5.js");
/* harmony import */ var _modules_task5_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/task5-2 */ "./js/modules/task5-2.js");
/* harmony import */ var _modules_task6__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/task6 */ "./js/modules/task6.js");
/* harmony import */ var _modules_task7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/task7 */ "./js/modules/task7.js");
/* harmony import */ var _modules_task8__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/task8 */ "./js/modules/task8.js");
/* harmony import */ var _modules_task9__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/task9 */ "./js/modules/task9.js");
/* harmony import */ var _modules_task10__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/task10 */ "./js/modules/task10.js");
/* harmony import */ var _modules_task11__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/task11 */ "./js/modules/task11.js");
/* harmony import */ var _modules_task12__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/task12 */ "./js/modules/task12.js");
/* harmony import */ var _modules_task13__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/task13 */ "./js/modules/task13.js");
/* harmony import */ var _modules_task14__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/task14 */ "./js/modules/task14.js");
/* harmony import */ var _modules_task15__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/task15 */ "./js/modules/task15.js");
/* harmony import */ var _modules_task16__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/task16 */ "./js/modules/task16.js");
/* harmony import */ var _modules_task17__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/task17 */ "./js/modules/task17.js");
/**
 * NOTE 
 * All tasks are placed in different scripts/modules in the folder "modules" 
 * with the correspondent names
 * e.g. Task 1 in file "task1.js" 
 * Current "main.js" file is used for Webpack as entry point and contains 
 * function calls and tests of the functionality
 * Feel free to comment/uncomment or add your own tests below.
 * Please don't make any changes in the module imports.
 */





















// Task1 Native JS:
console.log((0,_modules_task1__WEBPACK_IMPORTED_MODULE_0__.getDifference)([1, 2, 3, -4]));
console.log((0,_modules_task1__WEBPACK_IMPORTED_MODULE_0__.getDifference)([16]));

// Task1 Lodash:
console.log((0,_modules_task1__WEBPACK_IMPORTED_MODULE_0__.getDifferenceLodash)([1, 2, 3, -4]));
console.log((0,_modules_task1__WEBPACK_IMPORTED_MODULE_0__.getDifferenceLodash)([16]));

// Task2 Native JS:
console.log((0,_modules_task2__WEBPACK_IMPORTED_MODULE_1__.getArrayWithWords)('Lorem, ipsum dolor sit amet consectetu, ex minus sunt', 6))

// Task2 Lodash:
console.log((0,_modules_task2__WEBPACK_IMPORTED_MODULE_1__.getArrayWithWordsLodash)('Lorem, ipsum dolor sit amet consectetu adipisicin elit', 8));

// Task3 Native JS:
console.log((0,_modules_task3__WEBPACK_IMPORTED_MODULE_2__.checkForEnding)('abc', 'bc'));
console.log((0,_modules_task3__WEBPACK_IMPORTED_MODULE_2__.checkForEnding)('abc', 'd'));

// Task3 Lodash:
console.log((0,_modules_task3__WEBPACK_IMPORTED_MODULE_2__.checkForEndingLodash)('abc', 'bc'));
console.log((0,_modules_task3__WEBPACK_IMPORTED_MODULE_2__.checkForEndingLodash)('abc', 'd'));

// Task4 Native JS:
// With reduce
console.log((0,_modules_task4__WEBPACK_IMPORTED_MODULE_3__.getAdjacentPairAverageReduce)([1, 3, 5, 1, -10]));
console.log((0,_modules_task4__WEBPACK_IMPORTED_MODULE_3__.getAdjacentPairAverageReduce)([2, -2, 2, -2, 2]));

// With forEach
console.log((0,_modules_task4__WEBPACK_IMPORTED_MODULE_3__.getAdjacentPairAverageForEach)([1, 3, 5, 1, -10]));
console.log((0,_modules_task4__WEBPACK_IMPORTED_MODULE_3__.getAdjacentPairAverageForEach)([2, -2, 2, -2, 2]));

// Task4 Lodash:
console.log((0,_modules_task4__WEBPACK_IMPORTED_MODULE_3__.getAdjacentPairAverageLodash)([1, 3, 5, 1, -10]));
console.log((0,_modules_task4__WEBPACK_IMPORTED_MODULE_3__.getAdjacentPairAverageLodash)([2, -2, 2, -2, 2]));

// Task5 Native JS:
// With ReqExp
console.log((0,_modules_task5__WEBPACK_IMPORTED_MODULE_4__.countVowelsReqExp)("Celebration"));
console.log((0,_modules_task5__WEBPACK_IMPORTED_MODULE_4__.countVowelsReqExp)("Palm"));

// With forEach
console.log((0,_modules_task5__WEBPACK_IMPORTED_MODULE_4__.countVowels)("Celebration"));
console.log((0,_modules_task5__WEBPACK_IMPORTED_MODULE_4__.countVowels)("Palm"));

// Task5-a Native JS:
console.log((0,_modules_task5_2__WEBPACK_IMPORTED_MODULE_5__.removeABC)("This might be a bit hard"));
console.log((0,_modules_task5_2__WEBPACK_IMPORTED_MODULE_5__.removeABC)("hello world!"));

// Task6 Native JS:
console.log((0,_modules_task6__WEBPACK_IMPORTED_MODULE_6__.findUnique)([1, 2, 3], [100, 2, 1, 10]));

// Task6 Lodash:
console.log((0,_modules_task6__WEBPACK_IMPORTED_MODULE_6__.findUniqueLodash)([1, 2, 3], [100, 2, 1, 10]));

// Task7 Native JS:
console.log((0,_modules_task7__WEBPACK_IMPORTED_MODULE_7__.changeKeysWithValues)({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// Task8 Native JS:
console.log((0,_modules_task8__WEBPACK_IMPORTED_MODULE_8__.calculateInsuranceDifference)({"baseball bat": 20}, 5));
console.log((0,_modules_task8__WEBPACK_IMPORTED_MODULE_8__.calculateInsuranceDifference)({ skate: 10, painting: 20 }, 19));
console.log((0,_modules_task8__WEBPACK_IMPORTED_MODULE_8__.calculateInsuranceDifference)({ skate: 200, painting: 200, shoes: 1 }, 400));

// Task9 Native JS:
(0,_modules_task9__WEBPACK_IMPORTED_MODULE_9__.checkIfBrickFitsHole)();

// Task10 Native JS:
console.log((0,_modules_task10__WEBPACK_IMPORTED_MODULE_10__.getFileName)('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// Task11 Native JS:
console.log('Task11 native js', (0,_modules_task11__WEBPACK_IMPORTED_MODULE_11__.checkStrings)('irina', 'rinai'));
console.log((0,_modules_task11__WEBPACK_IMPORTED_MODULE_11__.checkStrings)('irina', 'inair'));
console.log((0,_modules_task11__WEBPACK_IMPORTED_MODULE_11__.checkStrings)('irina', 'inira'));

// Task11 Lodash:
console.log((0,_modules_task11__WEBPACK_IMPORTED_MODULE_11__.checkStringsLodash)('irina', 'rinai'));
console.log((0,_modules_task11__WEBPACK_IMPORTED_MODULE_11__.checkStringsLodash)('irina', 'inair'));
console.log((0,_modules_task11__WEBPACK_IMPORTED_MODULE_11__.checkStringsLodash)('irina', 'inira'));

// Task12 Native JS:
console.log((0,_modules_task12__WEBPACK_IMPORTED_MODULE_12__.composeArrays)([2, 9, 6, 8, 5, 3]));
console.log((0,_modules_task12__WEBPACK_IMPORTED_MODULE_12__.composeArrays)([1950, 1960, 1970, 1980, 1990, 2000, 2010, 1988]));
console.log((0,_modules_task12__WEBPACK_IMPORTED_MODULE_12__.composeArrays)([-1950, -1960, -1970, -1980]));

// Task12 Lodash:
console.log((0,_modules_task12__WEBPACK_IMPORTED_MODULE_12__.composeArraysLodash)([2, 9, 6, 8, 5, 3])); 
console.log((0,_modules_task12__WEBPACK_IMPORTED_MODULE_12__.composeArraysLodash)([1950, 1960, 1970, 1980, 1990, 2000, 2010, 1988]));
console.log((0,_modules_task12__WEBPACK_IMPORTED_MODULE_12__.composeArraysLodash)([-1950, -1960, -1970, -1980]));

// Task13 Native JS:
console.log((0,_modules_task13__WEBPACK_IMPORTED_MODULE_13__.composeNewString)('quisquam 34578 like so: https://t.co/74DfkMG5FB dolLOibus sdfsdfr@gmail.com blanditiis SApiente dolore 123 maXime'))
/** Test case for having new string longer than initial one
 * it is commented not to have alert popping up every 5 seconds*/ 
// console.log(composeNewString('quisquam 34578 like so: https://t.co/74 sdfsdfr@gmail.com bland SApiente dolore 123 maXime'))

// Task14 Native JS:
const contentText =
"Lorem ipsum dolor sit amet ((consectetur adipisicing elit)). Exercitationem expedita recusandae,  (sapiente quasi?) Ipsa, atque nesciunt. (Cum dicta), placeat soluta adipisci iste assumenda tempore?";

(0,_modules_task14__WEBPACK_IMPORTED_MODULE_14__.showTextOnPage)(contentText);

// Task15 Native JS:
(0,_modules_task15__WEBPACK_IMPORTED_MODULE_15__.postInputOnPage)();

// Task16 Native JS:
(0,_modules_task16__WEBPACK_IMPORTED_MODULE_16__.createPassword)();

// Task17 Native JS:
console.log((0,_modules_task17__WEBPACK_IMPORTED_MODULE_17__.changeElelementsOrder)([1,2,3,4,5]));
console.log((0,_modules_task17__WEBPACK_IMPORTED_MODULE_17__.changeElelementsOrder)([1, 5, 9, 12, 54, 3, 9, 45, 10, 15, 2]));

// Task17 Lodash:
console.log((0,_modules_task17__WEBPACK_IMPORTED_MODULE_17__.changeElelementsOrderLodash)([1,2,3,4,5]));
console.log((0,_modules_task17__WEBPACK_IMPORTED_MODULE_17__.changeElelementsOrderLodash)([1, 5, 9, 12, 54, 3, 9, 45, 10, 15, 2]));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map