async function listProducts () {
    const api = await fetch('http://localhost:3001/products');
    const convertedAPI = await api.json();

    return convertedAPI;
}

listProducts();

export const conectionAPI = {
    listProducts
}