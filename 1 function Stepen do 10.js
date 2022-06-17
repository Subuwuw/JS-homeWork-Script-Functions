/*
 *                    1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
 */
let baseNumb; // число которое будет возводиться в степень
let exponentNumb; // число в какую степень будет возводиться

function calc(baseNumb, exponentNumb) {
  let round;
  for (round = 1; round <= exponentNumb; round++) {
    result = Math.pow(baseNumb, round);
    console.log(result);
  }
}

console.log(calc(2, 10));
