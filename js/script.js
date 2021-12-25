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
                                <img src="images/rolls.png" alt="">
                            </picture>
                            Філадельфія
                        </a>
                    </li>

                    <li>
                        <a href="#sashimi">
                            <picture>
                                <img src="images/sashimi.png" alt="">
                            </picture>
                            Дракони
                        </a>
                    </li>

                    <li>
                        <a href="#hosomaki">
                            <picture>
                                <img src="images/hosomaki.png" alt="">
                            </picture>
                            Хосомаки
                        </a>
                    </li>

                    <li>
                        <a href="#nigiri">
                            <picture>
                                <img src="images/nigiri.png" alt="">
                            </picture>
                            Нігірі
                        </a>
                    </li>

                    <li>
                        <a href="#drink">
                            <picture>
                                <img src="images/drink.png" alt="">
                            </picture>
                            Напої
                        </a>
                    </li>

                    <li>
                        <a href="#box-set">
                            <picture>
                                <img src="images/set.png" alt="">
                            </picture>
                            Бокс сети
                        </a>
                    </li>

                    <li>
                        <a href="#miso-soup">
                            <picture>
                                <img src="images/ramen.png" alt="">
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

// голабальна змінна для усіх фенсібоксів
let fancybox 

// мобільне меню телефонів
document.getElementById('phone').addEventListener('click', () => {

    fancybox = new Fancybox([
        {
        src: `
        <nav id="call">
            <ul>
                <li><a href="tel:0731305870">(073) 130-58-70</a></li>
                <li><a href="tel:0986533151">(098) 65-331-51</a></li>
            </ul>
        </nav>`,
        type: "html",
        },
    ])

})

/*
// клік на кошикові відкриває модальне вікно зі замовленням
// у вікні можна змінити кількість або видалити і
// одразу оформити або ж закрити і замовити ще щось
// усе пишеться у локалсторедж
*/

// кошик, який по дефолту прихований
const basket = document.getElementById('basket')

// кількість товарів у кошикові
const span = basket.querySelector('span')

basket.addEventListener('click', () => {
    
    // відкриваємо форму оформлення замовлення по кліку на кошик
    viewOrderForm()

    // можливіть міняти час доставки/забирання
    changeDate()
})

// об'єкти для даних, що будуть писатися у базу
let names = []
let prices = []

// показуємо/ховаємо кошик
toggleBasket()

// усі товари
const articles = document.querySelectorAll('.menu article')

for(let i = 0; i < articles.length; i++){

    const product = articles[i]

    // клік на продукт додає його у базу і підсвічує
    product.addEventListener('click', () => {

        // підсвітка номінальна, не зберігається після оновлення
        product.classList.add('active')

        // чек бази. дописуємо, якщо не пуста
        if(localStorage.getItem('names') !== null){

            names = JSON.parse(localStorage.getItem('names')).split(';')
            prices = JSON.parse(localStorage.getItem('prices')).split(';')

            // додаємо назву
            names.push(product.querySelector('h1').textContent)

            // додаємо ціну
            prices.push(product.querySelector('span').textContent)

            // пишемо у базу
            localStorage.setItem('names', JSON.stringify(names.join(';')))
            localStorage.setItem('prices', JSON.stringify(prices.join(';')))           

        } else {

            // додаємо назву
            names.push(product.querySelector('h1').textContent)

            // додаємо ціну
            prices.push(product.querySelector('span').textContent)

            // пишемо у базу
            localStorage.setItem('names', JSON.stringify(names.join(';')))
            localStorage.setItem('prices', JSON.stringify(prices.join(';')))        
        }

        // показуємо кошик
        toggleBasket()     
        
        // відкриваємо форму оформлення замовлення по кліку на кошик
        viewOrderForm()

        // можливіть міняти час доставки/забирання
        changeDate()
    })
}

// видаляємо товари з бази
document.addEventListener('click', event => {

    // якщо у базі ніц немає, то і кнопок не існує
    if(event.target.className === 'minus'){
        
        names = JSON.parse(localStorage.getItem('names')).split(';')
        prices = JSON.parse(localStorage.getItem('prices')).split(';')

        // отримуємо парента та його айдішку
        const id = event.target.parentNode.id

        if(names.length === 1){

            // очистка бази
            localStorage.clear()            
            
            // якщо 1 елемент, видалити і закрити кошик
            fancybox.close()
            toggleBasket()
            
            names = []
            prices = []
            
            // очищаємо всі активні товари
            for(let i = 0; i < articles.length; i++) articles[i].classList.remove('active')

        } else {
            
            // якщо їх більше 1, видалити означений, перезаписати базу

            names.splice(id, 1)
            prices.splice(id, 1)

            localStorage.setItem('names', JSON.stringify(names.join(';')))
            localStorage.setItem('prices', JSON.stringify(prices.join(';'))) 

            fancybox.close()
            toggleBasket()

            // повторно відкриває модальне вікно
            viewOrderForm()

            // changeDate()
        }
        
    } else if(event.target.className === 'plus'){
        
        names = JSON.parse(localStorage.getItem('names')).split(';')
        prices = JSON.parse(localStorage.getItem('prices')).split(';')

        // отримуємо парента та його айдішку
        const id = event.target.parentNode.id

        // отримуємо елемент
        const copyName = names[id]
        const copyPrice = prices[id]

        names.push(copyName)
        prices.push(copyPrice)

        // додати у базу копію
        localStorage.setItem('names', JSON.stringify(names.join(';')))
        localStorage.setItem('prices', JSON.stringify(prices.join(';')))  

        fancybox.close()

        // повторно відкриває модальне вікно
        viewOrderForm()

        // changeDate()

    } else if(event.target.id === 'range-input'){

        const range = event.target
    
        const span = document.getElementById('range-span')
    
        range.addEventListener('input', () => {
    
            span.innerText = range.value
        })
    }
})

// якщо у базі уже щось лежить -- показати кошик
function toggleBasket(){

    // показати/сховати кошик
    localStorage.getItem('names') ? basket.classList.add('active') : basket.classList.remove('active')

    // кількість товарів
    localStorage.getItem('names') ? span.innerText = quantityGoods() : span.innerText = ''    
}

// отримуємо дані з бази і обробляємо
function goodsFromBase(){

    names = JSON.parse(localStorage.getItem('names')).split(';')
    prices = JSON.parse(localStorage.getItem('prices')).split(';')

    let output = ''

    for(let i = 0; i<names.length; i++){

        output += `
        <li id="${i}">
            <div class="minus"></div>
            ${names[i]} <span>${prices[i]}</span>
            
        <li>`
    }

    return `<ul>${output}</ul>`
}

// показати форму оформлення
function viewOrderForm(){

    fancybox = new Fancybox([
        {
            src: `<div id="form">
                <div id="goods">${goodsFromBase()}</div>

                    <div id="total-goods">${totalSum()}</div>

                    <p>Оформити замовлення?</p>

                    <form>
                        <input type="text" placeholder="ім'я *" required>
                        <input type="text" placeholder="телефон *" required>
                        <textarea placeholder="коментар"></textarea>

                        <label>
                            <input type="radio" name="radio" checked> забрати самостійно 
                        </label>

                        <label>
                            <input type="radio" name="radio"> потрібна доставка (+200грн)
                        </label>

                        <p>Оберіть час: </p>

                        <div id="range">
                            <span id="range-span">10</span>
                            <input type="range" min="10" max="21" value="10" id="range-input">                
                        </div>

                        <button>Оформити замовлення</button>
                    </form>
                </div>`,
            type: "html",
        },
        
    ])
}

// кількість товарів
function quantityGoods(){
 
    return JSON.parse(localStorage.getItem('prices')).split(';').length
}

// зміна дати у модальній формі
function changeDate(){

    const range = document.getElementById('range')

    if(range !== null){

        const span = range.querySelector('span')
        const input = range.querySelector('input')
    
        input.addEventListener('input', () => {
    
            span.innerText = input.value
        })
    }
}

function totalSum(){

    prices = JSON.parse(localStorage.getItem('prices')).split(';')

    return prices.reduce((sum,item) => sum += +item, 0)
}