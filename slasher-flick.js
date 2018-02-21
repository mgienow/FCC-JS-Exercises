/*
Return the remaining elements of an array after chopping off n elements from the head. The head means the beginning of the array, or the zeroth index.

This challenge is a good demonstration of slice(x,y), which removes y number of items from an array starting at index position x, and returns the mutated array.

Different from splice(x,y), which returns a new array consisting of items ("copied") from the origin array starting at position x and continuing, but not including, position y.
*/

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2) should return [3].
slasher([1, 2, 3], 0) should return [1, 2, 3].
slasher([1, 2, 3], 9) should return [].
slasher([1, 2, 3], 4) should return [].
slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].