/* 
String: Reverse
Given a string,
Return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */

function reverseString(str1) {
    return str1.split("").reverse().join("");
}
console.log()

function strReverse(str){
    /* Strings are immutable in JS!!! */
    /* dog -> split -> [d, o, g] */
    /* reverse -> [g, o, d] */
    /* join -> god */
    return str.split("").reverse().join("");
}



/*****************************************************************************/