import axios from 'axios';

export default function useAxios() {
  const baseURL = 'http://localhost:8000';
  const headers = {
    'Context-Type': 'application/json',
  };

  return axios.create({
    baseURL,
    headers,
    withCredentials: true,
  });
}
