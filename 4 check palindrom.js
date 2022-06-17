/*
                                                    *4**. Написать функцию, которая проверяет, является ли слово палиндромом
                                                    e.g. function isPalindrom(word)

                                                    Проверки: 'abba', 'Abba'
*/

function isPalindrom(string) {
  // в переменную присваиваем часто используемый метод - убираем отступы и приобразуем в lowercase
  let str = string.replace(/[* ]/gi, "").toLocaleLowerCase();
  //разбиваем строку на массив, отражаем, соединяем обратно.
  palindrom = str.split("").reverse().join("");
  if (palindrom == str) {
    console.log("Это слово или набор слов - палиндром - " + string);
  } else {
    console.log(
      "Это слово или набор слов не палиндром - " +
        str +
        ", обратная сторона его : " +
        palindrom +
        ""
    );
  }
  console.log(
    "Вы ввели: '" + string + "' обратная сторона -> '" + palindrom + "'"
  );
}

isPalindrom("Сел в озере березов лес");
isPalindrom("abba");
isPalindrom("Abba");
isPalindrom("выЫа");
/*-------------------------------------------
 * Более короткий вариант
 */

// function isPal(string) {
//   str = string.toLocaleLowerCase().replace(/[* ]/gi, "");
//   return str.split("").reverse().join("") == str;
// }
// console.log(isPal("abba"));
// console.log(isPal("Abba"));
// console.log(isPal("Сел в озере березов лес"));
// console.log(isPal("dasd1"));
