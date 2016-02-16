/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

var plusOneSum = function(arr) {
  var cnt = 0;
  for(var i = 0; i < arr.length; i++) {
    cnt += 1 + arr[i];
  }
  return cnt;
}
plusOneSum([1,2,3,4]);


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

var flatten = function(arr) {
  var flatarr = arr.slice(0, arr.length);

  for (var i = 0; i < flatarr.length; i++) {
    if(flatarr[i].length !== undefined) {
      var addElems = flatten(flatarr[i]);
      flatarr.splice(i, 1);
      
      for(var j = addElems.length - 1; j >= 0; j--) {
        flatarr.splice(i,0,addElems[j]);
      }
    }
  }
  return flatarr;
}
flatten([1, 2, [3, [4], 5, 6], 7]); // [1, 2, 3, 4, 5, 6, 7]


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

var multipleArr = function(arr) {
  var As = [];
  var Bs = [];
  var Cs = [];

  for (var i = 0; i < arr.length / 3; i++) {
    As.push(arr[i]);
  }
  
  for (var i = arr.length / 3; i < arr.length * 2 / 3; i++) {
    Bs.push(arr[i]);
  }
 
  for (var i = arr.length * 2 / 3; i < arr.length; i++) {
    Cs.push(arr[i]);
  }
 
  var reOrder = [];
  for (var i = 0; i < As.length; i++) {
    reOrder.push(As[i],Bs[i],Cs[i]);
  }
  return reOrder;
}

multipleArr(['a1','a2','a3','aN','b1','b2','b3','bN','c1','c2','c3','cN']);


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

var findMissing = function(origArray, shuffArray) {
  for (var i = 0; i < origArray.length; i++) {
     if(shuffArray.indexOf(origArray[i]) === -1) {
       return origArray[i];
     }
  }
}
        



/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
var longestWords = function(sentence) {
  var words = sentence.split(' ');
  var longestWord = words[0];
  
  for (var i = 1; i < words.length; i++) {
    if(words[i].length > longestWord.length) {
      longestWord = words[i];
    }
   }
   return longestWord;
}
longestWords("You are just an old antidisestablishmentarian"); // ["antidisestablishmentarian"]


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

var sumMultiples = function(num1, num2) {
  var multiples = [];

  for (var i = 1; i < 1000; i++) {
    if(i % num1 === 0 || i % num2 === 0) {
      multiples.push(i);
    }
  }
   
  var sum = 0;
  for (var i = 0; i < multiples.length; i++) {
    sum += multiples[i];
  }
  return sum;
}
sumMultiples(3,5);


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/
var removeDupChars = function(str) {
  var chars = str.split('');
  for (var i = 0; i < chars.length; i++) {

    if(chars.indexOf(chars[i]) !== i) {
      chars.splice(i, 1);
      i--;
    }
  }
  return chars.join('');
}

removeDupChars('tree traversal');

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum(num1, num2) {
  if (!isNaN(num1) && !isNaN(num2)) {
    return num1 + num2;
  } else {
    return function(num2) {
      return num1 + num2;
    }
  }
}

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5


