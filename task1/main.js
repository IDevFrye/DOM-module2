'use strict';

// удаление рекламного баннера
document.querySelector('.ads').remove(); 

// перемещение четвертой карточки после третьей (для стилей)
const thirdItem = document.querySelector('.item_three');
thirdItem.after(document.querySelector('.item_four'));

// орпределяем массивы элементов для перестановок
const content = document.querySelectorAll('.content');
const titles = document.querySelectorAll('.item__title, [name="title-items"]');
const images = document.querySelectorAll('.item__image');
const propsLists = document.querySelectorAll('.props__list');

// переименование заголовка (в соответствии со образцом)
titles[2].textContent = 'This и прототипы объектов';

// перемещаем контент для 2-ой и 3-ей карточки
const propsItems1 = document.querySelectorAll('.props__item_two');
content[1].append(images[1], titles[4], ...propsItems1);
content[2].append(images[2], titles[2], propsLists[4]);

// перемещаем строчку 4-ой карточки (из 2-ой) в нужное место
const neighbourItem = document.querySelector('.props__item_four:nth-child(3)');
neighbourItem.after(document.querySelector('.props__item_four:first-child'));

// перемещаем контент для 5-ой и 6-ой карточки
content[4].append(images[4], titles[5], propsLists[2]);
content[5].append(images[5], titles[1], propsLists[5]);