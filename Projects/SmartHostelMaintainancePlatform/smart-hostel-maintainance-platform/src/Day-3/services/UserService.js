import axios from "axios";

const url = "http://localhost:5000/users";

export async function loginUser(email, password) {
  console.log('Attempting login with:', { email, password });
  return axios.get(url, {
    params: {
      email,
      password
    }
  }).then((response) => {
    if (response.data.length > 0) {
      console.log('Login successful in User Service:', response.data[0]);
      return response.data[0];
    } else {
      throw new Error('Invalid email or password');
    }
  }).catch((error) => {
    console.error('Login error:', error);
    throw error;
  });
}