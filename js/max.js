'use strict'
let burger = document.querySelector('.burger');
let burgMenu = document.querySelector('.burg-menu');

burger.addEventListener('click',menuShow);

function menuShow(){
  burgMenu.style.display='flex';
}


remove.addEventListener('click',function(){
  burgMenu.style.display='none';
});
