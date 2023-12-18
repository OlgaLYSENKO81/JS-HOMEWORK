// -- 1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// 1)
// const student = {
//   name: 'Ольга',
//   specialty: 'Економіст',
//   averageScore: 12,
//   truancy: 1,
// };
// console.log(student);

// 2)
// const student = {
//   name: 'Ольга',
//   specialty: 'Економіст',
//   averageScore: 12,
//   truancy: 1,
//   showName: function (name, specialty, averageScore, truancy) {
//     console.log(`Name is : ${this.name} `);
//     console.log(`Specialty is : ${this.specialty} `);
//     console.log(`AverageScore is : ${this.averageScore} `);
//     console.log(`Truancy is : ${this.truancy} `);
//   },
// };

// student.showName();

// 3), 4)

// student1 = {
//   name: 'Олег',
//   specialty: 'Юрист',
//   averageScore: 10,
//   truancy: 5,
// };

// student2 = {
//   name: 'Вероніка',
//   specialty: 'Дизайнер',
//   averageScore: 12,
//   truancy: 10,
// };
// student3 = {
//   name: 'Денис',
//   specialty: 'Механік',
//   averageScore: 11,
//   truancy: 3,
// };
// const infoStudent = {
//   showInfo: function () {
//     console.log('student', this.name);
//     console.log('specialty', this.specialty);
//     console.log('averageScore', this.averageScore);
//     console.log('truancy', this.truancy);
//   },
// };
// const infoStudent1 = infoStudent.showInfo.bind(student1);
// infoStudent1();
// const infoStudent2 = infoStudent.showInfo.bind(student2);
// infoStudent2();
// const infoStudent3 = infoStudent.showInfo.bind(student3);
// infoStudent3();

// infoStudent.showInfo.call(student1);
// infoStudent.showInfo.call(student2);
// infoStudent.showInfo.call(student3);

// infoStudent.showInfo.apply(student1, []);
// infoStudent.showInfo.apply(student2, []);
// infoStudent.showInfo.apply(student3, []);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const dictionary = {
//   showdefinition() {
//     console.log('html це:', this.definition);
//   },
// };

// const html = {
//   definition: ['Мова гіпертекстової розмітки'],
// };

// const css = {
//   definition: ['Каскадні таблиці стилів'],
// };

// document
//   .querySelector('#html')
//   .addEventListener('click', dictionary.showdefinition.bind(html));
// document
//   .querySelector('#css')
//   .addEventListener('click', dictionary.showdefinition.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// const shop = {
//   showInfo: function () {
//     console.log('Product', this.product);
//     console.log('Price', this.price);
//     console.log('Quantity', this.quantity);
//   },
// };
// const name1 = {
//   product: 'banana',
//   price: 30,
//   quantity: 4.5,
// };
// const name2 = {
//   product: 'cherry',
//   price: 58,
//   quantity: 1.3,
// };
// const name3 = {
//   product: 'orange',
//   price: 89,
//   quantity: 3.4,
// };
// shop.showInfo.call(name1);
// shop.showInfo.call(name2);
// shop.showInfo.call(name3);
