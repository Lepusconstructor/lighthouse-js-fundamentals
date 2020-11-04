/*range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples.

The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".
*/ 

/* This worked in node but not compass
function loopyLighthouse (range, multiples, words){
  let result = [];
  for (var i = range[0]; i <= range[1];i++){
    if (i % multiples[0] === 0 && i % multiples[1] === 0){
      result.push(words[0] + words[1]) ;
    } else if (i % multiples[0] === 0){
      result.push(words[0]);
    } else if (i % multiples[1] === 0){
      result.push(words[1]);
    } else {
      result.push(i);
    }
  }
  return result;
}
  


console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
//console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
*/

//The following works for compass
function loopyLighthouse (range, multiples, words){
  
  for (var i = range[0]; i <= range[1];i++){
    if (i % multiples[0] === 0 && i % multiples[1] === 0){
     console.log(words[0] + words[1]) ;
    } else if (i % multiples[0] === 0){
      console.log(words[0]);
    } else if (i % multiples[1] === 0){
      console.log(words[1]);
    } else {
      console.log(i);
    }
  
  }
  
}
  


console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
//console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));