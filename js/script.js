const header = document.getElementById('header')

window.addEventListener('scroll', () => {

    if(window.pageYOffset < 50){

        header.className = ''
    } else if(window.pageYOffset > 1) {

        setTimeout( () => {

            header.className = 'fixed'
        }, 10)
    }
})

// плавний скрол
// https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165
{
    const links = document.querySelectorAll("#banner ul a")

    for (const link of links) {
        link.addEventListener("click", clickHandler)
    }

    function clickHandler(event) {
        event.preventDefault()

        const href = this.getAttribute("href")
        const offsetTop = document.querySelector(href).offsetTop

        scroll({
            top: offsetTop,
            behavior: "smooth"
        })
    }
}

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

// додав альти 
document.querySelectorAll('.leaflet-zoom-animated').forEach(item => item.setAttribute('alt', ''))

// мобільне меню
document.getElementById('menu').addEventListener('click', () => {

    (new Fancybox([
        {
        src: `
            <nav id="modal">
                <ul>
                    <li>
                        <a href="#rolls">
                            <picture>                            
                                <img src="temp/rolls.png" alt="">
                            </picture>
                            Філадельфія
                        </a>
                    </li>

                    <li>
                        <a href="#sashimi">
                            <picture>
                                <img src="temp/sashimi.png" alt="">
                            </picture>
                            Дракони
                        </a>
                    </li>

                    <li>
                        <a href="#hosomaki">
                            <picture>
                                <img src="temp/hosomaki.png" alt="">
                            </picture>
                            Хосомаки
                        </a>
                    </li>

                    <li>
                        <a href="#nigiri">
                            <picture>
                                <img src="temp/nigiri.png" alt="">
                            </picture>
                            Нігірі
                        </a>
                    </li>

                    <li>
                        <a href="#drink">
                            <picture>
                                <img src="temp/drink.png" alt="">
                            </picture>
                            Напої
                        </a>
                    </li>

                    <li>
                        <a href="#box-set">
                            <picture>
                                <img src="temp/set.png" alt="">
                            </picture>
                            Бокс сети
                        </a>
                    </li>

                    <li>
                        <a href="#miso-soup">
                            <picture>
                                <img src="temp/ramen.png" alt="">
                            </picture>
                            Місо-суп
                        </a>
                    </li>
                </ul>
            </nav>`,
        type: "html",
        },
    ]))

})

// мобільне меню телефонів
document.getElementById('phone').addEventListener('click', () => {

    (new Fancybox([
        {
        src: '<nav id="call"><ul><li><a href="tel:0123456789">0123456789</a></li></ul></nav>',
        type: "html",
        },
    ]))

})

/*
// клік на кошикові відкриває модальне вікно зі замовленням
// у вікні можна змінити кількість або видалити і
// одразу оформити або ж закрити і замовити ще щось
*/

document.getElementById('basket').addEventListener('click', () => {

    (new Fancybox([
        {
          src: `<div id="form">
          <div id="goods">
              <ul>
                  <li>Назва замовлення 1</li>
                  <li>Назва замовлення 2</li>
                  <li>Назва замовлення 3</li>
                  <li>Назва замовлення 4</li>
                  <li>Назва замовлення 5</li>
                  <li>Назва замовлення 6</li>
                  <li>Назва замовлення 7</li>
              </ul>                    
          </div>

          <p>Оформити замовлення?</p>

          <form>
              <input type="text" placeholder="ім'я">
              <input type="number" placeholder="телефон">
              <textarea placeholder="коментар"></textarea>
              <label>
                  <input type="radio" name="radio" checked> забрати самостійно 
              </label>
              <label>
                  <input type="radio" name="radio"> потрібна доставка (+200грн)
              </label>
              <select name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
              <button>Оформити замовлення</button>
          </form>
      </div>`,
          type: "html",
        },
        
    ]))    
})