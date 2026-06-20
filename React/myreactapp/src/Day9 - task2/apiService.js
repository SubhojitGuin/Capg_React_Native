import axios from "axios";

const url = 'http://localhost:4000/wildlifeRescues';

export async function getRescues() {
  return axios.get(url)
  .then(response => response.data)
  .catch(error => {
    console.error('Error fetching rescues:', error);
    throw error;
  });
}

export async function getRescueById(id) {
  return axios.get(`${url}/${id}`)
  .then(response => response.data)
  .catch(error => {
    console.error('Error fetching rescues:', error);
    throw error;
  });
}