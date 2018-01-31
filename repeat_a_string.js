// Repeat a given string (first argument) num times (second argument). 
// Return an empty string if num is not a positive number.
// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".


function repeatStringNumTimes(str, num) {
  let strHolder = '';
  for(let i=0; i<num; i++){
    strHolder += str;
  }
  return strHolder;
}

//Using the string.prototype method .repeat():

function repeatStringNumTimes(str, num){
  let strHolder ='';
  if(num>0){
    strHolder= str.repeat(num)
  }
  return strHolder;
}