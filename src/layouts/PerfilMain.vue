<template>
  <div class="tude">
    <div class="container-perfil">
      <div class="box-perfil">
        <div
          class="icone-perfil"
          :style="{ backgroundImage: 'url(' + usuario.imagem_perfil + ')' }"
        >
          <span class="usuario-username">{{ usuario.username }}</span>
        </div>
        <button
          class="text-white-perfil"
          @click="$refs['input-imagem-perfil'].click()"
          v-if="!$route.params.id"
        >
          Alterar foto de Perfil
        </button>
        <p
          class="text-white-perfil"
          @click="changecomponent('editar')"
          v-if="!$route.params.id"
        >
          Editar Perfil
        </p>
        <p class="text-white-perfil" @click="changecomponent('resenhas')">
          Resenhas
        </p>
        <p
          class="text-white-perfil button-sair"
          v-if="!$route.params.id"
          @click="submitLogout"
        >
          Sair
        </p>
      </div>
      <ResenhasFeitas v-if="ComponenteMostrado == 'resenhas'" />
      <EditarPerfil v-if="ComponenteMostrado == 'editar'" />
      <input
        type="file"
        v-show="false"
        ref="input-imagem-perfil"
        @change="alterarImagemPerfil"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import ResenhasFeitas from "@/components/perfil/ResenhasFeitas.vue";
import EditarPerfil from "@/components/perfil/EditarPerfil.vue";

export default {
  components: {
    ResenhasFeitas,
    EditarPerfil,
  },

  data() {
    return {
      resenhas: [],
      usuario: {},
      ComponenteMostrado: "resenhas",
    };
  },

  methods: {
    ...mapActions("auth", ["logout"]),

    changecomponent(ComponenteMostrado) {
      this.ComponenteMostrado = ComponenteMostrado;
    },

    async getUsuario(id) {
      if (id) {
        const { data } = await axios.get("usuarios/" + id);
        this.usuario = data;
        console.log(data);
        return;
      } else {
        const { data } = await axios.get("meu_usuario/");
        this.usuario = data[0];
        console.log(data);
      }
    },

    submitLogout() {
      this.logout();
      this.$router.push({ name: "Login" });
    },

    alterarImagemPerfil() {
      const imagem = this.$refs["input-imagem-perfil"].files[0];
      const reader = new FileReader();
      const _this = this;

      reader.onload = async () => {
        const resultado = reader.result.split(",")[1];

        await axios.patch(`/usuarios/${_this.usuario.id}/`, {
          imagem_perfil: resultado,
        });

        _this.getUsuario();
      };

      reader.readAsDataURL(imagem);
    },
  },

  mounted() {
    const id = this.$route.params.id;
    console.log(id);

    if (id) {
      this.getUsuario(id);
    } else {
      this.getUsuario();
    }
  },
};
</script>

<style>
.button-sair {
  padding: 5px 20px;
  border: 1px solid darkred;
  border-radius: 5px;
  transition: 0.2s;
  text-align: center;
}

.usuario-username {
  position: absolute;
  height: 26px;
  top: calc(100% - 13px);
  background: #c9c9c9;
  padding: 0 15px;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
}

.button-sair:hover {
  background: darkred;
}

.tude {
  width: 100vw;
  height: 100vh;
  background-color: #111;
  position: absolute;
  top: 0;
}
.nav-2 {
  width: 200px;
  height: 120px;
  display: flex;
}
.logo-nav-2 {
  width: 109px;
  height: 100%;
  background-image: url(../assets/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 3px;
}

.box-lateral-2 {
  -webkit-clip-path: polygon(0 0, 100% 0%, 33% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 33% 100%, 0% 100%);
  width: 70px;
  height: 100%;
  background-color: #4630ab;
  border-bottom: 1px solid #4630ab;
  box-sizing: border-box;
}

.borda-lateral-2 {
  -webkit-clip-path: polygon(0 0, 95% 0%, 30% 100%, 0% 100%);
  clip-path: polygon(0 0, 95% 0%, 30% 100%, 0% 100%);
  width: 70px;
  height: 96%;
  position: relative;
  left: 0;
  top: 2.5%;
  background-color: #111;
}

/* ------------ Perfil ------------- */

.container-perfil {
  width: 75vw;
  height: 85vh;
  position: relative;
  left: 12.5vw;
  top: 10vh;
  display: flex;
  gap: 20px;
}
.box-perfil {
  font-size: 1.2em;
  gap: 35px;
  min-width: 250px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #4630ab;
}
.icone-perfil {
  position: relative;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  margin-top: 35px;
  cursor: pointer;
  width: 180px;
  height: 180px;
  background-color: #4630ab;
}
.container-resenhas-perfil {
  min-width: 60vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box-resenhas-perfil {
  width: 100%;
  height: 28%;
  display: flex;
  gap: 50px;
}
.img-resenha-perfil {
  min-width: 35%;
  height: 100%;
  background-color: #4630ab;
  border-radius: 10px;
}
.box-texto-resenha-perfil {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.titulo-perfil {
  font-size: 30px;
  color: #c9c9c9;
}
.box-estrelas-perfil {
  width: 30%;
  position: relative;
  right: 0;
  height: 20px;
  display: flex;
  justify-content: space-between;
}
.icone-estrela-perfil {
  color: #4630ab;
  scale: 1.5;
}
.text-white-perfil {
  cursor: pointer;
  text-align: center;
  color: #c9c9c9;
}
</style>