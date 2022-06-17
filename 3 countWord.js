/*
                            *3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать
                             и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
                            e.g. function getWordStructure(word)
                            В консоли: 
                            Слово (word) состоит из  (число) гласных и (число) согласных букв

                            Проверки: 'case', 'Case', 'Check-list'
*/

function checkCount(string) {
  let matchesA = string.match(/[aeiou]/gi);
  let matchesB = string.match(/[qwrtpsdfghjklzxcvbnm]/gi);
  let matchesRusA = string.match(/[ауоыиэяюёе]/gi);
  let matchesRusB = string.match(/[бвгджзйклмнпрстфхцчшщ]/gi);
  //_________________________________________________тут присвоили переменным регулярное выражение которое принимает функция checkCount(string)_____________________________________________________

  if ((matchesA || matchesB) && !matchesRusA && !matchesRusB) {
    // сравниваем: если в слове есть англ гласные и согласные и нету рус. гласных и согласных
    let countA = matchesA ? matchesA.length : 0; // записываем сюда количество гласных
    let countB = matchesB ? matchesB.length : 0; // записываем сюда количество согласных
    console.log(
      "Это английское слово и в нём гласных: " +
        countA +
        " Согласных : " +
        countB
    );
  } else if ((matchesRusA || matchesRusB) && !matchesA && !matchesB) {
    // сравниваем : есть ли в слове русские гласные и согланые и нету англ гласных и согласных
    let countA = matchesRusA ? matchesRusA.length : 0;
    let countB = matchesRusB ? matchesRusB.length : 0;
    console.log(
      "Это русское слово и в нём гласных: " + countA + " Согласных : " + countB
    );

    // проверка что бы принимающее слово имело англ гласные с рус гласными или согласными или же слово имело русские гласные с англ гласными или согласными
  } else if (
    (matchesA && (matchesRusA || matchesRusB)) ||
    (matchesRusA && (matchesA || matchesB))
  ) {
    // гласные Англ и гласные русс или согласные русс и гласные англ или
    let countEngA = matchesA ? matchesA.length : 0;
    let countEngB = matchesB ? matchesB.length : 0;
    let countRusA = matchesRusA ? matchesRusA.length : 0;
    let countRusB = matchesRusB ? matchesRusB.length : 0;
    console.log(
      "В этом слове английский гласных: " +
        countEngA +
        ", русский гласных: " +
        countRusA +
        ", английских согласных: " +
        countEngB +
        ",русских согласных: " +
        countRusB
    );
  } else {
    console.log("Введите пожалуйста слово на английском или русском");
  }
}
checkCount("sSDdsdsЩШОвывФЫВывasSSDPOVMZNK");
checkCount("check this position проверил эту позицию");
checkCount("case");
checkCount("Case");
checkCount("Check-list");
