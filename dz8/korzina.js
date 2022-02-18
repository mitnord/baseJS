//приступим
class product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = 0;
    }
}

const basket = {}

function addToCart(productObj) {
    if (typeof basket[productObj.id] === 'undefined') {
        basket[productObj.id].push(productObj);
    } else {
        basket[productObj.id].count++;
    }
}

const counter = document.querySelector('.cartIconWrap span');
document.querySelectorAll('.featuredItem').forEach(elem => elem.addEventListener('click', event => {
    counter.textContent++;
    let prod = event.target.querySelector('.featuredPrice');
    addToCart(event.target.querySelector('.featuredPrice').textContent
})
);