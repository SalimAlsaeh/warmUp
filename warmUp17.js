// There is a special keyboard with all keys in a single row.
// ​
// Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0.
// To type a character, you have to move your finger to the index of the desired character. 
//The time taken to move your finger from index i to index j is |i - j|.
// ​
// You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.
// ​
 
// ​
// Example 1:
// ​
// Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
// Output: 4
// Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
// Total time = 2 + 1 + 1 = 4. 
// Example 2:
// ​
// Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
// Output: 73
 
// ​
// Constraints:
// ​
// keyboard.length == 26
// keyboard contains each English lowercase letter exactly once in some order.
// 1 <= word.length <= 10^4
// word[i] is an English lowercase letter.

// ​
// ​
var calculateTime = function(keyboard, word) {
	if (keyboard.length === 26 && word.length >= 1 && word.length <= 10000 ) {
		var charIndexesArray = [];
		var keyboardArray = keyboard.split('');
		var wordArray = word.split('');
		wordArray.forEach(function(element, index){
			charIndexesArray.push(keyboardArray.indexOf(element));
		});
		var time = charIndexesArray[0]; // adding the time of travel of the first letter
		// adding the time of travel between the chars
		for (var i = 0; i < charIndexesArray.length - 1; i++) {
			for (var j = i + 1; j < i + 2; j++) {
				time += positify(charIndexesArray[i] - charIndexesArray[j]);
			}
		}

		return time;
	}
};

// a fucntion to return a poitive number between the addition of indexes
function positify(num) {
	if(num < 0) {
		return (-1 * num);
	}
	return num;
	
}

// 22 +  15 + 15 + 4 + 13 + 25 + 14 + 15
// i=22  , i = 15, i = 15,          i = 4 ,       i= 13,  i = 25  i = 14  , i = 15
// 22 + (22-15) + (15 - 15 ? 0 = 15)  + (15-4) + (4-13), (13 - 25),  (25 - 14) , (14 - 15) 