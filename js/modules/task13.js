import {checkItemType} from './utils';
// Task 13
// Native JS

export function composeNewString(str) {
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

