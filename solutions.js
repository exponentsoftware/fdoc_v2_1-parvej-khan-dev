/* 1.a. Write a function called countOccurrences that
 takes an array of numbers and a number as input and returns 
 the number of times the input number occurs in the array.  

 */

 const arr = [4, 2, 6, 8, 4, 1, 4];
console.log(countOccurrences(arr, 4));
function countOccurrences(arr, number){
    let filterArr = arr.filter(el => el === number)
    return filterArr.length
}
