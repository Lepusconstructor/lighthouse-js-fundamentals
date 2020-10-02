/*
Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
*/
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

/* const chooseStations = function (stations) {
  let goodStations = [];
  for (var element of stations){
    let venueType = element[2];
    if (venueType === "school" || venueType === "community centre"){
      let capacity = element[1];
      if (capacity >= 20){
        
        goodStations.push(element[0]);
      } 
      
    }
    
  }  
  return goodStations;
};
*/
const chooseStations = function (stations) {
  let goodStations = [];
  for (var element of stations){
    let venueType = element[2];
    let capacity = element[1];
    let name = element[0];
    if ((capacity >= 20) && (venueType === "school" || venueType === "community centre")){
      goodStations.push(element[0]);
    }
    
  }  
  return goodStations;
};
console.log(chooseStations(stations));
