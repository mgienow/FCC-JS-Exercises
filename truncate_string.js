/* function truncateString(str, num) {
  // Clear out that junk in your trunk
  let newStr;
  if(str.length>num){
    if(num<=3){
      newStr=`${str.slice(0, num)}...`;
       } else {
        newStr=`${str.slice(0, (num-3))}...`;
      }
    }else {
      newStr=str;
    }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
    */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  let newStr;
  if(str.length>num){
    if(num<=3){
      newStr=`${str.slice(0, num)}...`;
       } else {
        newStr=`${str.slice(0, (num-3))}...`;
      }
    }else {
      newStr=str;
    }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) should return "A...".
truncateString("Absolutely Longer", 2) should return "Ab...".

