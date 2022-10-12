console.log('Sample JavaScript #1 HW #13');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10
var myNum = 10;
// имя переменной: myStr, значение: 'строка'
var myStr = 'строка';
// имя переменной: myBool, значение: true
var myBool = true
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr = [1, 2, 3, 4, 5];
// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {first: 'First Name', last: 'Last Name'};
/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
var decimal2 = myNum.toFixed(2);
// decimal2
console.log(decimal2);
/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */
var i = 5;
// i
console.log(++i);
console.log(--i);
console.log(i++);
console.log(i--);
/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */
var myTest = 20;
// myTest
console.log(myTest);
// +=
console.log(myTest += myNum);
// –=
console.log(myTest -= myNum);
// *=
console.log(myTest *= 2);
// /=
console.log(myTest /= 4);
// %=
console.log(myTest %= 4);
/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
console.log(myPi = (Math.PI));
// округленное значение числа 89.279 → myRound
console.log(myRound = (Math.round(89.279)));
// случайное число между 0..10 → myRandom
console.log(myRandom = (Math.random()*10));
// 3 в 5 степени → myPow
console.log(myPow = (Math.pow(3, 5)));
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */
var str1 = "Мама мыла раму, рама мыла маму";
// Мама мыла раму, рама мыла маму
var strObj = {
  str: str1,
  length: (str1.length),
};
// strObj
console.log(strObj);
/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */
var isRamaPos = (str1.indexOf('рама')); 
// isRamaPos
console.log(isRamaPos);
/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */
var strReplace = str1.replace('мыла раму, рама мыла', 'моет раму, Рама держит');
// strReplace
console.log(strReplace);
/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
console.log(strReplace.toUpperCase());
console.log(strReplace.toLowerCase());