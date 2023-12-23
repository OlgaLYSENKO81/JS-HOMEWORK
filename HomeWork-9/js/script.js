//                           -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// document.getElementById('disappear').onclick = function () {
//   document.getElementById('text').hidden = true;
// };

// //                           -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.
// index.html

//                           -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// for (let li of tree.querySelectorAll('li')) {
//   let activ = document.createElement('activ');
//   li.prepend(activ);
//   activ.append(activ.nextSibling);
// }
// tree.onclick = function (event) {
//   if (event.target.tagName != 'ACTIV') {
//     return;
//   }

//   let childrenContainer = event.target.parentNode.querySelector('ul');
//   if (!childrenContainer) return;
//   childrenContainer.hidden = !childrenContainer.hidden;
// };
