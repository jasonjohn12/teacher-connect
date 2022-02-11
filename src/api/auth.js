import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5001/',
    timeout: 1000,
    headers: {
      'Accept': 'application/json',
      //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    }
  });
  
  export function loginUser(user) {
    return api.post(`api/auth/login`, user)
  }