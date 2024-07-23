// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
  if (typeof number1 === "string" || typeof number2 == "string") {
    return null;
  }
  if (number1 === number2) {
    console.log("os numeros sao iguais");
    return;
  }
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
}
console.log("max of two numbers -->", maxOfTwoNumbers(10, 20));

// Iteration 2 | Find the Longest Word
function findLongestWord(ArrayOfWords) {
  let longestWord = "";

  for (let i = 0; i < ArrayOfWords.length; i++) {
    if (ArrayOfWords[i].length > longestWord.length) {
      longestWord = ArrayOfWords[i];
    }
  }
  return longestWord;
}

const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

console.log("The longest word is", findLongestWord(words));

///dany comments: 1. nao sei como colocar o total de indexes por elemento da array em outra array.
////2. nao sei como contar para achar a maior

// Iteration 3 | Sum Numbers | Faça uma função que some todos os números de um array
function sumNumbers(ArrayofNumbers) {
  let sum = 0;
  for (let i = 0; i < ArrayofNumbers.length; i++) {
    sum += ArrayofNumbers[i];
  }
  return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]; //estamos passando essa array pra dentro da função
console.log("sumNumbers -->", sumNumbers(numbers));

///iteration 3: dany comments (nao sei como faz pra somar os numeros da array, tipo como fazer isso no codigo)

// Iteration 4 | Numbers Average | Faça uma função que calcule a média de um array
function averageNumbers(Numbers) {
  let sum = 0;
  for (let i = 0; i < Numbers.length; i++) {
    sum += Numbers[i];
  }
  return sum / Numbers.length;
}

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9]; //estamos passando essa array pra dentro da função

console.log("averageNumbers -->", averageNumbers(numbers2));

// Iteration 5 | Find Elements | Faça uma função que verifique se um elemento existe em um array
function doesWordExist(WordinArray) {
  let searchedWord = "joy";

  for (let i = 0; i < WordinArray.length; i++) {
    if (searchedWord != WordinArray[i]) {
      return "Nope";
    } else WordinArray[i] = searchedWord;
    {
      return "This word exists!";
    }
  }
}
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
]; //estamos passando essa array pra dentro da função

console.log("Does the word exist?", doesWordExist(words2));

// Iteration 6 | Reverse String | Faça uma função que inverta uma string
function reverseString(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}
console.log("reverseString -->", reverseString("hello"));

// Iteration 7 | Converting Dollars into Reais | Faça uma função que converta dólares em reais
function convertTo(dollars) {
  let reais = 4.5;
  return dollars * reais;
}
console.log("convertTo -->", convertTo(100));

// Iteration 8 | Nuymber sequence | Faça uma função que cria um array com números de 0 a n
function createArray(n) {
  let arrayCreated = [];

  for (let i = 0; i < n + 1; i++) {
    arrayCreated += [i];
  }
  return arrayCreated;
}

console.log("createArray -->", createArray(10));
// expected output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// BONUS 1 | Polindrome | Faça uma função que verifique se uma palavra é palíndrome = se a palavra é igual de trás pra frente
function isPalindrome(word) {
  wordNoSpace = word.replace(/\s+/g, "");

  revertedWordNoSpace = "";

  for (let i = wordNoSpace.length - 1; i >= 0; i--) {
    revertedWordNoSpace += wordNoSpace[i];
  }

  if (wordNoSpace == revertedWordNoSpace) {
    return "yes";
  } else {
    return "no";
  }
}
console.log("isPalindrome -->", isPalindrome("joana"));
