
// console.log('Hello to DOM');
console.dir(document);
// document.querySelector('h1').style.color='red';
// document.body.color='red';
// console.log(document.domain);
// console.log(document.URL);
// document.title='Title Chnaged';
// console.log(document.title);
// console.log(document.all[10]);
// document.all[10].textContent='Hello';
// console.log(document.forms);
// console.log(document.links);
console.log(document.all);
// document.all[11].textContent='Rundan';

let headerTitle= document.getElementById('header-title');
let header= document.getElementById('main-header');
console.log(headerTitle);
// headerTitle.textContent='Onkars';
// headerTitle.innerText='onkaresss'
console.log(headerTitle.innerText);
headerTitle.innerHTML='<h3>Item Lister</h3>';
header.style.borderBottom='solid 3px #000';
let titleName= document.getElementById('main');
console.log(titleName);
console.log(titleName.children);
titleName.children[0].style.fontWeight='bold';


//getElements by class name
let items=document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor='green';
for(let i=0;i<items.length;i++){
    items[i].style.color='red';
    items[i].style.fontWeight='bold';
}