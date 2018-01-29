
function confirmEnding(str, target) {
 let length = target.length;
  if(str.substr(-length) === target){
    return true;
  } else{
  return false;
  }
}

confirmEnding("Bastian", "n");
// ES6 has the endsWith() method:
function confirmEnding(str, target){
  if (str.endsWith(target)){
    return true
  } else {
    return false
  }
}

/*Check if a string (first argument, str) 
ends with the given target string (second argument, target).

confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.

*/