import axios from 'axios'


class AuthService{
    async login(usuario){
        const { data } = await axios.post('/token/', usuario)
        return data
    }
    async register(usuario){
        const { data } = await axios.post('/usuarios/', usuario)
        return data
    }
}

export default new AuthService()