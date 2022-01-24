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
    const links = $$("#banner ul a")

    $('#menu').addEventListener("click", clickHandler)

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
$$('.leaflet-zoom-animated').forEach(item => item.setAttribute('alt', ''))

/* ///////////
// телефони //
/////////// */

const phones = `
<div id="order-wrapper"></div>
<div id="close"></div>
<nav id="call">
    <ul>
        <li><a href="tel:0731305870" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473.806 473.806" fill="%23283034" width="40" height="40"><path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path><path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path><path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path></svg> (073) 130-58-70</a></li>

        <li><a href="tel:0986533151" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473.806 473.806" fill="%23283034" width="40" height="40"><path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path><path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path><path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path></svg> (098) 65-331-51</a></li>

    </ul>
</nav>
`

$('#phone').addEventListener('click', () => {

    const phoneElement = element()
    phoneElement.id = 'order'
    phoneElement.innerHTML = phones

    body.append(phoneElement)
    body.classList.add('active')

    document.addEventListener('keydown', event => {

        if(event.key === 'Escape' || event.code === 'Escape'){

            removeOrder()
        }
    })

    // закриваємо модальне вікно
    phoneElement.addEventListener('click', event => {

        // видаляємо, клікнувши на клоз-батон
        if(event.target.id === 'close') removeOrder()

        // видаляємо, клікнувши на враппер
        if(event.target.id === 'order-wrapper') removeOrder()
    })

})

/* ////////////////////////////
// Політика конфіденційності //
//////////////////////////// */

const terms = `
<div id="order-wrapper"></div>
<div id="close"></div>
<div id="terms-and-condition">
    <h3>ПУБЛІЧНИЙ ДОГОВІР (ОФЕРТА)</h3>
    <p>Угода користувача</p><p>на замовлення, купівлю-продаж і доставку продукції «Godzilla sushi»</p><p>Цей договір є офіційною та публічною пропозицією Продавця укласти договір купівлі-продажу Товару, наданого на сайті https://miso.lviv.ua/ Даний договір є публічним, тобто відповідно до статті 633 Цивільного кодексу України, його умови є однаковими для всіх покупців незалежно від їх статусу (фізична особа, юридична особа, фізична особа-підприємець) без надання переваги одному покупцю перед іншим. Шляхом укладення цього Договору покупець в повному обсязі приймає умови та порядок оформлення замовлення, оплати продукції, її доставки та повернення, відповідальності за недобросовісне замовлення та усі інші умови договору. Договір вважається укладеним з моменту натискання кнопки «Оформити Замовлення» на сторінці оформлення замовлення в Розділі «Кошик» і отримання Покупцем від Продавця підтвердження замовлення в електронному вигляді.</p><p>1. Визначення термінів</p><p><br></p><p>1.1. Публічна оферта (далі - «Оферта») - публічна пропозиція Продавця, адресована невизначеному колу осіб, укласти з Продавцем договір купівлі-продажу Товару дистанційним способом (далі - «Договір») на умовах, що містяться в цій Оферті.</p><p>1.2. Товар – об'єкт угоди сторін, який був обраний покупцем на сайті Продавця та поміщений у кошик, або вже придбаний Покупцем у Продавця дистанційним способом.</p><p>1.3. Сайт Продавця - https://miso.lviv.ua/ , створений для укладення договорів купівлі-продажу на підставі ознайомлення Покупця із запропонованим Продавцем описом Товару за допомогою мережі Інтернет.</p><p>1.4. Покупець – фізична або юридична особа, яка оформила замовлення щодо купівлі обраного ним Товару, який представлений на сайті Продавця.</p><p>1.5. Продавець – Фізична особа Назар Фина, яка реалізує Товари представлені на Сайті Продавця.</p><p>1.6. Замовлення ?- рішення Покупця придбати Товар шляхом належного оформлення запиту Покупця на придбання і доставку за вказаною Покупцем адресою, обраного на Сайті Продавця Товару.</p><p><br></p><h3><b>2. Предмет Договору</b></h3><h3><b><br></b></h3><p>2.1. Продавець зобов’язується передати у власність Покупця Товар, а Покупець зобов’язується оплатити і прийняти Товар на умовах цього Договору.</p><p>2.2. Даний Договір поширюється на всі види Товару, представленого на Сайті, поки такі пропозиції з описом присутні в каталозі Сайту Продавця.</p><p><br></p><h3><b>3. Оформлення Замовлення</b></h3><p><br></p><p>3.1. Продавець забезпечує наявність Товарів, представлених на його Сайті. Супроводжуючі Товар фотографії можуть незначно відрізнятися від фактичного зовнішнього вигляду Товару. Супроводжуючі Товар опис/склад не претендують на вичерпну інформативність і можуть містити друкарські помилки</p><p>3.2. Покупець самостійно оформлює замовлення на Сайті Продавця через форму «Кошика» або зробивши замовлення за номером телефону, вказаним на Сайті Продавця.</p><p>3.3. Продавець має право відмовитися від передання замовлення Покупцеві у випадку, якщо відомості, вказані Покупцем під час оформлення замовлення, є неповними або викликають підозру щодо їх дійсності, або вартість Замовлення менше мінімальної суми вказаної на Сайті.</p><p>3.4. При оформленні замовлення на Сайті Продавця Покупець зобов'язується надати наступну обов’язкову інформацію, необхідну Продавцю для виконання замовлення:</p><p>3.4.1. Контактний телефон</p><p>3.4.2. Адреса, за якою слід доставити Товар (якщо доставка до адреси Покупця);</p><p>3.4.3. Спосіб оплати.</p><p>3.5. Найменування, кількість, ціна обраного Покупцем Товару вказуються в кошику Покупця на сайті Продавця.</p><p>3.6. При оформленні замовлення через оператора Продавця (п. 3.2. Цієї Оферти) Покупець зобов'язується надати інформацію, зазначену в п. 3.4. цієї Оферти.</p><p>3.7. Прийняття Покупцем умов цієї Оферти здійснюється за допомогою внесення Покупцем відповідних даних в кошику на Сайті Продавця (п.3.4. цієї Оферти) та натискання кнопки «Відправити замовлення» або при оформленні Замовлення через оператора. Після оформлення Замовлення через Оператора дані про Покупця вносяться до бази даних Продавця.</p><p>3.8. Покупець несе відповідальність за достовірність наданої інформації при оформленні Замовлення.</p><p><br></p><p><b>3.9. Укладаючи Договір, тобто акцептуючи умови даної пропозиції (запропоновані умови придбання Товару), шляхом оформлення Замовлення, Покупець підтверджує наступне:</b></p><p><br></p><p>а) Покупець цілком і повністю ознайомлений, і згоден з умовами цієї пропозиції (оферти);</p><p><br></p><p>б) Він дає дозвіл на збір, обробку та передачу персональних даних, дозвіл на обробку персональних даних діє протягом усього терміну дії Договору, а також протягом необмеженого терміну після закінчення його дії. Крім цього, укладенням договору Покупець підтверджує, що він повідомлений (без додаткового повідомлення) про права, встановлених Законом України "Про захист персональних даних", про цілі збору даних, а також про те, що його персональні дані передаються Продавцю з метою можливості виконання умов цього Договору, можливості проведення взаєморозрахунків. Покупець також погоджується з тим, що Продавець має право надавати доступ та передавати його персональні дані третім особам без будь-яких додаткових повідомлень Покупця з метою виконання замовлення Покупця. Обсяг прав Покупця, як суб'єкта персональних даних відповідно до Закону України "Про захист персональних даних" йому відомий і зрозумілий.</p><p><br></p><h3><b>4. Ціна і Доставка Товару</b></h3><p><br></p><p>4.1 Ціни на Товари та послуги визначаються Продавцем самостійно та вказані на Сайті Продавця. Всі ціни на Товари вказані на сайті у гривнях.</p><p>4.2 Ціни на Товари та послуги можуть змінюватися Продавцем в односторонньому порядку залежно від кон'юнктури ринку. При цьому ціна окремої одиниці Товару, вартість якої оплачена Покупцем в повному обсязі, не може бути змінена Продавцем в односторонньому порядку.</p><p>4.3. Вартість Товару, яка вказана на Сайті Продавця включає в себе вартість доставки Товару Покупцю в межах міста вказаного на Сайті. Доставка за межі міста вказаного на Сайті обумовлюється окремо з оператором Продавця.</p><p>4.4. Строк Доставки складає від 60 хвилин від моменту Замовлення та оплати Товару, якщо Товар одразу оплачується через Сайт Продавця.</p><p>4.5. Зобов'язання Покупця по оплаті Товару вважаються виконаними з моменту надходження Продавцю коштів або розрахунку за місцем отримання Товару, якщо Покупець самостійно забирає Товар.</p><p>4.6. Розрахунки між Продавцем і Покупцем за Товар здійснюються способами, зазначеними на сайті Продавця.</p><p>4.7. При отриманні товару Покупець повинен у присутності представника Продавця перевірити відповідність Товару якісним і кількісним характеристикам. Якщо Покупцем виявлені недоліки щодо кількості Товару чи його якості, то Продавець у разі обґрунтованості претензій Покупця зобов’язаний їх усунути.</p><p>4.8. Претензії щодо кількості та якості Товару не приймаються після отримання Товару Покупцем.</p><p><br></p><h3><b>5. Права та обов’язки Сторін</b></h3><p><br></p><p>5.1. Продавець зобов’язаний:</p><p>5.1.1. Передати Покупцеві товар у відповідності до умов цього Договору та замовлення Покупця.</p><p>5.1.2. Не розголошувати будь-яку приватну інформацію про Покупця і не надавати доступ до цієї інформації третім особам, за винятком випадків, передбачених законодавством та під час виконання Замовлення Покупця.</p><p>5.2. Продавець має право:</p><p>5.2.1 Змінювати умови цього Договору, а також ціни на Товари та послуги, в односторонньому порядку, розміщуючи їх на Сайті. Всі зміни набувають чинності з моменту їх публікації.</p><p>5.3 Покупець зобов'язується:</p><p>5.3.1 До моменту укладення Договору ознайомитися зі змістом Договору, умовами Договору і цінами, запропонованими Продавцем на Сайті.</p><p>5.3.2 На виконання Продавцем своїх зобов'язань перед Покупцем останній повинен повідомити всі необхідні дані, що однозначно ідентифікують його як Покупця, і достатні для доставки Покупцеві замовленого Товару.</p><p>5.3.3. Перевірити відповідність Товару якісним і кількісним характеристикам при отриманні Товару і у випадку виявлення недоліків одразу повідомити про це представника Продавця або оператора Продавця.</p><p><br></p><h3><b>6. Відповідальність</b></h3><p><br></p><p>6.1. Продавець не несе відповідальності за шкоду, заподіяну Покупцеві або третім особам внаслідок неналежного виконання Покупцем умов цього Договору.</p><p>6.2. Продавець не несе відповідальності за неналежне, несвоєчасне виконання Замовлень і своїх зобов’язань у випадку надання Покупцем недостовірної або помилкової інформації.</p><p>6.3. Продавець і Покупець несуть відповідальність за виконання своїх зобов'язань відповідно до чинного законодавства України і положень цього Договору.</p><p>6.4. Продавець або Покупець звільняються від відповідальності за повне або часткове невиконання своїх зобов'язань, якщо невиконання є наслідком форс-мажорних обставин як: війна або військові дії, землетрус, повінь, пожежа, пандемії, епідемії, надзвичайний стан чи надзвичайна ситуація, карантинні заходи та інші обставини, що виникли незалежно від волі Продавця і / або Покупця після укладення цього договору. Сторона, яка не може виконати свої зобов'язання, негайно повідомляє про це іншу Сторону.</p><p><br></p><h3><b>7. Конфіденційність і захист персональних даних</b></h3><p><br></p><p>7.1. Надаючи свої персональні дані на Сайті при реєстрації або оформленні Замовлення, Покупець надає Продавцеві свою добровільну згоду на обробку, використання (у тому числі і передачу) своїх персональних даних, а також вчинення інших дій, передбачених Законом України «Про захист персональних даних», без обмеження терміну дії такої згоди.</p><p>7.2. Продавець зобов'язується не розголошувати отриману від Покупця інформацію. Не вважається порушенням надання Продавцем інформації своїм працівникам, контрагентам і третім особам, що діють на підставі договору з Продавцем, в тому числі і для виконання зобов'язань перед Покупцем, а також у випадках, коли розкриття такої інформації встановлено вимогами чинного законодавства України.</p><p>7.3. Покупець несе відповідальність за підтримання своїх персональних даних в актуальному стані. Продавець не несе відповідальності за неякісне виконання або невиконання своїх зобов'язань у зв'язку з неактуальністю інформації про Покупця або невідповідністю її дійсності.</p><p><br></p><h3><b>8. Інші умови</b></h3><p><br></p><p>8.1. Цей договір укладено на території України і діє відповідно до чинного законодавства України.</p><p>8.2. Усі спори, що виникають між Покупцем і Продавцем, вирішуються шляхом переговорів. У випадку недосягнення врегулювання спірного питання шляхом переговорів, Покупець та/або Продавець мають право звернутися за вирішенням спору до судових органів відповідно до чинного законодавства України.</p><p>8.3. Продавець має право вносити зміни до цього Договору в односторонньому порядку, передбаченому п. 5.2.1. Договору. Крім того, зміни до Договору також можуть бути внесені за взаємною згодою Сторін в порядку, передбаченому чинним законодавством України.</p>
</div>
`

$('#terms').addEventListener('click', event => {

    event.preventDefault()

    const termsElement = element()
    termsElement.id = 'order'
    termsElement.innerHTML = terms

    body.append(termsElement)
    body.classList.add('active')


    document.addEventListener('keydown', event => {

        if(event.key === 'Escape' || event.code === 'Escape'){

            removeOrder()
        }
    })

    // закриваємо модальне вікно
    termsElement.addEventListener('click', event => {

        // видаляємо, клікнувши на клоз-батон
        if(event.target.id === 'close') removeOrder()

        // видаляємо, клікнувши на враппер
        if(event.target.id === 'order-wrapper') removeOrder()
    })
})



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
// назва
let names = []

// вартість
let prices = []

// знижка
let discount = []

// додаткові інгредієнти
let add1 = []
let add2 = []

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
            add1 = JSON.parse(localStorage.getItem('add1')).split(';')
            add2 = JSON.parse(localStorage.getItem('add2')).split(';')

            // додаємо назву
            names.push(product.querySelector('h1').textContent)

            // додаємо ціну
            prices.push(product.querySelector('header span').textContent)

            // особливий товар
            if(product.classList.contains('discount')){

                // додаємо його ціну до відповідного масиву, з якого і будемо вираховувати знижку
                discount.push(product.querySelector('header span').textContent)
            } else {

                discount.push(0)
            }

            let group1 = ''
            // 1 group
            if(product.querySelector('.first-group')){

                group1 = product.querySelector('.first-group li').textContent
            }

            let group2 = ''
            if(product.querySelector('.second-group')){

                group2 = product.querySelector('.second-group li') .textContent
            }

            // додаткові дані
            add1.push(group1)
            add2.push(group2)

            // пишемо у базу
            localStorage.setItem('names', JSON.stringify(names.join(';')))
            localStorage.setItem('prices', JSON.stringify(prices.join(';')))
            localStorage.setItem('discount', JSON.stringify(discount.join(';')))
            localStorage.setItem('add1', JSON.stringify(add1.join(';')))
            localStorage.setItem('add2', JSON.stringify(add2.join(';')))

        } else {

            // додаємо назву
            names.push(product.querySelector('h1').textContent)

            // додаємо ціну
            prices.push(product.querySelector('header span').textContent)

            // особливий товар
            if(product.classList.contains('discount')){

                // додаємо його ціну до відповідного масиву, з якого і будемо вираховувати знижку
                discount.push(product.querySelector('header span').textContent)
            } else {

                discount.push(0)
            }

            let group1 = ''
            // 1 group
            if(product.querySelector('.first-group')){

                group1 = product.querySelector('.first-group li').textContent
            }

            let group2 = ''
            if(product.querySelector('.second-group')){

                group2 = product.querySelector('.second-group li') .textContent
            }

            // додаткові дані
            add1.push(group1)
            add2.push(group2)

            // пишемо у базу
            localStorage.setItem('names', JSON.stringify(names.join(';')))
            localStorage.setItem('prices', JSON.stringify(prices.join(';')))
            localStorage.setItem('discount', JSON.stringify(discount.join(';')))
            localStorage.setItem('add1', JSON.stringify(add1.join(';')))
            localStorage.setItem('add2', JSON.stringify(add2.join(';')))
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
const order = `
<div id="order-wrapper"></div>
<div id="close"></div>
<div id="form">

    <div class="notice">Мінімальна сума замовлення у межах міста (з доставкою) 400 гривень, доставка за межі міста від 600 гривень.</div>

    <div id="goods"></div>

    <div id="total-goods"></div>

    <form class="active">
        <p>Оформити замовлення?</p>

        <div id="discount">
            <label id="discount-delivery">
                <input type="radio" name="radio" checked> доставка
            </label>

            <label id="discount-without-delivery">
                <input type="radio" name="radio"> забрати самостійно <span></span>
            </label>
        </div>

        <input type="text" name="name" placeholder="ім'я *" required id="form-name">
        <input type="text" name="phone" placeholder="телефон *" required id="form-phone">
        <textarea name="comment" placeholder="коментар" id="form-comment"></textarea>

        <button>Оформити замовлення</button>
    </form>
</div>
`

basket.addEventListener('click', () => {

    const orderElement = element()
    orderElement.id = 'order'
    orderElement.innerHTML = order

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

    // якщо є дискаунтний товар -- показати блок щодо знижки
    toggleDiscount()

    // todo: якщо ... показати блок, що є знижка на фреш-соки

    // якщо сума замовлення більше 400 -- одразу показати форму оформлення
    totalSum() > 400 && ($('form').className = 'active')

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
                add1 = []
                add2 = []

                // знімаємо відмітку з усіх активних товарів
                for(let i = 0; i < products.length; i++) products[i].classList.remove('active')

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
                // toggleForm()

                // оновлюємо суму замовлення по кожному кліку
                $('#total-goods').innerHTML = totalSum()

                // якщо є дискаунтний товар -- показати блок щодо знижки
                toggleDiscount()
            }

        // дублюємо замовлені товари
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
            // toggleForm()

            // оновлюємо суму замовлення по кожному кліку
            $('#total-goods').innerHTML = totalSum()

            // якщо є дискаунтний товар -- показати блок щодо знижки
            toggleDiscount()

        // // обираємо час доставки/забирання
        // } else if(event.target.id === 'range-input'){

        //     const range = event.target

        //     range.addEventListener('input', () => {

        //         $('#range-span').innerText = range.value
        //     })

        // обираємо варіант: доставка/забрати самостійно
        } else if(event.target.id === 'discount-delivery'){

            $('#total-goods').innerText = totalSum()

        // обираємо варіант: доставка/забрати самостійно
        } else if(event.target.id === 'discount-without-delivery'){

            $('#total-goods').innerText = totalSum() - totalSumDiscount()/100*25
        }

    })

    // // чЕкаємо місце доставки
    // $$('#area input').forEach(item => {

    //     item.addEventListener('input', function() {

    //         // міняємо мінімальну суму замовлення
    //         this.value === 'Львів' ?
    //             $('#area-check').textContent = '400' :
    //             $('#area-check').textContent = '600'

    //         // показати/сховати форму
    //         // toggleForm()
    //     })
    // })

    // Всього (сума в гривнях)
    $('#total-goods').innerHTML = totalSum()

    // Список товарів
    $('#goods').innerHTML = viewGoods()







/* ////////////////////////
// оформлення замовлення //
//////////////////////// */

// const formElem = document.querySelector('#form form')

// console.log(formElem)

    $('#form form').onsubmit = async function(event) {

        event.preventDefault()

        const param = new URLSearchParams()

        const form_name = $('#form-name').value
        const form_phone = $('#form-phone').value
        const form_comment = $('#form-comment').value
        const form_range = $('#range-input').value

        let discount_without_delivery = '0';

        if($('#discount-without-delivery input').checked === true){

            discount_without_delivery = $('#discount-without-delivery span').textContent
        }

        // order goods
        param.append('goods', names)
        param.append('prices', totalSum())

        param.append('name', form_name)
        param.append('phone', form_phone)
        param.append('comment', form_comment)
        param.append('range', form_range)
        param.append('discount', discount_without_delivery)

        let response = await fetch('https://miso.lviv.ua/mail/send.php', {

            method: 'POST',
            body: param
        })

        let result = await response.text()

        // успішна відправка
        if(result == 'ok'){

            // очистка бази
            localStorage.clear()

            removeOrder()
            // hideOrderForm()
            toggleBasket()

            names = []
            prices = []

            // очищаємо всі активні товари
            for(let i = 0; i < products.length; i++) products[i].classList.remove('active')

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
                location.reload()

            }, 2000)
        } else {

            console.error(error)
        }

    }

})
// end virtual DOM

// видаляємо модальне вікно
function removeOrder(){
    body.classList.remove('active')
    $('#order') && $('#order').remove()
}

// створюємо ДОМ-елемент
function element(tag = 'div'){
    return document.createElement(tag)
}

// виводимо товари списком у формі оформлення замовлення
function viewGoods(){
    names = JSON.parse(localStorage.getItem('names')).split(';')
    prices = JSON.parse(localStorage.getItem('prices')).split(';')

    // todo: перевірка -- якщо names містить спецсимволи, то розбити рядок і винести дані під блок з товаром (додаткові опції для місо-боула)

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

// загальна сума товарів зі знижкою
function totalSumDiscount(){

    discount = JSON.parse(localStorage.getItem('discount')).split(';')

    return discount.reduce((sum,item) => sum += +item, 0)
}

// показуємо/ховаємо блок з пропозицією забрати самому
function toggleDiscount(){
    if(totalSumDiscount() > 0){

        $('#discount').classList.add('active')
        $('#discount span').innerText = totalSumDiscount()/100*25
    } else {

        $('#discount').classList.remove('active')
    }
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
