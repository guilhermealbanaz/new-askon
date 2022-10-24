import authService from '@/api/auth'
import { tokenChange, cleanToken } from '@/plugins/axios.js'

export const auth = {
    namespaced: true,
    state: () => ({
        loggedIn: false,
        user: {}
    }),
    mutations: {
        setLoginInfo(state, user) {
            state.user = user
            state.loggedIn = true
        },
        setLogout(state) {
            state.user = {}
            state.loggedIn = false
        }
    },
    actions: {
        async login({ commit }, user) {
            try {
                const userInfo = await authService.login(user)
                commit('setLoginInfo', userInfo)
                tokenChange(userInfo.access)
                return Promise.resolve(userInfo)
            } catch (e) {
                cleanToken()
                commit('setLogout')
                return Promise.reject(e)
            }

        },
        logout({ commit }) {
            cleanToken()
            commit('setLogout')
        }
    }
} 