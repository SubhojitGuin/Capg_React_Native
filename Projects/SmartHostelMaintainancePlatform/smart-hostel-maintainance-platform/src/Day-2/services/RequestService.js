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

export async function fetchRequestById(requestId) {
  return axios.get(`${url}/${requestId}`)
    .then(response => response.data)
    .catch(error => {
      console.log("Error fetching request by ID", error);
      throw error;
    });
  }

export async function createRequest(requestData) {
  return axios.post(url, requestData)
    .then(response => response.data)
    .catch(error => {
      console.log("Error creating request", error);
      throw error;
    });
}

export async function updateRequestStatus(requestId, newStatus) {
  return axios.patch(`${url}/${requestId}`, { status: newStatus })
    .then(response => response.data)
    .catch(error => {
      console.log("Error updating request status", error);
      throw error;
    });
}

export async function deleteRequest(requestId) {
  return axios.delete(`${url}/${requestId}`)
    .then(response => response.data)
    .catch(error => {
      console.log("Error deleting request", error);
      throw error;
    });
}

export async function fetchRequestsByStudent(studentId) {
  return axios.get(url, {
    params: {
      studentId: studentId
    }
  })
  .then(response => response.data)
  .catch(error => {
    console.log("Error fetching requests by student", error);
    return [];
  });
}