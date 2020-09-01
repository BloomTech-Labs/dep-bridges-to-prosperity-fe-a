import axios from 'axios';

// DEFINING AXIOS WITH AUTH FUNC
export const axiosWithAuth = idToken => {
  const token = idToken;

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: `${process.env.REACT_APP_API_URI}`,
  });
};
