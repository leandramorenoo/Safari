// --------- CONSTANTES ---------

// CABIAR COLOR HEADER
const header = document.querySelector('.header')

// HERO GALERIA AUTOMATICA
const heroImages = [
    {
        avif: 'media/estancias/vistas/villa.avif',
        webp: 'media/estancias/vistas/villa.webp',
        jpg: 'media/estancias/vistas/villa.jpg'
    },

    {
        avif: 'media/estancias/suite-kilimanjaro/suite-kilimanjaro.avif',
        webp: 'media/estancias/suite-kilimanjaro/suite-kilimanjaro.webp',
        jpg: 'media/estancias/suite-kilimanjaro/suite-kilimanjaro.jpg'
    },

    {
        avif: 'media/estancias/villa-savanna/villa-savanna.avif',
        webp: 'media/estancias/villa-savanna/villa-savanna.webp',
        jpg: 'media/estancias/villa-savanna/villa-savanna.jpg'
    },

    {
        avif: 'media/estancias/villa-zuri/villa-zuri.avif',
        webp: 'media/estancias/villa-zuri/villa-zuri.webp',
        jpg: 'media/estancias/villa-zuri/villa-zuri.jpg'
    }
]

const heroAvif = document.getElementById('hero-avif')
const heroWebp = document.getElementById('hero-webp')
const heroImage = document.getElementById('hero-image')
const timer = 1800

let contador = 0

// GALERIA ARRAY ESTANCIAS
const galleries = {

    acacia: [
        'media/estancias/refugio-acacia/refugio-acacia.webp',
        'media/estancias/refugio-acacia/refugio-acacia-habitacion.webp',
        'media/estancias/refugio-acacia/refugio-acacia-ducha.webp',
        'media/estancias/refugio-acacia/refugio-acacia-vista.webp'
    ],

    kilimanjaro: [
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-sala.webp'
    ],

    mara: [
        'media/estancias/suite-mara/suite-mara.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-sala.webp'
    ],

    zuri: [
        'media/estancias/villa-zuri/villa-zuri.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-sala.webp'
    ],

    nuru: [
        'media/estancias/villa-nuru/villa-nuru.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-sala.webp'
    ],
    kalahari: [
        'media/estancias/villa-kalahari/villa-kalahari.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-sala.webp'
    ],
    savanna: [
        'media/estancias/villa-savanna/villa-savanna.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-sala.webp'
    ],
    luna: [
        'media/estancias/retiro-luna/retiro-luna.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-sala.webp'
    ],
    baobab: [
        'media/estancias/suite-baobab/suite-baobab.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro/suite-kilimanjaro-sala.webp'
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

// ------------- FUNCIONES ------------

// MENU DESPLEGABLE
toggleMenuIcon.addEventListener('click', e => {
    menu.classList.toggle('hidden')
    toggleMenuIcon.classList.toggle('white')
})

document.querySelector('.menu__close-button').addEventListener('click', e => {
    menu.classList.add('hidden')
    toggleMenuIcon.classList.remove('white')
})

// CAMBIAR COLOR HEADER
document.addEventListener('scroll', e => {
    console.log(window.scrollY)
    if (window.scrollY > 320) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})

//HERO GALERIA AUTOMATICA
setInterval(() => {

    if (contador >= heroImages.length - 1) {
        contador = 0
    } else {
        contador++
    }

    heroAvif.srcset = heroImages[contador].avif
    heroWebp.srcset = heroImages[contador].webp
    heroImage.src = heroImages[contador].jpg

}, timer)


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

// usar teclado 
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


