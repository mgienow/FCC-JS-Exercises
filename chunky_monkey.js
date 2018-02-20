/*
Write a function that splits an array (first argument) into 
groups the length of size (second argument) and returns
 them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr=[];
  for(var i=0; i<arr.length; i=i+size){
    newArr.push(arr.slice(i, (i+size)));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

/*
logic: starting i at 0, incrementing by value of 'size'.
then slicing arr starting at position i and ending at position i+size
slice(x,y) returns a new array containing whatever items in source array began at
index position x and go through -- but not including -- position y.
*/