// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function ballon(text) {
	var ballonObjectArray = [{char: 'b', count: 0, ballonCount: 0},{char: 'a', count: 0, ballonCount: 0},
	{char: 'l', count: 0, ballonCount: 0},{char: 'o', count: 0, ballonCount: 0},{char: 'n', count: 0, ballonCount: 0}];

	var ballonCount = 0;

	if(text.length >= 1 && text.length <= 10000) {

		for (var i in text) {
			var char = text[i];
			ballonObjectArray.forEach( function(element){
				if (element['char'] === char) {
					element['count'] += 1;
				}
			});
		}

		ballonObjectArray.forEach(function(element){
				if (element['char'] === 'b' || element['char'] === 'a' || element['char'] === 'n') {
					while(element['count'] > 0) {
						element['ballonCount'] += 1;
						element['count'] -= 1;
						ballonCount +=1;
					}
				}
		});
		ballonObjectArray.forEach(function(element){
				if (element['char'] === 'l' || element['char'] === 'o') {
				
					while(element['count'] > 0) {
						element['ballonCount'] += 1;
						element['count'] -= 2;
						ballonCount += 1;
					}
				}
		});
	}
	ballonCount = Math.floor(ballonCount / 5);
	return ballonCount;
}