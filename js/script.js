const header = document.getElementById('header')

window.addEventListener('scroll', () => {

    if(window.pageYOffset < 50){

        header.className = ''
    } else if(window.pageYOffset > 100) {

        setTimeout( () => {

            header.className = 'active'
        }, 10)
    }
})