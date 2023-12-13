// ----1----Перепишіть функцію, використовуючі '?' або '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }
// checkAge(10);

// Оператор '?'

// function checkAge(age) {
//   age > 18 ? console.log(true) : console.log('Батьки дозволили?');
// }
// checkAge(10);
// checkAge(20);

// Оператор '||'

// function checkAge(age) {
//   console.log(age > 18 === true || age > 18 == 'Батьки дозволили?');
// }
// checkAge(10);
// checkAge(20);

// -----2----Напишіть функцію min(a, b), яка повертає менше значення з двох чисел a та b.

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// let resalt = min(3, 6);
// console.log(resalt);

// ----3----Перепишіть з використанням стрілкових функцій.Замініть фукціональні вирази на стрілкові функції ц коді нижче

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   'Ви згодні?',
//   function () {
//     alert('Ви погодились.');
//   },
//   function () {
//     alert('Ви скасували виконання.');
//   },
// );

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Ви згодні?',
//   () => alert('Ви погодились.'),
//   () => alert('Ви скасували виконання.'),
// );
