// JavaScript Document
console.log("hi");

const menuButton = document.querySelector('header button')
const navigatie = document.querySelector('header nav')

menuButton.onclick = toggleMenu;

function toggleMenu () {
    navigatie.classList.toggle('menuOpen');
}