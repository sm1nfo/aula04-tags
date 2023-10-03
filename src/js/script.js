window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav')
    var header = document.querySelector('header')

    if (windows.scrollY > 100) {
        nav.classList.add('menuzinho')
        header.classList.add('cabecinha')
    }
    if (windows.scrollY < 100) {
        nav.classList.remove('menuzinho')
        header.classList.remove('cabecinha')
    }
})
