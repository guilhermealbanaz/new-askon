<template>
        <div class="footer">
        <div class="footer-esquerda">
        <ul>
          <li class="nomes-footer">Rodrigo Bonifácio Conceição</li>
          <li class="nomes-footer">Guilherme Bragato Albanaz</li>
          <li class="nomes-footer">Maria Laura Viana</li>
        </ul>
        </div>
        <div class="img-footer"></div>
            <div class="footer-direita">
                <ul class="lista-direita">
                <li class="links-footer">GitHub do Rodrigo <mdiGithub  class="icone-link" /></li>
                <li class="links-footer">Linkedin do Rodrigo <mdiLinkedin class="icone-link" /> </li>
                <li class="links-footer">GitHub do Guilherme <mdiGithub  class="icone-link" /></li>
                <li class="links-footer">Linkedin do Guilherme <mdiLinkedin class="icone-link" /> </li>
                <li class="links-footer"> GitHub da Maria <mdiGithub  class="icone-link" /></li>
                <li class="links-footer">Linkedin da Maria <mdiLinkedin class="icone-link" /> </li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
  components:{
    
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 300px;
  background-color: #4630ab;
  display: flex;
}
.img-footer {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: #111;
  background-image: url(../assets/logo.png);
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
  margin: 70px auto;
}
.footer-esquerda {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.footer-direita {
  width: 50%;
  height: 100%;
}
.nomes-footer {
  font-size: 20px;
  margin: 50px;
  color: #c9c9c9;
}
.links-footer {
  margin-right: 50px;
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.links-footer:nth-child(even){
  margin-bottom: 35px;
}
.links-footer:last-child {
  margin-bottom: 0;
}
ul {
  color: #c9c9c9;
}
.lista-direita {
  margin-top: 35px;
  text-align: right;
  list-style: none;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
</style>