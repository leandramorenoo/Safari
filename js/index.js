// ----- CONSTANTES -----

// MENU
const menu = document.getElementById('menu')
const toggleMenuIcon = document.getElementById('toggleMenuIcon')
const header = document.querySelector('.header')
// HERO GALERIA AUTOMATICA
const galleryHero = [
    /*['media/estancias/villa-savanna-1.jpg', 'media/estancias/villa-savanna-1.webp', 'media/estancias/villa-savanna-1.avif'],
    ['media/estancias/villa-savanna-2.jpg', 'media/estancias/villa-savanna-2.webp', 'media/estancias/villa-savanna-2.avif'],
    ['media/estancias/villa-savanna-3.jpg', 'media/estancias/villa-savanna-3.webp', 'media/estancias/villa-savanna-3.avif']*/
    'media/estancias/villa-savanna-1.jpg',
    'media/estancias/villa-savanna-2.jpg',
    'media/estancias/villa-savanna-3.jpg'
]

let contador = 0
let intervalo
const timer = 2500
const imagenRotativa = document.getElementById('imagen-rotativa')

// GALERIA ARRAY ESTANCIAS
const galleries = {

    acacia: [
        'media/estancias/villa-savanna-1.jpg',
        'media/estancias/villa-savanna-2.jpg',
        'media/estancias/villa-savanna-3.jpg'
    ],

    kilimanjaro: [
        'media/estancias/villa-savanna-1.jpg',
        'media/estancias/villa-savanna-2.jpg',
        'media/estancias/villa-savanna-3.jpg'
    ]
}

const galleryImages = document.querySelectorAll('.accomodations__gallery')
const modal = document.querySelector('.modal')
const modalImage = document.getElementById('modal-image')
const modalClose = document.getElementById('modal-close')
const modalNext = document.getElementById('modal-next')
const modalBack = document.getElementById('modal-back')

let currentGallery = []
let count = 0

// ----------

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
//HERO GALERIA AUTOMATICA

function cambiarImagen() {
    
    imagenRotativa.style.opacity = '0'
    setTimeout (() => {
        contador++
        if (contador >= galleryHero.length){
            contador = 0
        } 
        imagenRotativa.src = galleryHero[contador]   
        imagenRotativa.style.opacity = '100%'
    
    }, 300);    
}

function iniciar() {
    intervalo = setInterval(cambiarImagen, timer)
}
  
function detener () {

    clearInterval((intervalo))
}
    
imagenRotativa.addEventListener('mouseenter', detener)
imagenRotativa.addEventListener('mouseleave', iniciar)

iniciar()


// GALERIA ARRAY ESTANCIAS

galleryImages.forEach((gallery) => {

    gallery.addEventListener('click', e => {

        const galleryName = gallery.id
        currentGallery = galleries[galleryName]
        count = 0
        modalImage.src = currentGallery[count]
        modal.classList.remove('hidden')
    })
})


modalNext.addEventListener('click', e => {

    if (count >= currentGallery.length - 1) {
        count = 0
    } else {
        count++
    }
    modalImage.src = currentGallery[count]
})


modalBack.addEventListener('click', e => {

    if (count <= 0) {
        count = currentGallery.length - 1
    } else {
        count--
    }
    modalImage.src = currentGallery[count]
})


modalClose.addEventListener('click', e => {

    modal.classList.add('hidden')

})

// USAR TECLAS 
document.addEventListener('keydown', e => {

    if (modal.classList.contains('hidden')) {
        return
    }

    if (e.key === 'ArrowRight') {

        if (count >= currentGallery.length - 1) {
            count = 0
        } else {
            count++
        }

        modalImage.src = currentGallery[count]
    }

    if (e.key === 'ArrowLeft') {

        if (count <= 0) {
            count = currentGallery.length - 1
        } else {
            count--
        }

        modalImage.src = currentGallery[count]
    }

    if (e.key === 'Escape') {
        modal.classList.add('hidden')
    }

})
