/*
        *2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль 
        (как в условии смайлик), а также количество строк для вывода 
        e.g. function printSmile(stroka, numberOfRows)
*/

function printSmile(someText, numberOfRows) {
  let result = someText;
  for (i = 1; i <= numberOfRows; i++) {
    console.log(result);
    result += someText;
  }
}
printSmile(":)", 50);
