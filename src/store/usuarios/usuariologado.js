import axios from "axios"
export const usuariologado = {
    namespaced: true,
    state: {
        usuariologado: {
        }
    },
    mutations:{
        setUsuarioLogado(state, usuario){
            state.usuariologado = usuario
        }
    },
    actions: {
        async getUsuarioLogado({commit}){
            const {data} = await axios.get('/details/')
            const [usuario] = data 
            commit('setUsuarioLogado', usuario)
        },
        async limparDadosUsuario({commit}){
            commit('setUsuarioLogado', {})
        }

    }
}