import {getDifference, getDifferenceLodash} from './modules/task1';
import {getArrayWithWords, getArrayWithWordsLodash} from './modules/task2';
import {checkForEnding, checkForEndingLodash} from './modules/task3';
import {getAverageReduce, getAverageForEach, getAverageLodash} from './modules/task4';
import {countVowelsReqExp, countVowels} from './modules/task5';
import {removeABC} from './modules/task5-2';
import {findUnique, findUniqueLodash} from './modules/task6';
import {changeKeysWithValues} from './modules/task7';
import {calculateInsuranceDifference} from './modules/task8';
import {checkIfBrickFits} from './modules/task9';
import {getFileName} from './modules/task10';
import {checkStrings, checkStringsLodash} from './modules/task11';
import {composeArrays, composeArraysLodash} from './modules/task12';
import {composeNewString} from './modules/task13';
import {checkBracketsBalance} from './modules/task14';
import {makeInput} from './modules/task15';
import {createPassword} from './modules/task16';
import {changeElelementsOrder, changeElelementsOrderLodash} from './modules/task17';


// Task1 Native JS:
console.log(getDifference([1, 2, 3, -4]));
console.log(getDifference([16]));

// Task1 Lodash:
console.log(getDifferenceLodash([1, 2, 3, -4]));
console.log(getDifferenceLodash([16]));

// Task2 Native JS:
console.log(getArrayWithWords('Lorem, ipsum dolor sit amet consectetu, ex minus sunt', 6))

// Task2 Lodash:
console.log(getArrayWithWordsLodash('Lorem, ipsum dolor sit amet consectetu adipisicin elit', 8));

// Task3 Native JS:
console.log(checkForEnding('abc', 'bc'));
console.log(checkForEnding('abc', 'd'));

// Task3 Lodash:
console.log(checkForEndingLodash('abc', 'bc'));
console.log(checkForEndingLodash('abc', 'd'));

// Task4 Native JS:
// With reduce
console.log(getAverageReduce([1, 3, 5, 1, -10]));
console.log(getAverageReduce([2, -2, 2, -2, 2]));

// With forEach
console.log(getAverageForEach([1, 3, 5, 1, -10]));
console.log(getAverageForEach([2, -2, 2, -2, 2]));

// Task4 Lodash:
console.log(getAverageLodash([1, 3, 5, 1, -10]));
console.log(getAverageLodash([2, -2, 2, -2, 2]));

// Task5 Native JS:
// With ReqExp
console.log(countVowelsReqExp("Celebration"));
console.log(countVowelsReqExp("Palm"));

// With forEach
console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));

// Task5-a Native JS:
console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));

// Task6 Native JS:
console.log(findUnique([1, 2, 3], [100, 2, 1, 10]));

// Task6 Lodash:
console.log(findUniqueLodash([1, 2, 3], [100, 2, 1, 10]));

// Task7 Native JS:
console.log(changeKeysWithValues({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// Task8 Native JS:
console.log(calculateInsuranceDifference({"baseball bat": 20}, 5));
console.log(calculateInsuranceDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateInsuranceDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// Task9 Native JS:
console.log(checkIfBrickFits(1, 1, 1, 1, 1));
console.log(checkIfBrickFits(1, 2, 1, 1, 1));
console.log(checkIfBrickFits(1, 2, 2, 1, 1));

// Task10 Native JS:
console.log(getFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// Task11 Native JS:
console.log(checkStrings('irina', 'rinai'));
console.log(checkStrings('irina', 'inair'));
console.log(checkStrings('irina', 'inira'));

// Task11 Lodash:
console.log(checkStringsLodash('irina', 'rinai'));
console.log(checkStringsLodash('irina', 'inair'));
console.log(checkStringsLodash('irina', 'inira'));

// Task12 Native JS:
console.log(composeArrays([2, 9, 6, 8, 5, 3]));
console.log(composeArrays([1950, 1960, 1970, 1980, 1990, 2000, 2010, 1988]));
console.log(composeArrays([-1950, -1960, -1970, -1980]));

// Task12 Lodash:
console.log(composeArraysLodash([2, 9, 6, 8, 5, 3])); 
console.log(composeArraysLodash([1950, 1960, 1970, 1980, 1990, 2000, 2010, 1988]));
console.log(composeArraysLodash([-1950, -1960, -1970, -1980]));

// Task13 Native JS:
console.log(composeNewString('quisquam 34578 like so: https://t.co/74DfkMG5FB dolLOibus sdfsdfr@gmail.com blanditiis SApiente dolore 123 maXime'))
// console.log(composeNewString('quisquam 34578 like so: https://t.co/74 sdfsdfr@gmail.com bland SApiente dolore 123 maXime'))

// Task14 Native JS:
checkBracketsBalance();

// Task15 Native JS:
makeInput();

// Task16 Native JS:
createPassword();

// Task17 Native JS:
console.log(changeElelementsOrder([1,2,3,4,5]));
console.log(changeElelementsOrder([1, 5, 9, 12, 54, 3, 9, 45, 10, 15, 2]));

// Task17 Lodash:
console.log(changeElelementsOrderLodash([1,2,3,4,5]));
console.log(changeElelementsOrderLodash([1, 5, 9, 12, 54, 3, 9, 45, 10, 15, 2]));