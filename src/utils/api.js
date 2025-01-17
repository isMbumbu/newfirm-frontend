// src/utils/api.js
import axios from 'axios';

const API = axios.create({ 
  baseURL: 'http://localhost:5000' // URL of your backend
});

export default API;
