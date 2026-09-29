// LOADER LION

const loader = document.getElementById('loader')

setTimeout(() => {

    loader.classList.add('fade-out')

    setTimeout(() => {
        loader.style.display = 'none'
        document.body.classList.remove('loading')
    }, 700)

}, 1800)