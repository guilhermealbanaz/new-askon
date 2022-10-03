<template>
  <div class="tudo">
    <carousel navigationPrevLabel="" navigationNextLabel="" ref="carousel" :perPage="Number(1)" :autoplayTimeout="Number(2000)" :navigationEnabled="true" :navigationClickTargetSize="Number(20)" paginationActiveColor="#fff" :paginationSize="35" paginationColor="#020013" :autoplay="true" :loop="true">
        <slide v-for="(imagem,index) in imagensTopicos" :key="index">
          <img :src="imagem" alt="" />
        </slide>
    </carousel>
    <BodyAskon></BodyAskon>
    <!-- <div class="container-resenha">
      <div >
        <div
          
          class="img-resenha"
        ></div>
        <div >
          <h1 class="">Titulo Resenha</h1>
          <p class="">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-left" class="box-resenha">
        <div
          data-aos="flip-right"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-right" class="box-resenha">
        <div
          data-aos="flip-left"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-left" class="box-resenha">
        <div
          data-aos="flip-right"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-right" class="box-resenha">
        <div
          data-aos="flip-left"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
      <div data-aos-duration="800" data-aos="fade-left" class="box-resenha">
        <div
          data-aos="flip-right"
          data-aos-duration="800"
          class="img-resenha"
        ></div>
        <div class="box-texto-resenha">
          <h1 class="titulo">Titulo Resenha</h1>
          <p class="text-white">
            Descrição da Resenha Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium veritatis doloremque cupiditate iusto
            autem dignissimos voluptatem quasi voluptate, vel assumenda soluta
            itaque, eaque rem ipsum eligendi aperiam dolores enim et.
          </p>
          <div class="box-estrelas">
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
            <mdiStar class="icone-estrela" />
          </div>
        </div>
      </div>
    </div>   -->
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
// import mdiStar from "vue-material-design-icons/Star.vue";
// import mdiGithub  from "vue-material-design-icons/Github.vue";
import BodyAskon from '@/components/BodyAskon.vue'
export default {
  components: {
    BodyAskon,
    Carousel,
    Slide
  
    // mdiStar,
    // mdiGithub, 
    // mdiLinkedin,
  },
  data(){
    return {
      imagensTopicos: [require('@/assets/akali.jpg'), require('@/assets/akali2.jpg'), require('@/assets/akali3.jpg')] 
    }
  }
};
</script>
<style>
.carrossel{
  position: relative;
  height: 700px;
}
.VueCarousel{
  height: 700px;
}
.VueCarousel img {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 10px
}


</style>