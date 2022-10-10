<template>
    <div class="footer">
      <div class="linha-footer">
        <div class="img-git"></div>
        <mdiGithub :size="30"/>
        <div class="texto-footer">guilhermealbanaz</div>
      </div>
      <div class="linha-footer">
        <div class="img-git"></div>
        <mdiGithub :size="30"/>
        <div class="texto-footer">RodrigoBonif</div>
      </div>
      <div class="linha-footer">
        <div class="img-git"></div>
        <mdiGithub :size="30"/>
        <div class="texto-footer">marialauraviana</div>
      </div>
      <div class="linha-footer">
        <div class="box-footer"></div>
        <div class="img-footer"></div>
      </div>
    </div>
</template>

<script>
import mdiGithub from "vue-material-design-icons/Github.vue";
export default {
  components:{
    mdiGithub,
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 19.5%;
  position: absolute;
  background-color: #4630ab;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.linha-footer {
  width: 100%;
  height: 40px;
  color: #c9c9c9;
  font-size: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;
}
.linha-footer:nth-child(1) {
  margin-top: 20px;
}
.linha-footer:last-child {
  margin-bottom: 50px;
}
.box-footer{
  height: 10px;
  width: 90%;
  background-image: linear-gradient(to left,#c9c9c9 -40%, #111);
  border-radius: 0 50px 50px 0;
}
.img-footer {
  width: 100px;
  height: 100px;
  background-image: url(../assets/Logo2.png);
  background-size: contain;
  background-position: center;
  margin: 10px;
  border-radius: 10px;
}
</style>