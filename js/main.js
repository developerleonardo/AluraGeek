import { conectionAPI } from "./conectionAPI.js";

const list = document.querySelector('[data-products]');

const createCard = (name, price, image) => {
    const product = document.createElement('div');
    product.className = 'card';
    product.innerHTML = `
    <div class="card">
        <img src="${image}" alt="">
        <p>${name}</p>
        <div class="products_information">
            <p>$ ${price}</p>
            <img src="./img/delete-icon.svg" alt="">
        </div>
    </div>`;

    return product;
};

const listProducts = async () => {
    const listAPI = await conectionAPI.listProducts();
    listAPI.forEach((product) => {
        list.appendChild(createCard(product.name, product.price, product.image))
    })
};

listProducts();