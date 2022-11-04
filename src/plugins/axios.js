import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = 'https://djangoaskon-project.up.railway.app/'

const tokenChange = (token = store.state.auth.user.access) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
}

const cleanToken = () => {
    axios.defaults.headers.common["Authorization"] = ''
}

export { tokenChange, cleanToken }