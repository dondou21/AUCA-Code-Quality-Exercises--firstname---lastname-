function reverseVowels(str) {
  const vowels = 'aeiouAEIOU';
  const arr = str.split('');
  
  // Extract vowels and reverse them
  const vowelChars = arr.filter(char => vowels.includes(char)).reverse();
  let vowelIndex = 0;
  
  // Replace vowels in original order with reversed vowels
  const newStr = arr.map(char => {
    if (vowels.includes(char)) {
      return vowelChars[vowelIndex++];
    }
    return char;
  })
  
  return newStr.join('');
}