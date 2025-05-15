// src/api/api.ts
import axios from 'axios';

// const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";
const api = axios.create({
  baseURL: 'http://localhost:8001/api', // Your Django API base URL
  // baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors if needed (for auth tokens, etc.)
api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('ACCESS_TOKEN');
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchData = async (endpoint: string, params = {}) => {
  try {
    console.log(JSON.stringify(endpoint))
    const response = await api.get(endpoint, { params });
    // console.log(JSON.stringify(response.data))
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const createData = async (endpoint: string, data: any) => {
  // Similar functions for POST, PUT, DELETE
};