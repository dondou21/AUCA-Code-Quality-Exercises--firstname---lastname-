
function solution(roman) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = values[roman[i]];
    const next = values[roman[i + 1]];

    // If the current value is smaller than the next, subtract it
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}

