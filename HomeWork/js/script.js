// Якщо змінна більше нуля - виведіть true, менше - false
// Перевірте це на варіантах  1, 0, -3.

// console.log(1 > 0);
// console.log(1 < 0);
// console.log(0 > 0);
// console.log(0 < 0);
// console.log(-3 > 0);
// console.log(-3 < 0);
// 1 > 0 ? console.log(true) : console.log(false);
// 1 < 0 ? console.log(true) : console.log(false);
// 0 > 0 ? console.log(true) : console.log(false);
// 0 < 0 ? console.log(true) : console.log(false);
// -3 > 0 ? console.log(true) : console.log(false);
// -3 < 0 ? console.log(true) : console.log(false);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
// let test;
// console.log(Boolean('test'));
// let qwerty;
// console.log(Boolean('qwerty'));

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// if (1 > 10) {
//   console.log('1-5');
// } else if (1 < 10) {
//   console.log('1+5');
// }

// if (10 > 10) {
//   console.log('10-5');
// } else if (10 < 10) {
//   console.log(10 + 5);
// } else {
//   console.log('no');
// }

// if (13 > 10) {
//   console.log('13-5');
// } else if (13 < 10) {
//   console.log('13+5');
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let month = +prompt('Введіть число');
// str = '';

// switch (month) {
//   case 1:
//     str = 'Січень';
//     alert(str);
//     break;

//   case 2:
//     str = 'Лютий';
//     alert(str);
//     break;

//   case 3:
//     str = 'Березень';
//     alert(str);
//     break;

//   case 4:
//     str = 'Квітень';
//     alert(str);
//     break;

//   case 5:
//     str = 'Травень';
//     alert(str);
//     break;

//   case 6:
//     str = 'Червень';
//     alert(str);
//     break;

//   case 7:
//     str = 'Липень';
//     alert(str);
//     break;

//   case 8:
//     str = 'Серпень';
//     alert(str);
//     break;

//   case 9:
//     str = 'Вересень';
//     alert(str);
//     break;

//   case 10:
//     str = 'Жовтень';
//     alert(str);
//     break;

//   case 11:
//     str = 'Листопад';
//     alert(str);
//     break;

//   case 12:
//     str = 'Грудень';
//     alert(str);
//     break;

//   default:
//     alert('Введіть число від 1 до 12');
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let num = prompt('Введіть тризначне число');
// let arr = String(num).split('');
// let sum = 0;

// for (let digit of arr) {
//   sum += Number(digit);
// }
// alert(sum);
