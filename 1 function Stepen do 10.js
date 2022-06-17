/*
 *                    1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
 */

const baseNum = 2;
for (i = 1; i <= 10; i++) {
  result = Math.pow(baseNum, i);
  console.log(result);
}
