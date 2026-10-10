// PANTALLA DE CARGA (LEON) EN INDEX
// Inicia a los 1.5 segundos y se oculta 0.8 segundos

const loader = document.getElementById('loader')

setTimeout(() => {

    loader.classList.add('fade-out')

    setTimeout(() => {
        loader.style.display = 'none'
        document.body.classList.remove('loading')
    }, 800)

}, 1500)