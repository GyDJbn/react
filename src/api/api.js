import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://129.211.169.131:33833/'
export const SEVER_IP = 'http://129.211.169.131:33833/'
console.log(SEVER_IP)

// 登陆
export const login = (params) =>  axios.post('/login.php', qs.stringify({...params }))

// 验证码
export const valitecode = (params) => axios.get('http://129.211.169.131:33833/valitecode.php')

// 注册
export const reg = (params) => axios.post('http://129.211.169.131:33833/reg.php',qs.stringify(params))

// 猜你喜欢
export const gethouselist = (params) => axios.get('/gethouselist.php')