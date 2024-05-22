import { conectionAPI } from "./conectionAPI.js";

const form = document.querySelector('[data-form]');

const createCard = async (event) => {
    event.preventDefault();
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const image = document.querySelector('[data-image]').value;

    try {
        await conectionAPI.sendProducts(name, price, image);
    } catch {
        console.log("Hubo un error");
    }
};

form.addEventListener('submit', (event) => createCard(event));

export const createNewCard = {

}