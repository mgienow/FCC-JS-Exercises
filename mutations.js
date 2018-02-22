/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". */

function mutation(arr) {
  //first, take each of the 2 elements of the array passed as argument and assign to individual variables and render to lower case;
  let target = arr[0].toLowerCase();
  let doYouContainMe = arr[1].toLowerCase();
  
  //iterate over the target string, comparing each letter from the doYouContainMet test string; indexOf() returns the index position of a letter if it appears, and -1 if it does not. So if ANY target.indexOf(doYouContainMe[i]) returns -1, the test condition is me and the IF statement returns false and the function terminates. Otherwise, if everything passes, we exit the for loop and return true.
  
  for(var i=0; i<doYouContainMe.length; i++)
  if(target.indexOf(doYouContainMe[i]) === -1){
    return false;
  }
  return true;
}

mutation(["hello", "hey"]);

//or a solution using every(), which returns a boolean, instead of forEach(), to get rid of the FOR loop:

function mutation(arr) {
  //first, render the second arg array (doYouContainMe) to lower case and split into a new array of single letters. 
  
  return arr[1].toLowerCase()
          .split('')
  //Then, use every() to iterate each item -- 'letter', in the callback -- in that single letter version of arr[1] to see if it appears in the target, or first, arg. Render that arg to lower case, then if indexOf returns a value that is NOT -1, i.e. the letter IS PRESENT in the target arg, our original case will evaluate to true. If it evaluates to -1 even once, then every() returns false.
          .every(function(letter){
            return arr[0].toLowerCase()
                   .indexOf(letter) != -1
  })
 
}
mutation(["hello", "hey"]);


/* 
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.

 */