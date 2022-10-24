<template>
  <section>
    <div class="fade"></div>
    <div class="loggedin" style="color: white">logado: {{ loggedIn }}</div>
    <ResenhasAskon
      v-for="resenha in resenhas"
      :key="resenha.id"
      :ImgName="'akali2.jpg'"
      :ResenhaTitles="resenha.titulo"
      :ResenhaDate="resenha.data"
    >
      <template v-slot:default>
        <p @click="irParaResenha(resenha)">
          {{ resenha.descricao | truncate(200) }}
        </p>
      </template>
      <template v-slot:criador>
        <p>{{ resenha.usuario }}</p>
      </template>
      <template v-slot:generos>
        <p>{{ resenha.jogo }}</p>
      </template>
    </ResenhasAskon>
    <FooterAskon />
  </section>
</template>

<script>
import axios from 'axios'
import FooterAskon from "@/components/FooterAskon";
import ResenhasAskon from "@/components/ResenhasAskon";
import { mapState } from "vuex";
export default {
  components: { ResenhasAskon, FooterAskon },
  computed: {
    ...mapState("auth", ["loggedIn"]),
  },
  data() {
    return {
      resenhas: [],
    };
  },
  methods: {
    irParaResenha(resenha) {
      this.$router.push({
        name: "Template",
        params: { resenha, id: resenha.id },
      });
    },
    async getresenhas(){
      const {data} = await axios.get("/Resenhas/")
      this.resenhas = data
    }
  },
  created() {
    this.getresenhas()
    // this.get = [
    //   {
    //     id: 1,
    //     title: "LEAGUE OF LEGENDS RESENHA",
    //     content:
    //       "GUILHERME ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.",
    //     date: "2020-01-01",
    //     img: "akali.jpg",
    //     creator: "Guilherme",
    //     generos: "Ação, ação, ação, ação, ação",
    //   },
    //   {
    //     id: 2,
    //     title: "ELDEN RING RESENHA",
    //     content:
    //       "SODRE ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.",
    //     date: "2020-02-03",
    //     img: "akali2.jpg",
    //     creator: "Rodrigo",
    //     generos: "Ação, ação, ação, ação, ação",
    //   },
    //   {
    //     id: 3,
    //     title: "FORTNITE RESENHA",
    //     content:
    //       "RODRIGO ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.",
    //     date: "2020-06-04",
    //     img: "akali3.jpg",
    //     creator: "Guilherme",
    //     generos: "Ação, ação, ação, ação, ação",
    //   },
    // ];
  },
};
</script>

<style >
.fade {
  height: 100px;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #111);
  top: 600px;
  position: absolute;
}

* {
  margin: 0;
  padding: 0;
}
.tudo {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #111;
}
.container-resenha {
  width: 80%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 100px;
  left: 10%;
  right: 10%;
  margin-top: 120px;
}
.box-resenha {
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 80px;
}
.box-resenha:nth-child(even) {
  flex-direction: row-reverse;
  text-align: left;
}
.box-resenha:nth-child(even) .box-estrelas {
  right: 31%;
}

.img-resenha {
  width: 400px;
  height: 220px;
  background-color: #4630ab;
  border-radius: 31px;
  border: 1px solid #c9c9c9;
}
.box-texto-resenha {
  width: 80%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.titulo {
  width: 100%;
  color: #c9c9c9;
  font-style: italic;
}
.text-white {
  color: rgb(201, 201, 201);
  text-align: justify;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;
}
.box-estrelas {
  width: 200px;
  position: absolute;
  right: 0;
  height: 20px;
  display: flex;
  justify-content: space-between;
}
.icone-estrela {
  color: #4630ab;
  scale: 1.7;
}
</style>