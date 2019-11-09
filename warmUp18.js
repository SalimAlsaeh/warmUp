// You are given an input string.

// For each symbol in the string if it's the first character occurence,
// replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function symbolReplacer(string) {
	var stringArray = string.split('');
	var resultArray = [];
	var countsArray = [];
	var str = "";
	stringArray.forEach(function(element, index){
		if (resultArray.includes(element) === false) {
			var i = 1;
			resultArray.push(element);
			countsArray.push(i)
			str += countsArray[resultArray.indexOf(element)];
		} else {
			var index = resultArray.indexOf(element);
			countsArray[index] += 1;
			str += countsArray[index];
		}
	});
	return str;
}