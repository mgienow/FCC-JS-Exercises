/*Return Largest Numbers in Arrays
Return an array consisting of the largest
number from each provided sub-array.
For simplicity, the provided array will
contain exactly 4 sub-arrays.
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
*/
function largestOfFour(arr) {
  // initialize newArray to hold results of comparison
  let newArray=[]
  //for loop with holder variable initialized at 0
  for(var i=0; i<arr.length; i++){
    let holder = 0
    //second nested for loop to access the inner contents of each individual array in arr argument
   for(let j=0; j<arr[i].length; j++){
     //if the value of the number at index [i][j] is greater than holder, holder is reassigned the value of that number
    if(arr[i][j]>holder){
      holder = arr[i][j]
    }
   }
   //having iterated all index positions in arr[i], exit the for loop and push value of holder to the new array
    newArray.push(holder)
  }
  return newArray
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);