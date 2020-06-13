import axios from 'axios';

const api = axios.create({
  baseURL:'https://hackathon-ccr-backend.herokuapp.com'
})

export default api