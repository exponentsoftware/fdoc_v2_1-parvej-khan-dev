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
  let arrSum = [2];
  for (let i = 2; i <= number; i++) {
    if (i % 2 !== 0) {
      arrSum.push(i);
      sum = sum + i;
    }
  }
  console.log(arrSum, "arrSum");
  return sum;
}

console.log(sumOfPrimes(13));
17; // 2 + 3 + 5 + 7 = 17

/* 
*Write a function called longestIncreasingSubsequence that takes an array of numbers as input 
*and returns the length of the longest increasing subsequence in the array. A subsequence is a 
*sequence that can be derived from another sequence by deleting some or no elements without changing 
* the order of the remaining elements.

const arr = [1, 4, 2, 5, 3];



*/
const arr2 = [1, 4, 2, 5, 3];
console.log(longestIncreasingSubsequence(arr2));
3; // the longest increasing subsequence is [1, 4, 5]
function longestIncreasingSubsequence(Arr) {
  for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
      if (Arr[i] < Arr[j]) {
        var x = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = x;
      }
  console.log(Arr);
}

/* 
2.a. Write a function called findPairs that takes an array of integers and a number as input and returns an array of all pairs of integers in the input array whose sum is equal to the input number.

*/
const arr3 = [3, 4, 6, 8, 1, 2,7, 9];
console.log(findPairs(arr3, 10));
// [[3, 7], [4, 6], [8, 2], [1, 9]]

function findPairs(arr, number) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === number) {
        stack.push([arr[i], arr[j]]);
      }
    }
  }

  console.log(stack, "stack");
}
