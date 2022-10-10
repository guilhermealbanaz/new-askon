<template>
    <section>
        <ResenhasAskon
        v-for="resenha in resenhas"
        :key="resenha.id"
        :ImgName="resenha.img"
        :ResenhaTitles="resenha.title"
        :ResenhaDate="resenha.date"
      >
        <template v-slot:default>
          <p @click="irParaResenha(resenha)">{{ resenha.content | truncate(200) }}</p>
        </template>
        <template v-slot:criador>
            <p>{{ resenha.creator }}</p>
        </template>
        <template v-slot:generos>
            <p>{{ resenha.generos }}</p>
        </template>
      </ResenhasAskon>
    </section>
</template>

<script>
import ResenhasAskon from '@/components/ResenhasAskon'
export default {
    components: {ResenhasAskon},
    data(){
        return {
            resenhas: []
    }
},
    methods:{
      irParaResenha(resenha){
      this.$router.push({name:"Template", params: {resenha, id:resenha.id}})
    },
    },
created(){
        this.resenhas = [{
          id:1,
          title:'League of Legends Resenha',
          content: 'GUILHERME ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-01-01',
          img: 'akali.jpg',
          creator: 'Guilherme',
          generos: 'Ação, ação, ação, ação, ação',
        },{
          id:2,
          title:'Elden Ring Resenha',
          content: 'SODRE ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-02-03',
          img: 'akali2.jpg',
          creator: 'Rodrigo',
          generos: 'Ação, ação, ação, ação, ação',
        },{
          id:3,
          title:'Fortnite resenha',
          content: 'RODRIGO ipsum dolor sit amet consectetur adipisicing elit. Hic, eum sint reprehenderit, cumque, corporis autem dignissimos consequuntur repellendus sapiente iste officiis porro obcaecati doloremque numquam dolore iusto sed accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum nobis praesentium maxime magni officiis facilis quibusdam libero suscipit dolorum nisi, quam molestias, reprehenderit expedita in! Ad voluptates quisquam laudantium.',
          date:'2020-06-04',
          img: 'akali3.jpg',
          creator: 'Guilherme',
          generos: 'Ação, ação, ação, ação, ação',
        }]
      },
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
  background-color: #111;
  overflow-y: scroll;
  overflow-x: hidden;
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
  border-radius: 10px;
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