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

// check goods and show/hide basket
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
basket.addEventListener('click', () => {

    // основний блок
    const orderElement = element()
    orderElement.id = 'order'

    // враппер
    const wrapperElement = element()
    wrapperElement.id = 'order-wrapper'

    // кнопка закриття
    const closeButton = element()
    closeButton.id = 'close'

    // блок з формою та замовленими товарами
    const formElement = element()
    formElement.id = 'form'

    // блок ареа -- куди буде доставка
    const areaElement = element()
    areaElement.id = 'area'

    // обрали місто Львів
    const areaLviv = element('label')
    areaLviv.id = 'lviv'

    // радіобокс Львів
    const areaLvivInput = element('input')
    areaLvivInput.type = 'radio'
    areaLvivInput.name = 'area'
    areaLvivInput.checked = true
    areaLvivInput.value = 'Львів'

    // назва Львів
    const areaLvivSpan = element('span')
    areaLvivSpan.innerText = 'Львів'

    // обрали не Львів
    const areaNotLviv = element('label')
    areaNotLviv.id = 'not-lviv'

    // радіобокс не Львів
    const areaNotLvivInput = element('input')
    areaNotLvivInput.type = 'radio'
    areaNotLvivInput.name = 'area'
    areaNotLvivInput.value = 'за Львовом'

    // назва за Львовом
    const areaNotLvivSpan = element('span')
    areaNotLvivSpan.innerText = 'за Львовом'

    // блок "мінімальна сума замовлння"
    const minimal = element()
    minimal.id = 'minimal'

    // місце виводу мінімальної суми
    const minimalSpan = element('span')
    minimalSpan.id = 'area-check'
    minimalSpan.textContent = '400'
    
    // блок гудс -- товари
    const goodsElement = element()
    goodsElement.id = 'goods'

    let goodsElementInner = element()


    // блок тотал -- сума
    const totalElement = element()
    totalElement.id = 'total-goods'
    totalElement.textContent = totalSum()

    // блок form (форма з полями)
    const form = element('form')
    // показати форму, якщо замовлено більш ніж на 400
    totalSum() > 400 && (form.className = 'active')

    // заголовок
    const formTitle = element('p')
    formTitle.innerText = 'Оформити замовлення?'

    // поле ім'я
    const inputName = element('input')
    inputName.type = 'text'
    inputName.name = 'name'
    inputName.placeholder = 'Ім`я *'
    inputName.id = 'form-name'
    inputName.required = true

    // поле телефон
    const inputPhone = element('input')
    inputPhone.type = 'text'
    inputPhone.name = 'phone'
    inputPhone.placeholder = 'Телефон *'
    inputPhone.id = 'form-phone'
    inputPhone.required = true

    // поле коментаря
    const textarea = element('textarea')
    textarea.name = 'comment'
    textarea.placeholder = 'коментар'
    textarea.id = 'form-comment'

    // блок зі знижкою (якщо вона є)
    const discountElement = element('discount')
    discountElement.id = 'discount'

    // 1 елемент блоку зі знижкою
    const discountLabel1 = element('label')

    const discountLabel1Input = element('input')
    discountLabel1Input.type = 'radio'
    discountLabel1Input.name = 'radio'
    discountLabel1Input.checked = true

    const discountLabel1Content = element('span')
    discountLabel1Content.innerText = ' забрати самостійно (знижка 25%) '

    // 2 елемент блоку зі знижкою
    const discountLabel2 = element('label')

    const discountLabel2Input = element('input')
    discountLabel2Input.type = 'radio'
    discountLabel2Input.name = 'radio'

    const discountLabel2Content = element('span')
    discountLabel2Content.innerText = ' доставка '

    // блок час 
    const formTime = element('p')
    formTime.innerText = 'Оберіть час: '

    // блок з вибором часу
    const formRange = element()
    formRange.id = 'range'

    // число, яке показано при виборі часу
    const formRangeSpan = element('span')
    formRangeSpan.id = 'range-span'
    formRangeSpan.innerText = '10'

    // бігунок для вибору часу
    const formRangeInput = element('input')
    formRangeInput.type = 'range'
    formRangeInput.min = '10'
    formRangeInput.max = '21'
    formRangeInput.value = '10'
    formRangeInput.id = 'range-input'
    formRangeInput.name = 'form-range'

    // кнопка відправки
    const formSendButton = element('button')
    formSendButton.innerText = 'Оформити замовлення'

    // 1. збираємо блок з вибором часу
    formRange.append(formRangeSpan, formRangeInput) // + formTime

    // 2. збираємо блок зі знижкою
    discountLabel1.append(discountLabel1Input,discountLabel1Content)
    discountLabel2.append(discountLabel2Input,discountLabel2Content)
    discountElement.append(discountLabel1,discountLabel2)

    // 3. збираємо форму
    form.append(formTitle, inputName, inputPhone, textarea, discountElement, formTime, formRange, formSendButton)

    // 4. areaElement
    areaLviv.append(areaLvivInput, areaLvivSpan)
    areaNotLviv.append(areaNotLvivInput, areaNotLvivSpan)
    minimal.append('Мінімальна сума замовлення: ', minimalSpan)
    areaElement.append(areaLviv, areaNotLviv, minimal)

    // 5. goodsElement
    goodsElement.append(goodsElementInner)
    goodsElementInner.append(goodsFromBase())

    // 6. збираємо блок з даними
    formElement.append(areaElement, goodsElement, totalElement, form)

    // 7. збираємо все разом
    orderElement.append(wrapperElement, closeButton, formElement)

    // 8. global insert
    body.append(orderElement)
    body.classList.add('active')

    //! тепер всі елементи є в DOM, 
    //! можна з ними працювати напряму без евентів

    // маніпулюємо часом виготовлення або доставки
    const rangeInput = document.getElementById('range-input')
    const rangeSpan = document.getElementById('range-span')
    rangeInput && rangeInput.addEventListener('input', () => {

        rangeSpan.innerText = rangeInput.value
    })

    // видаляємо, клікнувши на клоз-батон
    closeButton.addEventListener('click', removeForm)

    // видаляємо, клікнувши на враппер
    wrapperElement.addEventListener('click', removeForm)
    
    // видаляємо, натиснувши esc
    document.addEventListener('keydown', event => {

        if(event.key === 'Escape' || event.code === 'Escape'){
    
            removeForm()
        }
    })

    // чЕкаємо місце доставки
    document.querySelectorAll('#area input').forEach(item => {

        item.addEventListener('input', function() {

            // міняємо мінімальну суму замовлення
            this.value === 'Львів' ? 
                minimalSpan.textContent = '400' : 
                minimalSpan.textContent = '600'

            // показати/сховати форму
            // totalSum() >= minimalSpan.textContent ? 
            //     form.classList.add('active') : 
            //     form.classList.remove('active')

            toggleForm()
        })
    })


    // видаляємо товари з форми замовлення
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
                
                //
                // todo якщо 1 елемент, видалити і закрити кошик
                
                //
                toggleBasket()
                
                names = []
                prices = []
                
                // знімаємо відмітку з усіх активних товарів
                for(let i = 0; i < articles.length; i++) articles[i].classList.remove('active')
    
            } else {
                
                // якщо їх більше 1, видалити означений, перезаписати базу
                names.splice(id, 1)
                prices.splice(id, 1)
    
                localStorage.setItem('names', JSON.stringify(names.join(';')))
                localStorage.setItem('prices', JSON.stringify(prices.join(';'))) 
    
                toggleBasket()
    
                // // test:
                // goodsElementInner.remove()
                // goodsElementInner = element()
                // goodsElement.append(goodsElementInner)
                // goodsElementInner.append(goodsFromBase())
                    
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

            // // test:
            // goodsElementInner.remove()
            // goodsElementInner = element()
            // goodsElement.append(goodsElementInner)
            // goodsElementInner.append(goodsFromBase())
    
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











})
// end virtual DOM

// видаляємо модальне вікно
function removeForm(){
    body.classList.remove('active')
    document.getElementById('order').remove()
}

// створюємо ДОМ-елемент
function element(tag = 'div'){
    return document.createElement(tag)
}

// отримуємо дані з бази, обробляємо і вставляємо в блок #goods > ul
function goodsFromBase(){

    names = JSON.parse(localStorage.getItem('names')).split(';')
    prices = JSON.parse(localStorage.getItem('prices')).split(';')

    const ul = element('ul')
    
    for(let i = 0; i<names.length; i++){
        
        const li = element('li')
        li.id = i

        const minus = element()
        minus.className = 'minus'

        const plus = element()
        plus.className = 'plus'

        const priceElement = element('span')
        priceElement.innerText = prices[i]
        
        li.append(minus, names[i], priceElement, plus)

        ul.append(li)
    }

    return ul
}

// загальна сума замовлення
function totalSum(){

    prices = JSON.parse(localStorage.getItem('prices')).split(';')

    return prices.reduce((sum,item) => sum += +item, 0)
}

// показуємо/ховаємо форму залежно від суми
function toggleForm(){

    const form = document.querySelector('form')
    const areaCheck = document.getElementById('area-check')

    areaCheck && (totalSum() >= areaCheck.textContent ? 
        form.classList.add('active') : 
        form.classList.remove('active'))
}















// end