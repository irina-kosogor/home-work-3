'use strict';

// Function for checking data types used in further code

function checkAllItemsTypes(arr, dataType) {
    return arr.every(item => typeof item === dataType);
}

function checkItemType(item, dataType) {
    return typeof item === dataType;
}

// Task #1

// Native JS

function getDifference (arr) {
    if (arr.length <= 1) {
        return 0;
    }
    
    if (!checkAllItemsTypes(arr, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return Math.max(...arr) - Math.min(...arr);
}

//Lodash

function getDifferenceLodash (arr) {
    if (arr.length <= 1) {
        return 0;
    }

    if (!checkAllItemsTypes(arr, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return _.max(arr) - _.min(arr);
}

// Task #2

// Native JS

function getArrayWithWords(str, num) {
    if (!checkItemType(str, "string") || !checkItemType(num, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return str.split(" ").filter(item => item.length > num);
}

// Lodash

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

// Task 4
// Native JS

// With reduce
// function getAverage(arr) {
//     return arr.reduce((acc, curr, idx, arr) => {
//         if (idx === arr.length - 1) {
//             return acc;
//         } 
//             acc.push((curr + arr[idx + 1]) / 2);
//         return acc;
//     }, [])

// }

// With forEach
function getAverage(arr) {
	const tempArr = [];
	arr.forEach((item, i, arr) => {
		if (i === arr.length - 1) {
			return;
		}
		tempArr.push((item + arr[i + 1]) / 2);
	});
	return tempArr;
}

// console.log(getAverage([1, 3, 5, 1, -10]));
// console.log(getAverage([2, -2, 2, -2, 2]));

// Task 5
// Native JS

// With ReqExp

// function countVowels(str) {
// 	const matches = str.toLowerCase().match(/[aeiouy]/gi);
// 	return matches ? matches.length : 0;
// }

// With forEach

function countVowels(str) {
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
	return Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
}

// console.log(findUnique([1, 2, 3], [100, 2, 1, 10]));

// Task 7
// Native JS

function changeKeysWithValues(obj) {
	const changedObj = {};

	for (let key in obj) {
		changedObj[obj[key]] = key;
	}

	return changedObj;
}

// console.log(changeKeysWithValues({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// Task 8
// Native JS

function calculateInsuranceDifference(obj, limit) {
	let diffeernce = 0;
    for (let key in obj) {
        diffeernce += obj[key];
    }
    return diffeernce - limit;
}

// console.log(calculateInsuranceDifference({"baseball bat": 20 }, 5));
// console.log(calculateInsuranceDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateInsuranceDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// Task 9
// Native JS

function checkIfBrickFits(a, b, c, w, h) {
   return (a <= w && c <= h);
}

// console.log(checkIfBrickFits(1, 1, 1, 1, 1));
// console.log(checkIfBrickFits(1, 2, 1, 1, 1));
// console.log(checkIfBrickFits(1, 2, 2, 1, 1));

// Task 10
// Native JS

function getFileName(url) {
  let fileName = url.split('\\');
  return fileName[fileName.length - 1].split(".")[0];
}

// console.log(getFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// Task 11
// Native JS

function checkStrings(str1, str2) {
    return str1.length === str2.length && str2.repeat(2).includes(str1);
}

// console.log(checkStrings('irina', 'rinai'));
// console.log(checkStrings('irina', 'inair'));
// console.log(checkStrings('irina', 'inira'));

// Task 12
// Native JS

function composeArrays(a) {
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

  return `Array b: [${b}]; array c: [${c}]`;
}

// console.log(composeArrays([2, 9, 6, 8, 5, 3]));
// console.log(composeArrays([1950, 1960, 1970, 1980, 1990, 2000, 2010, 1988]));
// console.log(composeArrays([-1950, -1960, -1970, -1980]));

// Task 13
// Native JS

function composeNewString(str) {
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





