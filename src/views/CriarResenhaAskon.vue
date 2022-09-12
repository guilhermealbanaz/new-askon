<template>
  <div class="tudo-criar">
    <div class="container-criar">
      <div class="box-criar-resenha">
        <div class="box-img-resenha-criar">
        <input type="file" name="image" id="image" class="box-img-criar">
        <label for="image" class="box-img-criar"><mdiFileImagePlus size="50"/></label>
        </div>
        <div class="box-texto-criar">
          <input type="text" class="input-criar" placeholder="Título">
          <label class="text-white" for="jogos">Escolha o jogo:</label>
          <select class="input-jogos-resenha" name="jogos" id="jogo">
            <option value="darksouls">Dark Souls</option>
            <option value="fortnite">Fortnite</option>
            <option value="valorant">Valorant</option>
            <option value="leagueoflegends">League Of Legends</option>
          </select>
          <div class="box-estrelas-criar">
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
            <mdiStar class="icone-estrela-perfil" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mdiStar from "vue-material-design-icons/Star.vue";
import mdiFileImagePlus  from "vue-material-design-icons/FileImagePlus.vue";
export default {
  components: {
    mdiStar,
    mdiFileImagePlus,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.tudo-criar {
  width: 100vw;
  height: 1500px;
  position: relative;
  background-image: url(../assets/Fundo-gen.png);
  background-position: center;
  background-size: cover;
  background-color: #111;
  display: flex;
  justify-content: center;
}
.container-criar {
  padding-top: 10px;
  margin-top: 40px;
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: #111;
  border: 2px solid #4630AB;
}
.box-criar-resenha {
  width: 100%;
  height: 250px;
  display: flex;
  gap: 10%;
}
.box-img-resenha-criar {
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-img-criar {
  width: 15%;
  height: 200px;
  background-color: #4630AB;
  border: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.box-texto-criar {
  width: 60%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
}
.input-criar {
  width: 70%;
  height: 35px;
  background-color: #111;
  border: none;
  border-bottom: 1px solid #4630AB;
  color: #c9c9c9;
  padding-left: 10px;
  font-size: 18px;
}
.input-jogos-resenha {
  width: 50%;
  height: 40px;
  background-color: #111;
  border: 1px solid #4630AB;
  color: #c9c9c9;
}
.input-jogos-resenha option {
  font-size: 13px;
}
.box-estrelas-criar {
  width: 60px;
  height: 10px;
  display: flex;
  gap: 20px;
}
</style>
