async function listProducts () {
    const api = await fetch('http://localhost:3001/products');
    const convertedAPI = await api.json();

    return convertedAPI;
};

async function sendProducts (name, price, image) {
    const api = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            price: price,
            image: image
        })
    });
    const convertedAPI = await api.json();
    listProducts();
    return convertedAPI;
};

async function deleteProduct (id) {
    const api = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });
    return api;
}

listProducts();

export const conectionAPI = {
    listProducts,
    sendProducts,
    deleteProduct
}