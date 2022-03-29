import axios from "axios";

const {REACT_APP_BASE_URL, REACT_APP_YELP_API_KEY} = process.env || {}

const axiosInstance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${REACT_APP_YELP_API_KEY}`
  }
})

export default axiosInstance