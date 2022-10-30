import axios from "axios"


export const usuariovisitado = {
    namespaced:true,
    state: {
        usuariovisitado: {}
    },
    mutations: {
        setUsuariovisitado(state,user){
            state.usuariovisitado = user
        }
    },
    actions:{
        async getUsuariovisitado({commit},id){
            const {data} = await axios.get(`/usuarios/${id}`)
            console.log('print no vuex!',data)
            commit('setUsuariovisitado', data)
        }
    }
}
