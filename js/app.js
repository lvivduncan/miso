const body = document.body

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











/* ////////
// кошик //
//////// */

// іконка кошика з кількістю товарів
const basket = document.getElementById('basket')

// кількість товарів
const basketSpan = basket.querySelector('span')

/* /////////////////////////
// додаємо товари у кошик //
///////////////////////// */

// об'єкти для даних, що будуть писатися у базу
let names = []
let prices = []
let discount = []

// усі товари
const products = document.querySelectorAll('.menu article')

// оновлюємо кошик (іконку в хедері)
toggleBasket()

// опрацьовуємо клік по товару
for(let i = 0; i < products.length; i++){

    const product = products[i]

    // клік на продукт додає його у базу і підсвічує
    product.addEventListener('click', () => {

        // підсвітка номінальна, не зберігається після оновлення
        product.classList.add('active')

        // чек бази. дописуємо, якщо не пуста
        if(localStorage.getItem('names') !== null){

            names = JSON.parse(localStorage.getItem('names')).split(';')
            prices = JSON.parse(localStorage.getItem('prices')).split(';')
            discount = JSON.parse(localStorage.getItem('discount')).split(';')

            // додаємо назву
            names.push(product.querySelector('h1').textContent)

            // додаємо ціну
            prices.push(product.querySelector('header span').textContent)

            // особливий товар
            if(product.classList.contains('discount')){

                discount.push(product.querySelector('.desc').textContent)
            } else {

                discount.push(0)
            }

            // пишемо у базу
            localStorage.setItem('names', JSON.stringify(names.join(';')))
            localStorage.setItem('prices', JSON.stringify(prices.join(';')))           
            localStorage.setItem('discount', JSON.stringify(discount.join(';')))           

        } else {

            // додаємо назву
            names.push(product.querySelector('h1').textContent)

            // додаємо ціну
            prices.push(product.querySelector('header span').textContent)

            // особливий товар
            if(product.classList.contains('discount')){

                discount.push(product.querySelector('.desc').textContent)
            } else {

                discount.push(0)
            }

            // пишемо у базу
            localStorage.setItem('names', JSON.stringify(names.join(';')))
            localStorage.setItem('prices', JSON.stringify(prices.join(';'))) 
            localStorage.setItem('discount', JSON.stringify(discount.join(';')))       
        }

        toggleBasket()

    })
}

// показуємо/ховаємо іконку кошика + кількість товарів
function toggleBasket(){

    // показати/сховати кошик
    localStorage.getItem('names') ? 
        basket.classList.add('active') : 
        basket.classList.remove('active')

    // кількість товарів
    localStorage.getItem('names') ? 
        basketSpan.innerText = JSON.parse(localStorage.getItem('prices')).split(';').length : 
        basketSpan.innerText = ''    
}

// start virtual DOM 
let virtual = `
<div id="order-wrapper"></div>
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
`

basket.addEventListener('click', () => {

    const orderElement = element()
    orderElement.id = 'order'
    orderElement.innerHTML = virtual

    body.append(orderElement)
    body.classList.add('active')

    // маніпулюємо часом виготовлення або доставки
    $('#range-input') && $('#range-input').addEventListener('input', () => {

        $('#range-span').innerText = $('#range-input').value
    })
    
    // видаляємо, натиснувши esc
    document.addEventListener('keydown', event => {

        if(event.key === 'Escape' || event.code === 'Escape'){
    
            removeOrder()
        }
    })

    // глобально цей елемент перекриває всю сторінку, тому можна ловити евенти на ньому, а не на document
    orderElement.addEventListener('click', event => {

        // видаляємо, клікнувши на клоз-батон
        if(event.target.id === 'close') removeOrder()

        // видаляємо, клікнувши на враппер
        if(event.target.id === 'order-wrapper') removeOrder()

        // todo: якщо сума замовлення більша за мінімальну -- показати форму
        // toggleForm()

        // видаляємо/додаємо товари (форма замовлення)
        if(event.target.className === 'minus'){
            
            names = JSON.parse(localStorage.getItem('names')).split(';')
            prices = JSON.parse(localStorage.getItem('prices')).split(';')
            discount = JSON.parse(localStorage.getItem('discount')).split(';') 
    
            // отримуємо парента та його айдішку
            const id = event.target.parentNode.id
    
            if(names.length === 1){
    
                // очистка бази
                localStorage.clear()            
                
                // якщо 1 елемент, видалити і закрити кошик
                removeOrder()
                
                // оновлюємо кошик (іконку в хедері)
                toggleBasket()
                
                // глобальна очистка
                names = []
                prices = []
                discount = []
                
                // знімаємо відмітку з усіх активних товарів
                for(let i = 0; i < articles.length; i++) articles[i].classList.remove('active')
    
            } else {
                
                // якщо їх більше 1, видалити означений, перезаписати базу
                names.splice(id, 1)
                prices.splice(id, 1)
                discount.splice(id, 1)
    
                localStorage.setItem('names', JSON.stringify(names.join(';')))
                localStorage.setItem('prices', JSON.stringify(prices.join(';'))) 
                localStorage.setItem('discount', JSON.stringify(discount.join(';'))) 
    
                // оновлюємо кошик (іконку в хедері)
                toggleBasket()
    
                // оновлюємо список товарів
                $('#goods').innerHTML = viewGoods()
                    
                // показати/сховати форму
                toggleForm()

                // оновлюємо суму замовлення по кожному кліку
                $('#total-goods').innerHTML = totalSum()
            }
            
        } else if(event.target.className === 'plus'){
            
            names = JSON.parse(localStorage.getItem('names')).split(';')
            prices = JSON.parse(localStorage.getItem('prices')).split(';')
            discount = JSON.parse(localStorage.getItem('discount')).split(';')
    
            // отримуємо парента та його айдішку
            const id = event.target.parentNode.id
    
            // отримуємо елемент
            const copyName = names[id]
            const copyPrice = prices[id]
            const copyDiscount = discount[id]
    
            names.push(copyName)
            prices.push(copyPrice)
            discount.push(copyDiscount)
    
            // додати у базу копію
            localStorage.setItem('names', JSON.stringify(names.join(';')))
            localStorage.setItem('prices', JSON.stringify(prices.join(';')))
            localStorage.setItem('discount', JSON.stringify(discount.join(';')))

            // оновлюємо кошик (іконку в хедері)
            toggleBasket()

            // оновлюємо список товарів
            $('#goods').innerHTML = viewGoods()

            // показати/сховати форму
            toggleForm()

            // оновлюємо суму замовлення по кожному кліку
            $('#total-goods').innerHTML = totalSum()
    
        } else if(event.target.id === 'range-input'){
    
            const range = event.target
        
            range.addEventListener('input', () => {
        
                $('#range-span').innerText = range.value
            })
        }












    })

    // чЕкаємо місце доставки
    $$('#area input').forEach(item => {

        item.addEventListener('input', function() {

            // міняємо мінімальну суму замовлення
            this.value === 'Львів' ? 
                $('#area-check').textContent = '400' : 
                $('#area-check').textContent = '600'

            // показати/сховати форму
            toggleForm()
        })
    })

    // Всього (сума в гривнях)
    $('#total-goods').innerHTML = totalSum()

    // Список товарів
    $('#goods').innerHTML = viewGoods()













})
// end virtual DOM

// видаляємо модальне вікно
function removeOrder(){
    body.classList.remove('active')
    document.getElementById('order').remove()
}

// створюємо ДОМ-елемент (todo: перевірити чи доцільно)
function element(tag = 'div'){
    return document.createElement(tag)
}

// виводимо товари списком у формі оформлення замовлення
function viewGoods(){
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

// загальна сума замовлення
function totalSum(){

    prices = JSON.parse(localStorage.getItem('prices')).split(';')

    return prices.reduce((sum,item) => sum += +item, 0)
}

// показуємо/ховаємо форму залежно від суми
function toggleForm(){

    // показати форму коли сума більша мінімальної
    $('#area-check') && (totalSum() >= $('#area-check').textContent ? 
        $('form').classList.add('active') : 
        $('form').classList.remove('active'))
}













// скорочений варіант document.querySelector()
function $(selector) {
    return document.querySelector(selector)
}

// ... і document.querySelectorAll()
function $$(selector) {
    return document.querySelectorAll(selector)
}

// end