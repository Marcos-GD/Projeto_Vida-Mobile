import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users', // Necessario o https:// antes do link
});

export default api;
