import axios from 'axios';

const url = 'http://localhost:5000/categories';

export async function fetchCategories() {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching categories:', error);
      return [];
    });
}