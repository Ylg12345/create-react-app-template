import axios from 'axios'

const request = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/298605/api/login', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

export default request
