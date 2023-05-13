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
  let filterdata = arr.filter((el) => el.length >= number);
  return filterdata;
};

const fruitArray = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(filterByLength(fruitArray, 6));

/* 
Write a function called sumOfPrimes that takes a number as 
input and returns the sum of all prime numbers less than or 
equal to the input number.

*/
function sumOfPrimes(number) {
  /*
 ? check prime number 
? if number is prime add on value of sum variable 
 */

  let sum = 2;
  let arrSum = [2]
  for (let i = 2; i <= number; i++) {
    if (i % 2 !== 0) {
        arrSum.push(i)
      sum = sum + i;
    }
  }
  console.log(arrSum, "arrSum")
return sum;
}

console.log(sumOfPrimes(13));
17; // 2 + 3 + 5 + 7 = 17
