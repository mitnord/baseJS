//приступим

class product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const basket = {}


document.querySelectorAll('.featuredItem').forEach(elem => elem.addEventListener('click', event => {
    const choosenItem = event.currentTarget;
    const addedItem = new product(choosenItem.dataset.id, choosenItem.dataset.name, choosenItem.dataset.price);
    addToCart(basket, addedItem);

})
);

document.querySelector('.cartIconWrap').addEventListener('click', event => {
    console.log(event.currentTarget.parentNode);
    event.currentTarget.parentNode.querySelector('.cartCounter').style.visibility = "visible";
})



function addToCart(basket, productObj) {
    if (!basket.hasOwnProperty(`${productObj.id}`)) {
        basket[`${productObj.id}`] = productObj;
        basket[`${productObj.id}`].count = 1;
        basket[`${productObj.id}`].total = basket[`${productObj.id}`].price;

    } else {
        basket[`${productObj.id}`].count++;
        basket[`${productObj.id}`].total = basket[`${productObj.id}`].count * basket[`${productObj.id}`].price;
    }

    document.querySelector('.cartIconWrap span').textContent = parseObj(basket, 'count');

    let basketSum = document.querySelector('.cartCounter');
    basketSum.lastElementChild.querySelector('span').textContent = parseObj(basket, 'total');

    basketSum.firstElementChild.innerHTML = drawBasket(basket);


}

function parseObj(basketObj, basketProp) {
    let summary = 0;
    for (let prodData in basketObj) {
        summary = summary + Number(basketObj[prodData][basketProp]);
    }
    return summary;
}

function drawBasket(basketObj) {
    let basketHTML = `                       
    <div>Название товара</div>
    <div>Количество</div>
    <div>Цена за шт.</div>
    <div>Итого</div>`;


    for (const item in basketObj) {
        basketHTML = basketHTML + `
        <div> ${basketObj[item].name}</div>
        <div>${basketObj[item].count}</div>
        <div>${basketObj[item].price}</div>
        <div>${basketObj[item].total}</div>
        `;
    }
    return basketHTML;
}