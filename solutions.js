/* 1.a. Write a function called countOccurrences that
 takes an array of numbers and a number as input and returns 
 the number of times the input number occurs in the array.  

 */

const arr = [4, 2, 6, 8, 4, 1, 4];
console.log(countOccurrences(arr, 4));
function countOccurrences(arr, number) {
  let filterArr = arr.filter((el) => el === number);
  return filterArr.length;
}

/* 

1.b. Write a function called filterByLength that 
takes an array of strings and a number as input
and returns an array of all the strings in the input array whose length is
greater than or equal to the input number.
*/

// ["banana", "cherry", "elderberry"]
 const filterByLength = (arr, number) => {
    let filterdata = arr.filter(el => el.length >= number)
    return filterdata;
 }

 const fruitArray = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(filterByLength(fruitArray, 6));


