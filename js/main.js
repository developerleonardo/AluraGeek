import { conectionAPI } from "./conectionAPI.js";
import { createNewCard } from "./createNewCard.js";

const list = document.querySelector('[data-products]');

const createCard = (name, price, image) => {
    const product = document.createElement('div');
    product.className = 'card';
    product.innerHTML = `
        <img src="${image}" alt="a preview of the product">
        <p>${name}</p>
        <div class="products_information">
            <p>$ ${price}</p>
            <img src="./img/delete-icon.svg" alt="delete icon" data-delete>
        </div>
    `;

    return product;
};

const listProducts = async () => {
    const listAPI = await conectionAPI.listProducts();
    listAPI.forEach((product) => {
        list.appendChild(createCard(product.name, product.price, product.image))
    })
};

const deleteProduct = async () => {
    const listAPI = await conectionAPI.listProducts();
    if (listAPI.length > 0) {
        const deleteIcons = await document.querySelectorAll('[data-delete]');
        for (let index = 0; index < deleteIcons.length; index++) {
            let product = listAPI[index];
            deleteIcons[index].addEventListener('click', () => {
                conectionAPI.deleteProduct(product.id);
            });
        }
    }
};

listProducts();
deleteProduct();