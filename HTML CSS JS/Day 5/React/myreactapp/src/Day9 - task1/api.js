import axios from 'axios';

const url = "http://localhost:4000/products";

export async function getProducts() {
    return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export async function deleteProduct(id) {
    return axios.delete(`${url}/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export async function addProduct(product) {
    return axios.post(url, product)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}

export async function updateProduct(id, updatedProduct) {
    return axios.put(`${url}/${id}`, updatedProduct)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}