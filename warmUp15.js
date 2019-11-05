// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(string) {
	var reversedArr = [];
	var count = 0;
	var reversedWord = "";
	var spacesCount = 0;

	for (var i = 0; i < (string.length); i++) {
		
		if (string[i] === ' ' ) {
			reversedArr[count] = reversedWord;
			reversedWord = '';
			count++;
		}
		if ( i === string.length - 1) {
			reversedWord += string[i];
			reversedArr[count] = reversedWord;
			break;			
		}
		reversedWord += string[i];
	}

	var reversedStr = "";
	for (var i = reversedArr.length - 1; i >= 0; i--) {
		if (i === 1) {
			reversedStr += reversedArr[i] + ' ';
		} else {
			reversedStr += reversedArr[i];
		}
	}
	return reversedStr;
}