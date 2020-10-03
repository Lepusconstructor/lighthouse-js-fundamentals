function ageCalculator (name, yearOfBirth, currentYear){
  var nameAndAge = name + " is " + (currentYear-yearOfBirth) + " years old.";
  return nameAndAge;
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));