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
                        <a href="#id-0">
                            <picture>
                                <source srcset="images/rolls.webp" type="image/webp">
                                <img src="images/rolls.png" alt="" width="600" height="400">
                            </picture>
                            Філадельфія                        
                        </a>
                    </li>

                    <li>
                        <a href="#id-1">
                            <picture>
                                <source srcset="images/california.webp" type="image/webp">
                                <img src="images/california.png" alt="" width="600" height="400">
                            </picture>
                            Каліфорнія                        
                        </a>
                    </li>

                    <li>
                        <a href="#id-2">
                            <picture>
                                <source srcset="images/avocado.webp" type="image/webp">
                                <img src="images/avocado.png" alt="" width="600" height="400">
                            </picture>
                            Авокадо-рол                        
                        </a>
                    </li>

                    <li>
                        <a href="#id-3">
                            <picture>
                                <source srcset="images/sashimi.webp" type="image/webp">
                                <img src="images/sashimi.png" alt="" width="600" height="400">
                            </picture>
                            Дракони                        
                        </a>
                    </li>

                    <li>
                        <a href="#id-4">
                            <picture>
                                <source srcset="images/hosomaki.webp" type="image/webp">
                                <img src="images/hosomaki.png" alt="" width="600" height="400">
                            </picture>
                            Хосомаки                        
                        </a>
                    </li>

                    <li>
                        <a href="#id-5">
                            <picture>
                                <source srcset="images/nigiri.webp" type="image/webp">
                                <img src="images/nigiri.png" alt="" width="600" height="400">
                            </picture>
                            Нігірі                        
                        </a>
                    </li>

                    <li>
                        <a href="#id-6">
                            <picture>
                                <source srcset="images/drink.webp" type="image/webp">
                                <img src="images/drink.png" alt="" width="600" height="400">
                            </picture>
                            Напої                        
                        </a>
                    </li>

                    <li>
                        <a href="#id-7">
                            <picture>
                                <source srcset="images/set.webp" type="image/webp">
                                <img src="images/set.png" alt="" width="600" height="400">
                            </picture>
                            Бокс сети                        
                        </a>
                    </li>

                    <li>
                        <a href="#id-8">
                            <picture>
                                <source srcset="images/ramen.webp" type="image/webp">
                                <img src="images/ramen.png" alt="" width="600" height="400">
                            </picture>
                            Місо-суп                        
                        </a>
                    </li>

                    <li>
                        <a href="#id-10">
                            <picture>
                                <source srcset="images/ramen.webp" type="image/webp">
                                <img src="images/ramen.png" alt="" width="600" height="400">
                            </picture>
                            Місо-боул                        
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
                <li><a href="tel:0731305870"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 473.806 473.806' fill='%23283034' width='40' height='40'><path d='M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z'/><path d='M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z'/><path d='M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z'/></svg> (073) 130-58-70</a></li>

                <li><a href="tel:0986533151"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 473.806 473.806' fill='%23283034' width='40' height='40'><path d='M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z'/><path d='M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z'/><path d='M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z'/></svg> (098) 65-331-51</a></li>

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

// мінімальна сума замовлення
const areaCheck = document.getElementById('area-check')

basket.addEventListener('click', () => {
    
    // відкриваємо форму оформлення замовлення по кліку на кошик
    viewOrderForm()

    // можливіть міняти час доставки/забирання
    changeDate()

    // показати/сховати форму
    toggleForm()
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

        // знижка 25% тільки на роли з міткою бонус
        // якщо юзер обрав і роли з бонусом, то має змогу забрати сам та отримати знижку на все?
        const discount = document.getElementById('discount')

        // TODO: додати перевірку на знижку
        if(product.classList.contains('discount')){

            discount.classList.add('active')
        }

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

        // показати форму, якщо відповідна сума замовлення
        toggleForm()
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
            hideOrderForm()
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

            // fancybox.close()
            hideOrderForm()
            toggleBasket()

            // повторно відкриває модальне вікно
            viewOrderForm()

            // показати/сховати форму
            toggleForm()
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

        // повторно відкриває модальне вікно
        viewOrderForm()

        // показати/сховати форму
        toggleForm()

    } else if(event.target.id === 'range-input'){

        const range = event.target
    
        const span = document.getElementById('range-span')
    
        range.addEventListener('input', () => {
    
            span.innerText = range.value
        })
    }
})

// натиснути ескейп
document.addEventListener('keydown', event => {

    if(event.key === 'Escape' || event.code === 'Escape'){

        hideOrderForm()
    }
})

// клік на кнопку з хрестиком
document.getElementById('close') && document.getElementById('close').addEventListener('click', hideOrderForm)

// клік на поле поза формою оформлення
// document.getElementById('order-wrapper') && document.getElementById('order-wrapper').addEventListener('click', hideOrderForm)
document.getElementById('modal-window-wrapper') && document.getElementById('modal-window-wrapper').addEventListener('click', hideOrderForm)

// чЕкаємо місце доставки
document.querySelectorAll('#area input').forEach(item => {

    item.addEventListener('input', function() {

        // console.log(this.value)
        this.value === 'Львів' ? areaCheck.textContent = '400' : areaCheck.textContent = '600'

        toggleForm()
    })
})

// якщо у базі уже щось лежить -- показати кошик (іконку)
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
            <div class="plus"></div>
        <li>`
    }

    return `<ul>${output}</ul>`
}



// div for insert virtual content
const virtual = document.getElementById('virtual')

const virtualDOM = `
    <div id="modal-window" class="active">
        <div id="modal-window-wrapper"></div>
        <div id="close"></div>
        <div id="form">

            <div id="area">
                <label id="lviv">
                    <input type="radio" name="area" checked value="Львів"> Львів
                </label>

                <label id="not-lviv">
                    <input type="radio" name="area" value="за Львовом"> за Львовом
                </label>

                <div id="minimal">Мінімальна сума замовлення: <span id="area-check">400</span></div>
            </div>

            <div id="goods"></div>

            <div id="total-goods"></div>

            <form>
                <p>Оформити замовлення?</p>
                <input type="text" name="name" placeholder="ім'я *" required id="form-name">
                <input type="text" name="phone" placeholder="телефон *" required id="form-phone">
                <textarea name="comment" placeholder="коментар" id="form-comment"></textarea>

                <div id="discount">
                    <label>
                        <input type="radio" name="radio" checked> забрати самостійно (знижка 25%)
                    </label>

                    <label>
                        <input type="radio" name="radio"> доставка
                    </label>                    
                </div>

                <p>Оберіть час: </p>

                <div id="range">
                    <span id="range-span">10</span>
                    <input type="range" min="10" max="21" value="10" id="range-input" name="form-range">
                </div>

                <button>Оформити замовлення</button>
            </form>
        </div>
    </div>
`



// показати форму оформлення з товарами
function viewOrderForm(){

    /*
    // document.getElementById('order').classList.add('active')
    document.getElementById('modal-window').classList.add('active')
    document.body.classList.add('active')

    document.getElementById('goods').innerHTML = goodsFromBase()

    document.getElementById('total-goods').innerHTML = totalSum()
    */

    virtual.innerHTML = virtualDOM














}

// приховати форму
function hideOrderForm(){
/* 
    // document.getElementById('order').classList.remove('active')
    document.getElementById('modal-window').classList.remove('active')
    document.body.classList.remove('active')
 */

    virtual.innerHTML = ''









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

// загальна сума
function totalSum(){

    prices = JSON.parse(localStorage.getItem('prices')).split(';')

    return prices.reduce((sum,item) => sum += +item, 0)
}

// показуємо/ховаємо форму залежно від суми
function toggleForm(){

    const form = document.querySelector('#form form');

    // console.log(form, areaCheck, totalSum())

    // totalSum() > 600 ? form.classList.add('active') : form.classList.remove('active')
    areaCheck && (totalSum() >= areaCheck.textContent ? form.classList.add('active') : form.classList.remove('active'))
}

/* ////////////////////////
// оформлення замовлення //
//////////////////////// */

const formElem = document.querySelector('#form form')

// console.log(formElem)

formElem && (formElem.onsubmit = async function(event) {

    event.preventDefault()

    // const formData = new FormData(this)
    const param = new URLSearchParams()

    const form_name = document.getElementById('form-name').value
    const form_phone = document.getElementById('form-phone').value
    const form_comment = document.getElementById('form-comment').value
    const form_range = document.getElementById('range-input').value

    // order goods
    param.append('goods', names)
    param.append('prices', totalSum())

    param.append('name', form_name)
    param.append('phone', form_phone)
    param.append('comment', form_comment)
    param.append('range', form_range)

    let response = await fetch('https://miso.lviv.ua/mail/send.php', {

        method: 'POST',
        body: param
    })

    let result = await response.text()

    // успішна відправка
    if(result == 'ok'){

        // очистка бази
        localStorage.clear()            

        // якщо 1 елемент, видалити і закрити кошик
        hideOrderForm()
        toggleBasket()
        
        names = []
        prices = []
        
        // очищаємо всі активні товари
        for(let i = 0; i < articles.length; i++) articles[i].classList.remove('active')

        let ok

        setTimeout(() => {
            
            ok = new Fancybox([
                {
                    src: '<p>Усе гаразд! Замовлення надіслано!</p>',
                    type: "html",
                },
            ])

        }, 1000)

        setTimeout(() => {
            
            ok.close()

        }, 2000)
    } else {

        console.error(error)
    }

})