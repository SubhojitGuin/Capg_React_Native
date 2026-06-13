import axios from "axios";

const url = 'http://localhost:5000/requests';

export async function fetchRequests() {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.log("Error fetching requests", error);
      return [];
    })
}

export async function createRequest(requestData) {
  return axios.post(url, requestData)
    .then(response => response.data)
    .catch(error => {
      console.log("Error creating request", error);
      throw error;
    });
}