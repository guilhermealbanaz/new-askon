import axios from 'axios'


class AuthService {
    async login(usuario) {
        const { data } = await axios.post('/token/', usuario)
        return data
    }
    async register(usuario) {
        try {
            await axios.post('/usuarios/', usuario)
        } catch (err) {
            return err
        }
    }
}

export default new AuthService()