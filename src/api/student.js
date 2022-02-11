import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
});

const apiUrl = "http://localhost:5000";

export async function getStudents(token) {
  return await api.get(`api/students`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function addStudent(token, student) {
  return await api.post(`api/students`, student, {
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    },
  });
}
