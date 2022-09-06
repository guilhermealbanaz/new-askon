<!-- <template>
  <section>
        <div>
            <ResenhasAskon
                id="individual"
                :key="resenha.id"
                :ImgName="resenha.img"
                :ResenhaTitles="resenha.title"
                :ResenhaDate="resenha.date"
            >
                <div class="content">{{ resenha.content }}</div>
                <template v-slot:criador>
                    <p class="criador">{{ resenha.creator }}</p>
                </template>
                <template v-slot:generos>
                    <p class="generos">{{ resenha.gen }}</p>
                </template>
            </ResenhasAskon>
        </div>
  </section>
</template>

<script>
import ResenhasAskon from "@/components/ResenhasAskon.vue";
export default {
  components: { ResenhasAskon },
  
};
</script>

<style></style> -->

<template>
  <div class="tudo">
    <div class="container-resenha-individual">
      <div class="titulo-resenha">Titulo da Resenha :)
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.tudo {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: red;
}
.container-resenha-individual {
    width: 50%;
    height: 1500px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 250px auto;
    background-color: #111;
}
</style>