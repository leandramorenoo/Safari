

const menu = document.getElementById('menu')
const toggleMenuIcon = document.getElementById('toggleMenuIcon')
const header = document.querySelector('.header')

// MENU DESPLEGABLE
toggleMenuIcon.addEventListener('click', e => {
    menu.classList.toggle('hidden')
    toggleMenuIcon.classList.toggle('white')
})

// CAMBIAR COLOR HEADER

document.addEventListener('scroll', e => {
    console.log(window.scrollY)
        if(window.scrollY > 320) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')
        }
})
   

