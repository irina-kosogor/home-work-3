import {checkItemType} from "./utils";

// Task #2
// Native JS

export function getArrayWithWords(str, num) {
    if (!checkItemType(str, "string") || !checkItemType(num, "number")) {
        console.error(`Not all the values have a valid type`);
        return;
    }

    return str.split(" ").filter(item => item.length > num);
}

// Task #2
// Lodash

export function getArrayWithWordsLodash(str, num) {
    if (!_.isString(str) || !_.isNumber(num)) {
        console.error(`Not all the values have a valid type`);
        return;
    }
    
    const arr = _.split(str, " ");
    return _.filter(arr, (item) => item.length > num);
}

