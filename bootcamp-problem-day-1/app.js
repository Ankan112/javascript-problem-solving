/* Problem 1 */

const stringOutput = `Recently I heard that you’ve achieved 95% marks in your exam.\nThis is brilliant!\nI wish you’ll shine in your life!\xa0\xa0\xa0\xa0\xa0\xa0\xa0Good luck with all the barriers(/\\) in your life.`;
// console.log(stringOutput);

/* Problem 2 */
/* 5 + 2 = 7
5 - 2 = 3
5 * 2 = 10
5 / 2 = 2.50
 */

function matchOperations(number1, number2) {
  const sum = number1 + number2;
  const minus = number1 - number2;
  const multiply = number1 * number2;
  const divided = number1 / number2;
  return { sum, minus, multiply, divided };
}

console.log(matchOperations(10, 3));

/* Problem 3 */

function isEven(num) {
  return num % 2 === 0 ? "Even" : "ODD";
}
console.log(isEven(7));

/* Problem 4 */
function numberCount(num) {
  if (num === 0) {
    return "Zero";
  }
  return num > 1 ? "Positive" : "Negative";
}
console.log(numberCount(-1));

/* Problem 5 */
function shop(number) {
  if (number > 20000) {
    return "Gucci Bag \nGucci Belt";
  } else if (number <= 20000 && number >= 10000) {
    return "Gucci Bag";
  } else if (number >= 5000) {
    return "Levis Bag";
  } else {
    return "Something from New Market";
  }
}
console.log(shop(20001));
const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];
