/**
 * NOTE 
 * All tasks are placed in different scripts/modules in the folder "modules" 
 * with the correspondent names
 * e.g. Task 1 in file "task1.js" 
 * Current "main.js" file is used for Webpack as entry point and contains 
 * function calls and tests of the functionality
 * Feel free to add your own tests below.
 * Please don't make any changes in the module imports code.
 */

import {getDifference, getDifferenceLodash} from './modules/task1';
import {getArrayWithWords, getArrayWithWordsLodash} from './modules/task2';
import {checkForEnding, checkForEndingLodash} from './modules/task3';
import {getAdjacentPairAverageReduce, getAdjacentPairAverageForEach, getAdjacentPairAverageLodash} from './modules/task4';
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
import {showTextOnPage} from './modules/task14';
import {postInputOnPage} from './modules/task15';
import {generatePassword} from './modules/task16';
import {changeElelementsOrder, changeElelementsOrderLodash} from './modules/task17';


// Task1:
console.groupCollapsed("Task 1");
    // Native JS:
    console.log("Native JS:", getDifference([1, 2, 3, -4]));
    console.log("Native JS:", getDifference([16]));
    // Lodash:
    console.log("Lodash:", getDifferenceLodash([3, 6, 4, 43, -12]));
    console.log("Lodash:", getDifferenceLodash([]));
console.groupEnd();

// Task2 
console.groupCollapsed("Task 2");
    // Native JS:
    console.log("Native JS:", getArrayWithWords('Lorem, ipsum dolor sit amet consectetu, ex minus sunt', 6))
    // Lodash:
    console.log("Lodash:", getArrayWithWordsLodash('Lorem, ipsum dolor sit amet consectetu adipisicin elit', 8));
console.groupEnd();

// Task3 
console.groupCollapsed("Task 3");
    //Native JS:
    console.log("Native JS:", checkForEnding('abc', 'bc'));
    console.log("Native JS:", checkForEnding('abc', 'd'));
    // Lodash:
    console.log("Lodash:", checkForEndingLodash('abc', 'bc'));
    console.log("Lodash:", checkForEndingLodash('abc', 'd'));
console.groupEnd();

// Task4 
console.groupCollapsed("Task 4");
    // Native JS with reduce
    console.log("Native JS with reduce:", getAdjacentPairAverageReduce([1, 3, 5, 1, -10]));
    console.log("Native JS with reduce::", getAdjacentPairAverageReduce([2, -2, 2, -2, 2]));
    // Native JS withforEach
    console.log("Native JS with forEach:", getAdjacentPairAverageForEach([1, 3, 5, 1, -10]));
    console.log("Native JS with forEach:", getAdjacentPairAverageForEach([2, -2, 2, -2, 2]));
    // Lodash:
    console.log("Lodash:", getAdjacentPairAverageLodash([1, 3, 5, 1, -10]));
    console.log("Lodash:", getAdjacentPairAverageLodash([2, -2, 2, -2, 2]));
console.groupEnd();


// Task5 
console.groupCollapsed("Task 5");
    // Native JS with ReqExp
    console.log("Native JS with RegExp:", countVowelsReqExp("Celebration"));
    console.log("Native JS with RegExp:", countVowelsReqExp("Palm"));
    // Native JS with forEach
    console.log("Native JS with forEach:", countVowels("Celebration"));
    console.log("Native JS with forEach:", countVowels("Palm"));
console.groupEnd();

// Task5-a
console.groupCollapsed("Task 5-2");
    // Native JS:
    console.log("Native JS:", removeABC("This might be a bit hard"));
    console.log("Native JS:", removeABC("hello world!"));
console.groupEnd();

// Task6
console.groupCollapsed("Task 6");
    // Native JS:
    console.log("Native JS:", findUnique([1, 2, 3], [100, 2, 1, 10]));
    // Task6 Lodash:
    console.log("Lodash:", findUniqueLodash([1, 2, 3], [100, 2, 1, 10]));
console.groupEnd();

// Task7 
console.groupCollapsed("Task 7");
    //Native JS:
    console.log("Native JS:", changeKeysWithValues({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
console.groupEnd();

// Task8 
console.groupCollapsed("Task 8");
    // Native JS:
    console.log("Native JS:", calculateInsuranceDifference({"baseball bat": 20}, 5));
    console.log("Native JS:", calculateInsuranceDifference({ skate: 10, painting: 20 }, 19));
    console.log("Native JS:", calculateInsuranceDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
console.groupEnd();

// Task9 
console.log("Task 9 --> implemented on the page");
// Native JS:
checkIfBrickFits();

// Task10 
console.groupCollapsed("Task 10");
    // Native JS:
    console.log("Native JS:", getFileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));
console.groupEnd();

// Task11 
console.groupCollapsed("Task 11");
    //Native JS:
    console.log("Native JS:", checkStrings('irina', 'rinai'));
    console.log("Native JS:", checkStrings('irina', 'inira'));
    // Lodash:
    console.log("Lodash:", checkStringsLodash('irina', 'rinai'));
    console.log("Lodash:", checkStringsLodash('irina', 'inira'));
console.groupEnd();

// Task12 
console.groupCollapsed("Task 12");
    // Native JS:
    console.log("Native JS:", composeArrays([2, 9, 6, 8, 5, 3]));
    console.log("Native JS:", composeArrays([-1950, 1960, -1970, 1980, -1990, 2000, -2010, 1988]));
    // Lodash:
    console.log("Lodash:", composeArraysLodash([2, 9, 6, 8, 5, 3])); 
    console.log("Lodash:", composeArraysLodash([-1950, 1960, -1970, 1980, -1990, 2000, -2010, 1988]));
console.groupEnd();

// Task13 
console.groupCollapsed("Task 13");
    // Native JS:
    const stringInitial = "quisquam 34578 like so: https://t.co/74DfkMG5FB dolLOibus sdfsdfr@gmail.com blanditiis SApiente dolore 123 maXime"
    console.log("Native JS:", composeNewString(stringInitial));
    /** Test case for having new string longer than initial one
     * it is commented not to have alert popping up every 5 seconds*/ 
    // console.log(composeNewString('quisquam 34578 like so: https://t.co/74 sdfsdfr@gmail.com bland SApiente dolore 123 maXime'))
console.groupEnd();

// Task14 
console.log("Task 14 --> implemented on the page");
// Native JS:
const contentText =
"Lorem ipsum dolor sit amet ((consectetur adipisicing elit)). Exercitationem expedita recusandae,  (sapiente quasi?) Ipsa, atque nesciunt. (Cum dicta), placeat soluta adipisci iste assumenda tempore?";
showTextOnPage(contentText);

// Task15 
console.log("Task 15 --> implemented on the page");
//Native JS:
postInputOnPage();

// Task16 
console.log("Task 16 --> implemented on the page");
//Native JS:
generatePassword();

// Task17 
console.groupCollapsed("Task 17");
    // Native JS:
    console.log("Native JS:", changeElelementsOrder([1,2,3,4,5]));
    console.log("Native JS:", changeElelementsOrder([1, 5, 9, 12, 54, 3, 9, 45, 10, 15, 2]));
    // Lodash:
    console.log("Lodash:", changeElelementsOrderLodash([1,2,3,4,5]));
    console.log("Lodash:", changeElelementsOrderLodash([1, 5, 9, 12, 54, 3, 9, 45, 10, 15, 2]));
console.groupEnd();