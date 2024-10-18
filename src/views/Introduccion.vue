<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/imgintro.png', alt='Imagen decorativa')
        
      .col-lg-5(data-aos="Fade-left")
        p En el cierre del proceso formativo es donde se emiten los juicios evaluativos, esto permite la certificación de las competencias adquiridas durante la formación. 
        p El instructor debe conocer y manejar muy bien cada una de las acciones a realizar durante este momento del proceso, en el cual es necesario que identifique y reconozca la efectividad de su quehacer, evidenciando en sus acciones formativas la apropiación de herramientas y lineamientos SENA. 
        p Además, debe establecer los resultados de aprendizaje alcanzados por sus aprendices, verificando la participación y apropiación de las competencias durante todo el proceso de enseñanza-aprendizaje virtual.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
