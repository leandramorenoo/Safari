// MENU DESPLEGABLE

const menu = document.getElementById('menu')
const toggleMenuIcon = document.getElementById('toggleMenuIcon')

function toggleMenu() {

    menu.classList.toggle('hidden')
    toggleMenuIcon.classList.toggle('white')

}