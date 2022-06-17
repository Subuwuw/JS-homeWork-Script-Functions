/*
 *                    1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
 */
let baseNumb; // число которое будет возводиться в степень
let exponentNumb; // число в какую степень будет возводиться

function calc(baseNumb, exponentNumb) {
  math = Math.pow(baseNumb, exponentNumb);
  return math;
}

console.log(calc(5, 2));
