function lastIndexOf (array,element) {
  for (var i = array.length - 1 ; i >= 0 ; i--){
    if (array[i] === element) {
      return i;
      
    }
    
  }
  if (array[i] !== element) {
    return -1;
  } 
  
}

/*
function lastIndexOf(array, num) {
  for (var i = array.length - 1; i >= 0; i --) {
    if (array[i] === num) {
       return i;
      
    } 

  }
  if (array[i] !== num) {
    return -1 } 
}
*/
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3));