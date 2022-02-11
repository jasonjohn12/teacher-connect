import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5001/',
    timeout: 1000,
  });


  const apiUrl = "http://localhost:5000";

  export async function getStudents(token) {
      console.log('asdf', token)
    return await api.get(`api/students`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
  }
  