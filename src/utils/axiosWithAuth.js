import axios from 'axios';

// DEFINING AXIOS WITH AUTH FUNC
export const axiosWithAuth = idToken => {
  const token = idToken;

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: 'http://localhost:8000',
  });
};
