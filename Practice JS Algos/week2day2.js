/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "abba"
const expected5 = "ab"
const expected5_bonus = "ba"


/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    obj = {};
    newStr = "";
    repeat = "";
    for (var i = 0; i < str.length; i++)
        if(!obj[str[i]]) {
            obj[str[i]] = 1;
            newStr+=str[i];
        }
        else
            repeat += str[i]
    if (repeat.length == newStr.length)
        newStr = repeat;
    return newStr;
}
console.log(stringDedupe(str2))

// function stringDedupe(str) {
//     newStr = "";

//     for (var i = 0; i < str.length; i++) {
//         if (newStr.indexOf(str[i]) == -1) {
//             newStr += str[i]
//         }
//     }
//     return newStr
// }
//     for (var i = str.length-1; i >= 0; i--) {
//         if(newStr.indexOf(str[i]) == -1){
//             newStr = str[i] + newStr
//         }
//     }
//     return newStr
// }


// console.log(stringDedupe(str5))

/*****************************************************************************/