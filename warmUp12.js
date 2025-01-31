/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of 
    an array/list comprised of two integers.

    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 function mysteryRange(inputString, range){
    var arr = [];
    var minimum;
    var maximum;
    
    if (range >= 10) {
        for (var i = 0; i < inputString.length; i++) {
        if (typeof Number(inputString[i])  === "number") {
            if (Number(inputString[i])  === 1 ) {
                arr.push(Number(inputString[i] + inputString[i+1]));
                i = i + 1;
            } else {
                arr.push(Number(inputString[i]));
            }
        }
      }
    } else{
        for (var i = 0; i < inputString.length; i++) {
            if (typeof Number(inputString[i])  === "number") {
                 arr.push(Number(inputString[i]));
            }
        }
    }

    var rangeArr = [];
    minimum = arr[0];
    maximum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (minimum > arr[i]) {
            minimum = arr[i];
        }
        if (maximum < arr[i]) {
            maximum = arr[i];
        }
    }
    console.log(minimum, maximum)
    rangeArr.push(minimum, maximum);

    return rangeArr;
 }