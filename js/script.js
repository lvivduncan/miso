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

// https://github.com/lvivduncan/levus-horizontal-scroll
{
    const scroll = document.querySelectorAll('.levus-horizontal-scroll')

    if(scroll.length > 0){

        scroll.forEach(item => {

            const ul = item.querySelector('ul')

            // elements
            let li = ul.querySelectorAll('li')

            // if less than 4, cloned 
            if (li.length <= 3) {

                // cloned and append elements
                li.forEach(element => ul.append(element.cloneNode(true)))

                // new nodelist
                li = item.querySelectorAll('li')
            }
/* 
            item.innerHTML += '<div class="levus-nav"><span class="left"></span><span class="right"></span></div>'

            item.addEventListener('click', event => {

                const ul = item.querySelector('ul')

                if (event.target.className == 'left') {

                    // move last element
                    const last = ul.lastElementChild
                    ul.prepend(last)

                    // destroy transition
                    ul.style.transition = 'none'
                    ul.classList.add('to-right')

                    setTimeout(() => {

                        ul.classList.remove('to-right')
                        ul.style.transition = '.5s'
                    }, 50)
                }
            })

            item.addEventListener('click', event => {

                const ul = item.querySelector('ul')

                if (event.target.className == 'right') {

                    // move first element
                    const first = ul.firstElementChild
                    ul.append(first)

                    // destroy transition
                    ul.style.transition = 'none'
                    ul.classList.add('to-left')

                    setTimeout(() => {

                        ul.classList.remove('to-left')
                        ul.style.transition = '.5s'
                    }, 50)
                }
            }) */

            setInterval(() => {
                const ul = item.querySelector('ul')
    
                // move first element
                const first = ul.firstElementChild
                ul.append(first)
    
                // destroy transition
                ul.style.transition = 'none'
                ul.classList.add('to-left')
    
                setTimeout(() => {

                    ul.classList.remove('to-left')
                    ul.style.transition = '.5s'

                }, 50)
             
            }, 7000)

        })
    }
}

// map
(function () {
    const map = L.map("mapc17p052w").setView([49.84645127213064,24.024610519409183], 18)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.marker([49.84632328223061,24.02385340142156]).addTo(map)

    return map
}())


// img.leaflet-marker-shadow.leaflet-zoom-animated
// img.leaflet-marker-icon.leaflet-zoom-animated.leaflet-interactive

document.querySelectorAll('.leaflet-zoom-animated').forEach(item => item.setAttribute('alt', ''))