// --------- CONSTANTES ---------

// MENU DESPLEGABLE
const menu = document.getElementById('menu')
const toggleMenuIcon = document.getElementById('toggleMenuIcon')

// CABIAR COLOR HEADER
const header = document.querySelector('.header')

// HERO GALERIA AUTOMATICA
const heroImages = [
    {
        avif: 'media/villa.avif',
        webp: 'media/villa.webp',
        jpg: 'media/villa.jpg'
    },

    {
        avif: 'media/estancias/suite-kilimanjaro.avif',
        webp: 'media/estancias/suite-kilimanjaro.webp',
        jpg: 'media/estancias/suite-kilimanjaro.jpg'
    },

    {
        avif: 'media/villa-savanna.avif',
        webp: 'media/villa-savanna.webp',
        jpg: 'media/villa-savanna.jpg'
    },

    {
        avif: 'media/estancias/villa-zuri.avif',
        webp: 'media/estancias/villa-zuri.webp',
        jpg: 'media/estancias/villa-zuri.jpg'
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
        'media/estancias/refugio-acacia.webp',
        'media/estancias/refugio-acacia-habitacion.webp',
        'media/estancias/refugio-acacia-ducha.webp',
        'media/estancias/refugio-acacia-vista.webp'
    ],

    kilimanjaro: [
        'media/estancias/suite-kilimanjaro.webp',
        'media/estancias/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro-sala.webp'
    ],

    mara: [
        'media/estancias/suite-mara.webp',
        'media/estancias/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro-sala.webp'
    ],

    zuri: [
        'media/estancias/villa-zuri.webp',
        'media/estancias/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro-sala.webp'
    ],

    nuru: [
        'media/estancias/villa-nuru.webp',
        'media/estancias/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro-sala.webp'
    ],
    kalahari: [
        'media/estancias/villa-kalahari.webp',
        'media/estancias/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro-sala.webp'
    ],
    savanna: [
        'media/villa-savanna.webp',
        'media/estancias/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro-sala.webp'
    ],
    luna: [
        'media/retiro-luna.webp',
        'media/estancias/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro-sala.webp'
    ],
    baobab: [
        'media/suite-baobab.webp',
        'media/estancias/suite-kilimanjaro-habitacion.webp',
        'media/estancias/suite-kilimanjaro-ducha.webp',
        'media/estancias/suite-kilimanjaro-sala.webp'
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

