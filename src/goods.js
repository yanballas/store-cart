const cart = {
    "p92779": {
        "name": "Мужские часы CASIO G-2900F-8VER",
        "url": "#",
        "image": "./image-1.jpg",
        "price": 1720.00
    },
    "p93039": {
        "name": "Мужские часы CASIO AE-1000W-1AVEF",
        "url": "#",
        "image": "./image-2.jpg",
        "price": 872.00
    },
    "p63553250": {
        "name": "Наручные часы Casio W-800H-1AVES",
        "url": "#",
        "image": "./image-3.jpg",
        "price": 484.00
    },
    "p93127": {
        "name": "Мужские часы CASIO EF-552-1AVEF",
        "url": "#",
        "image": "./image-4.jpg",
        "price": 2880.00
    },
    "p79946990": {
        "name": "Мужские часы Casio EF-527D-1AVEF",
        "url": "#",
        "image": "./image-5.jpg",
        "price": 4238.00
    },
    "p6533206": {
        "name": "Мужские часы CASIO SGW-100-2BER",
        "url": "#",
        "image": "./image-6.jpg",
        "price": 2416.00
    },
}
let out = '<div class="pricing-table row">';
for (let key in cart) {

    out += `<div class="col col-md-6 col-lg-4">`;
    out += `<div class="package featured text-center">`;
    out += `<h2>${cart[key]['name']}</h2>`;
    out += `<img src="${cart[key]['image']}">`;
    out += `<p class="price">${cart[key]['price']} UAH</p>`;
    out += `<button class="to-cart button-primary" data-articul="${key}">В корзину</button>`;
    out += `</div>`;
    out += `</div>`;
}
out += `</div>`;
document.querySelector('.goods').innerHTML = out;

const data = {}; // сюда добавляю товары которые в корзину

document.querySelector('.goods').addEventListener('click', event => {
    if (event.target.classList.contains('to-cart')) {
        let articul = event.target.dataset['articul'];
        if (data[articul] !== undefined) {
            data[articul]['count']++;
        }
        else {
            data[articul] = cart[articul];
            data[articul]['count'] = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
    }
})