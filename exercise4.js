/**
 * function findEvenNumbers(numbers) {
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
 */

function findEvenNumbers(numbers) {
    return numbers.filter((number) => number%2 === 0)
}

console.log(findEvenNumbers([2,3,5,7,6,8,9]))