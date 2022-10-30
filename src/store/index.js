import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import { usuariologado } from './usuarios/usuariologado'
import { usuariovisitado } from './usuarios/usuariovisitado'
import {auth} from './auth'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    key: 'askon-vue-django'
})

const modules = {
    auth,
    usuariologado,
    usuariovisitado
}

export default new Vuex.Store({
    modules,
    plugins: [vuexLocal.plugin]
})