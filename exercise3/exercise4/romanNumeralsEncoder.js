function solution(number){
  const numbers = [
    1000, 900, 500, 400,100, 90, 50, 40,10, 9, 5, 4, 1
  ];

  const letters = [
    "M", "CM", "D", "CD","C", "XC", "L", "XL","X", "IX", "V", "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < numbers.length; i++) {
    while (number >= numbers[i]) {
      number -= numbers[i];
      result += letters[i];
    }
    
}
    return result;

}