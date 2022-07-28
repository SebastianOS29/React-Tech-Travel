import axios from 'axios';

const api = axios.create({
  baseURL: 'https://62e0998cfa8ed271c4852b3d.mockapi.io/',
});

export default api;
