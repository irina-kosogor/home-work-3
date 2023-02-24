'use strict';

// Functions for checking data types used in further code

// Checks if item is array 
function checkIfArray (arr) {
    return Array.isArray(arr);
}

//Checks datatypes of the elements in array
function checkAllItemsTypes (arr, dataType) {
    return arr.every(item => typeof item === dataType);
}

// Checks if item is object
function isObject (obj) {
    return (typeof obj === "object" && !Array.isArray(obj) && obj !== null);
}

// Checks if object is empty
function isEmptyObject (obj) {
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}

//Checks datatypes of primitive values
function checkItemType (item, dataType) {
    return typeof item === dataType;
}

// Task #1
// Native JS

function getDifference (arr) {
    if (arr.length <= 1) {
        return 0;
    }
    
    if (!checkIfArray(arr) || !checkAllItemsTypes(arr, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return Math.max(...arr) - Math.min(...arr);
}

// console.log(getDifference([1, 2, 3, -4]));
// console.log(getDifference([16]));

// Task #1
//Lodash

function getDifferenceLodash (arr) {
    if (arr.length <= 1) {
        return 0;
    }

    if (!_.isArray(arr) || !checkAllItemsTypes(arr, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return _.max(arr) - _.min(arr);
}

// console.log(getDifferenceLodash([1, 2, 3, -4]));
// console.log(getDifferenceLodash([16]));

// Task #2
// Native JS

function getArrayWithWords(str, num) {
    if (!checkItemType(str, "string") || !checkItemType(num, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return str.split(" ").filter(item => item.length > num);
}
// console.log(getArrayWithWords('Lorem, ipsum dolor sit amet consectetu, ex minus sunt', 6))

// Task #2
// Lodash

function getArrayWithWordsLodash(str, num) {
    if (!_.isString(str) || !_.isNumber(num)) {
        console.error(`Not all the values have a valid type`);
        return;
    }
    
    const arr = _.split(str, " ");
    return _.filter(arr, (item) => item.length > num);
}

// console.log(getArrayWithWordsLodash('Lorem, ipsum dolor sit amet consectetur adipisicing elit', 6));

// Task 3
// Native JS

function checkForEnding(str, ending) {
    if (!checkItemType(str, "string") || !checkItemType(ending, "string")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return str.slice(-ending.length) === ending;
}

// console.log(checkForEnding('abc', 'bc'));
// console.log(checkForEnding('abc', 'd'));

// Task 3
// Lodash

function checkForEndingLodash(str, ending) {
    if (!_.isString(str) || !_.isString(ending)) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return _.endsWith(str, ending);
}

// console.log(checkForEndingLodash('abc', 'bc'));
// console.log(checkForEndingLodash('abc', 'd'));

// Task 4
// Native JS

// With reduce
function getAverageReduce(arr) {
   if (!checkIfArray(arr) || !checkAllItemsTypes(arr, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return arr.reduce((acc, curr, idx, arr) => {
        if (idx === arr.length - 1) {
            return acc;
        } 
            acc.push((curr + arr[idx + 1]) / 2);
        return acc;
    }, [])
}

// console.log(getAverageReduce([1, 3, 5, 1, -10]));
// console.log(getAverageReduce([2, -2, 2, -2, 2]));

// With forEach
function getAverageForEach(arr) {
    if (!checkIfArray(arr) || !checkAllItemsTypes(arr, "number")) {
        console.error(`Not all the values have a valid type`);
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

// console.log(getAverageForEach([1, 3, 5, 1, -10]));
// console.log(getAverageForEach([2, -2, 2, -2, 2]));

// Task 4
// Lodash

function getAverageLodash(arr) {
    if (!_.isArray(arr) || !checkAllItemsTypes(arr, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }
    
	const resultArr = [];
    _.forEach(arr, function(item, i, arr) {
        if (i === arr.length - 1) {
			return;
		}
		resultArr.push((item + arr[i + 1]) / 2);
    })
    return resultArr;
}

// console.log(getAverageLodash([1, 3, 5, 1, -10]));
// console.log(getAverageLodash([2, -2, 2, -2, 2]));

// Task 5
// Native JS

// With ReqExp
function countVowelsReqExp(str) {
    if (!checkItemType(str, "string")) {
        console.error(`Not all the values have a valid type`);
        return;
    }
    
	const matches = str.toLowerCase().match(/[aeiouy]/gi);
	return matches ? matches.length : 0;
}

// console.log(countVowelsReqExp("Celebration"));
// console.log(countVowelsReqExp("Palm"));

// With forEach
function countVowels(str) {
    if (!checkItemType(str, "string")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

	const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
	let count = 0;
	str.toLowerCase().split('').forEach((item) => vowels.indexOf(item) !== -1 ? count += 1: 0);
	return count;
}

// console.log(countVowels("Celebration"));
// console.log(countVowels("Palm"));

// Task 5.2
// Native JS

function removeABC(str) {
    if (!checkItemType(str, "string")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

	const pattern = new RegExp(/[abcABC]/gi);

	if (!str.match(pattern)) {
		return null;
	}

	return str.replace(pattern, "");
}

// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));

// Task 6
// Native JS

function findUnique(arr1, arr2) {
    if (!checkIfArray(arr1) || !checkIfArray(arr2)) {
		console.error(`Not all the values have a valid type`);
		return;
	}
    
	return Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
}

// console.log(findUnique([1, 2, 3], [100, 2, 1, 10]));

// Task 6
// Lodash

function findUniqueLodash(arr1, arr2) {
    if (!_.isArray(arr1) && !_.isArray(arr2)) {
		console.error(`Not all the values have a valid type`);
		return;
	}
    
	return _.sortedUniq(_.sortBy([...arr1, ...arr2]));
}

// console.log(findUniqueLodash([1, 2, 3], [100, 2, 1, 10]));

// Task 7
// Native JS

function changeKeysWithValues(obj) {
    if (!isObject(obj)) {
        console.error(`It's not an object`);
        return;
    }

    if (isEmptyObject(obj)) {
        console.error(`Object does not contain any elements`);
        return;
    }

	const changedObj = {};

	for (let key in obj) {
		changedObj[obj[key]] = key;
	}

	return changedObj;
}

// console.log(changeKeysWithValues({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
// console.log(changeKeysWithValues([1, 3, 4, 2]));

// Task 8
// Native JS

function calculateInsuranceDifference(obj, limit) {
    if (!isObject(obj) || !checkItemType(limit, "number")) {
        console.error(`Not all the items have a valid type`);
        return;
    }
    
    if (isEmptyObject(obj)) {
        console.error(`Object does not contain any elements`);
        return;
    }

	let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    
    if (sum < limit) {
        console.log(`Sum of the elements are lower than an insurance value`);
        return;
    }

    return sum - limit;
}

// console.log(calculateInsuranceDifference({"baseball bat": 20}, 5));
// console.log(calculateInsuranceDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateInsuranceDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// Task 9
// Native JS

function checkIfBrickFits(a, b, c, w, h) {
	if (
		!checkItemType(a, "number") 
		|| !checkItemType(b, "number") 
		|| !checkItemType(c, "number")
        || !checkItemType(w, "number")
        || !checkItemType(h, "number")
	) {
		console.error(`Not all the values have a valid type`);
		return;
	}

	return a <= w && c <= h ? true : false;
}

// console.log(checkIfBrickFits(1, 1, 1, 1, 1));
// console.log(checkIfBrickFits(1, 2, 1, 1, 1));
// console.log(checkIfBrickFits(1, 2, 2, 1, 1));

// Task 10
// Native JS

function getFileName(url) {
	if (!checkItemType(url, "string")) {
		console.error(`Not all the values have a valid type`);
		return;
	}

	let fileName = url.split("\\");
	return fileName[fileName.length - 1].split(".")[0];
}

// console.log(getFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// Task 11
// Native JS

function checkStrings(str1, str2) {
    if (!checkItemType(str1, "string") || !checkItemType(str2, "string")) {
        console.error(`Not all the values have a valid type`);
        return;
    }
    
    return str1.length === str2.length && str2.repeat(2).includes(str1);
}

// console.log(checkStrings('irina', 'rinai'));
// console.log(checkStrings('irina', 'inair'));
// console.log(checkStrings('irina', 'inira'));

// Task 11
// Lodash

function checkStringsLodash(str1, str2) {
    if (!_.isString(str1) || !_.isString(str2)) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    if (_.size(str1) !== _.size(str2)) {
        return false;
      }
      
    return _.includes((str1 + str1), str2);
}

// console.log(checkStringsLodash('irina', 'rinai'));
// console.log(checkStringsLodash('irina', 'inair'));
// console.log(checkStringsLodash('irina', 'inira'));

// Task 12
// Native JS

function composeArrays(a) {
    if (!checkIfArray(a) || !checkAllItemsTypes(a, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

	const sortedArr = a.sort((a, b) => a - b);
	const initialArrLength = a.length;
	const b = [];
	const c = [];

	for (let i = 0; i < initialArrLength / 2; i++) {
		b.push(sortedArr[0]);
		c.push(sortedArr[1]);
		sortedArr.splice(0, 2);
		continue;
	}

	return `Array b: [${b}], array c: [${c}]`;
}

// console.log(composeArrays([2, 9, 6, 8, 5, 3]));
// console.log(composeArrays([1950, 1960, 1970, 1980, 1990, 2000, 2010, 1988]));
// console.log(composeArrays([-1950, -1960, -1970, -1980]));

// Task 12
// Lodash

function composeArraysLodash(a) {
    if (!_.isArray(a) || !checkAllItemsTypes(a, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    const b = [];
    const c = [];

    const sortedArr = _.sortBy(a);

    for (let i = 0; i < _.size(sortedArr); i+= 2) {
        b.push(sortedArr[i]);
		c.push(sortedArr[i + 1]);
        _.slice(sortedArr, 0, 2);
    }
  
    return `Array b: [${b}]; array c: [${c}]`;
  }
  
//   console.log(composeArraysLodash([2, 9, 6, 8, 5, 3])); 
//   console.log(composeArraysLodash([1950, 1960, 1970, 1980, 1990, 2000, 2010, 1988]));
// console.log(composeArraysLodash([-1950, -1960, -1970, -1980]));

// Task 13
// Native JS

function composeNewString(str) {
    if (!checkItemType(str, "string")) {
        console.error(`Not all the values have a valid type`);
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

// console.log(composeNewString('quisquam 34578 like so: https://t.co/74DfkMG5FB dolLOibus sdfsdfr@gmail.com blanditiis SApiente dolore 123 maXime'))
// console.log(composeNewString('quisquam 34578 like so: https://t.co/74 sdfsdfr@gmail.com bland SApiente dolore 123 maXime'))

// Task 14
// Native JS

const textBlock = document.querySelector('.text-for-task14');

const contentText = "Lorem ipsum dolor sit amet (consectetur adipisicing elit). Exercitationem expedita recusandae,  (sapiente quasi?) Ipsa, atque nesciunt. (Cum dicta), placeat soluta adipisci iste assumenda tempore?"

function checkForBrackets(str) {
    if (!checkItemType(str, "string")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    const arr = str.split("").filter(item => item === "(" || item === ")");
    let stack = [];

    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] === "(" && arr[i + 1] === ")") {
            stack.push(true);
        } else {
            stack.push(false);
        }
    }

    return stack.every(item => item === true);
}

function showTextOnPage(str) {
    if (!checkItemType(str, "string")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    if (checkForBrackets(str)) {
        textBlock.textContent = str;
    } else {
        textBlock.textContent = "Error! Brackets are unbalanced."
        textBlock.style.color = "red";
    }
}

textBlock.addEventListener("copy", (e) => {
    alert("Copying is forbiden");
    e.preventDefault();
}, false);

showTextOnPage(contentText);

// Task 15
// Native JS

const inputField = document.querySelector("#phrase-input-field");
const resultBlock = document.querySelector("#phrase-result-block");
const list = document.querySelector('#list');

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
    const arrData = data.split(" ").filter(item => item !== '').map((item, i) => {
        if (i === 0) {
            return item.toUpperCase();
        }
        if (i === data.split(" ").length - 1 || i === data.split(" ").length - 2) {
            return item.toLowerCase();
        }
        return item;
    })
    arrData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.append(listItem);
    })
}

function countA() {
    let count = 0;
    let data = inputField.value;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'a') {
            count++;
        }
    }
    return count;
} 

const alertCountA = debounce(() => {
    alert(`Number of 'a' is ${countA()}`)
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


// Task 16
// Native JS

const resultField = document.querySelector('#result-field');
const passLengthRange = document.querySelector('#pass-length-range');
const passLengthValue = document.querySelector('#pass-length-value')
const generateBtn = document.querySelector('#pass-generate-btn');

passLengthRange.addEventListener("change", (e) => {
	passLengthValue.innerText = e.target.value;
});

generateBtn.addEventListener("click", () => {
	const passwordLength = passLengthRange.value;
    let generatedPass = "";

    do {
        generatedPass = generatePassword(passwordLength);
    }
    while (!checkPassValidity(generatedPass)); 
    resultField.value = generatedPass;
});

function generatePassword(passwordLength) {
	const generatedPassword = [];

	for (let i = 0; i < passwordLength; i++) {
        generatedPassword.push(getRandomChar());
	}

    generatedPassword[Math.floor(Math.random() * passwordLength)] = "_";

	return generatedPassword.join('');
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
        return false
    }

    return (countUpperChars >= 2 && countAllDigits <= 5);
}

function getRandomChar() {
	return String.fromCharCode(Math.floor(Math.random() * 90) + 33);
}

// Task 17
// Native JS

function changeElelementsOrder(arr) {
    if (!checkIfArray(arr) || !checkAllItemsTypes(arr, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    const sortedArr = arr.sort((a, b) => a - b);
	const oddIndex = [];
    const evenIndex = [];

    sortedArr.forEach((item, i) => {
        (i % 2) ? evenIndex.push(item) : oddIndex.push(item);
    })

    return oddIndex.concat(evenIndex.reverse());
}

// console.log(changeElelementsOrder([1,2,3,4,5]));
// console.log(changeElelementsOrder([1, 5, 9, 12, 54, 3, 9, 45, 10, 15, 2]));

// Task 17
// Lodash

function changeElelementsOrder(arr) {
    if (!_.isArray(arr) || !checkAllItemsTypes(arr, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    const sortedArr = _.sortBy(arr);
	const oddIndex = [];
    const evenIndex = [];

    _.forEach(sortedArr, function(item, i) {
        (i % 2) ? evenIndex.push(item) : oddIndex.push(item);
    })

    return _.concat(oddIndex, _.reverse(evenIndex));
}

// console.log(changeElelementsOrder([1,2,3,4,5]));
// console.log(changeElelementsOrder([1, 5, 9, 12, 54, 3, 9, 45, 10, 15, 2]));