'use strict';

const ads = document.getElementsByClassName('ads')[0];

const firstSection = document.getElementsByClassName('item_one')[0];

const secondSection = document.querySelector('.item_two');
const secondSectionElems = document.querySelectorAll('.props__item_two');
const secondSectionTitle = document.querySelector('.item_five .item__title');
const secondSectionImage = document.querySelector('[src="image/two.jpg"]');

const thirdSection = document.querySelector('.item_three');
const thirdSectionElems = document.querySelectorAll('.props__item_three');
const thirdSectionTitleTrue = document.createTextNode('This и прототипы объектов');
const thirdSectionImage = document.querySelector('[src="image/three.jpg"]');

const fourthSection = document.getElementsByClassName('item_four')[0];
const fourthSectionElem = document.querySelector('.item_two .props__item_four');
console.log('fourthSectionElem: ', fourthSectionElem);
const fourthSectionPlace = document.querySelector('.props__item.props__item_four:nth-child(3)');
console.log('fourthSectionPlace : ', fourthSectionPlace);

const fifthSection = document.querySelector('.item_five');
const fifthSectionElems = document.querySelectorAll('.props__item_five');
const fifthSectionTitle = document.querySelector('.item_six .item__title');
const fifthSectionImage = document.querySelector('[src="image/five.jpg"]');

const sixthSection = document.querySelector('.item_six');
const sixthSectionElems = document.querySelectorAll('.props__item_six');
const sixthSectionTitle = document.querySelector('.item_two .item__title');
const sixthSectionImage = document.querySelector('[src="image/six.jpg"]');

const list = document.getElementsByClassName('items')[0];

ads.remove(); // удаление рекламного баннера

// 2-ая секция
secondSection.querySelector('.props__list').innerHTML = '';
secondSectionElems.forEach((elem) => secondSection.querySelector('.props__list').appendChild(elem));
secondSection.querySelector('.item__title').textContent = secondSectionTitle.textContent;
secondSection.querySelector('.item__image').src = secondSectionImage.src;

// 3-ья секция
thirdSection.querySelector('.props__list').innerHTML = '';
thirdSectionElems.forEach((elem) => thirdSection.querySelector('.props__list').appendChild(elem));
thirdSection.querySelector('.item__title').textContent = thirdSectionTitleTrue.textContent;
thirdSection.querySelector('.item__image').src = thirdSectionImage.src;

// 4-ая секция
fourthSectionPlace.after(fourthSectionElem);

// 5-ая секция
fifthSection.querySelector('.props__list').innerHTML = '';
fifthSectionElems.forEach((elem) => fifthSection.querySelector('.props__list').appendChild(elem));
fifthSection.querySelector('.item__title').textContent = fifthSectionTitle.textContent;
fifthSection.querySelector('.item__image').src = fifthSectionImage.src;

// 6-ая секция
sixthSection.querySelector('.props__list').innerHTML = '';
sixthSectionElems.forEach((elem) => sixthSection.querySelector('.props__list').appendChild(elem));
sixthSection.querySelector('.item__title').textContent = sixthSectionTitle.textContent;
sixthSection.querySelector('.item__image').src = sixthSectionImage.src;

// Сортировка элементов спсика
list.appendChild(firstSection);
list.appendChild(secondSection);
list.appendChild(thirdSection);
list.appendChild(fourthSection);
list.appendChild(fifthSection);
list.appendChild(sixthSection);
