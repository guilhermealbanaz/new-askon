<template>
  <div class="tudo-nav">
    <div class="nav">
      <div class="box-conteudo">
        <div class="logo-nav"></div>
        <router-link to="/"><a class="texto-nav">resenhas</a></router-link>
        <router-link to="/perfil"><a class="texto-nav">perfil</a></router-link>
        <router-link to="/criar"><a class="texto-nav">criar</a></router-link>
      </div>
      <div class="box-lateral">
        <div class="borda-lateral"></div>
      </div>
    </div>
    <input type="text" class="busca" />
    <div @click="submitLogout" class="sair" style="cursor: pointer">
      <mdiDoorOpen :size="40" class="icone-sair" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import mdiDoorOpen from "vue-material-design-icons/DoorOpen.vue";
export default {
  components: {
    mdiDoorOpen,
  },
  methods: {
    ...mapActions("auth", ["logout"]),

    submitLogout() {
      this.logout();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.tudo-nav {
  background-color: #111;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: hidden;
  z-index: 1;
}
.nav {
  width: 600px;
  height: 120px;
  display: flex;
}
.logo-nav {
  width: 120px;
  height: 90%;
  background-image: url(../assets/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
}
.texto-nav {
  color: #c9c9c9;
  font-size: 20px;
  padding-right: 30px;
  border-right: 1px solid #4630ab !important;
  text-decoration: #111;
}
.texto-nav:last-child {
  border-right: none;
}
.busca {
  width: 250px;
  height: 30px;
  background-color: #111;
  border-radius: 10px;
  border: 1px solid #4630ab;
  position: absolute;
  right: 10%;
  top: 43px;
  color: #c9c9c9;
  padding: 10px;
  transition: 0.2s all ease-out;
}
.busca:focus {
  width: 500px;
  border: 1px solid #c9c9c9;
}
.tudo::-webkit-scrollbar {
  width: 0;
}
.box-lateral {
  -webkit-clip-path: polygon(0 0, 100% 0%, 33% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 33% 100%, 0% 100%);
  width: 70px;
  height: 100%;
  background-color: #4630ab;
  border-bottom: 1px solid #4630ab;
  box-sizing: border-box;
}
.borda-lateral {
  -webkit-clip-path: polygon(0 0, 95% 0%, 30% 100%, 0% 100%);
  clip-path: polygon(0 0, 95% 0%, 30% 100%, 0% 100%);
  width: 70px;
  height: 99%;
  position: relative;
  left: 0;
  top: 0;
  background-color: #111;
}
.box-conteudo {
  width: 600px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  border-bottom: 2px solid #4630ab;
}
.box-conteudo::after {
  -webkit-clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
  width: 70px;
  height: 100%;
  background-color: #111;
  border-bottom: 2px solid #4630ab;
}
.sair {
  width: 130px;
  height: 130px;
  background-color: #4630ab;
  clip-path: ellipse(100% 100% at 100% -10%);
  position: absolute;
  right: 0px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: right;
}
.icone-sair {
  scale: 2.5;
  margin-right: 40px;
  margin-bottom: 20px;
}
</style>
