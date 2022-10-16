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
      imagensTopicos: [require('@/assets/fundo1(slide).jpg'), require('@/assets/fundo2(slide).jpg'), require('@/assets/fundo3(slide).jpg'), require('@/assets/fundo4(slide).jpg')] 
    }
  }
};
</script>
<style>
.VueCarousel{
  height: 800px;
}
.VueCarousel img {
  width: 100%;
  max-height: 800px;
}
.VueCarousel-dot {
  clip-path: polygon(50% 15%, 58% 38%, 84% 38%, 63% 56%, 71% 80%, 50% 66%, 30% 80%, 38% 55%, 18% 38%, 42% 39%);
  border-radius: 0px !important;
  background-color: aqua;
}
.VueCarousel-navigation-button {
  display: none;
}
</style>