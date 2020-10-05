/*
We've sent out two researchers to determine, on a scale of 1-10, how much people like lighthouses and they are hitting the streets of Canada to find out what people think.

Both researchers have stored their numbers in array for each location. This means that we have two different arrays of data for every single location, but we only want a single array for each location. We're going to have to concatenate the arrays from both researchers into a single array.

We've made a mistake, our researchers had already sorted the arrays for us, from least liked to most liked—but our concat function didn't take this into account. We'll need to create a new function that keeps our data sorted.
*/
function merge(array1 , array2){
  var newArray = array1.concat(array2);
  return newArray.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));