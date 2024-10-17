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
      .col-lg-12(data-aos="Fade-left")
        p En el cierre del proceso formativo es donde se emiten los juicios evaluativos, esto permite la certificación de las competencias adquiridas durante la formación. El instructor debe conocer y manejar muy bien cada una de las acciones a realizar durante este momento del proceso, en el cual es necesario que identifique y reconozca la efectividad de su quehacer, evidenciando en sus acciones formativas la apropiación de herramientas y lineamientos SENA. Además, debe establecer los resultados de aprendizaje alcanzados por sus aprendices, verificando la participación y apropiación de las competencias durante todo el proceso de enseñanza-aprendizaje virtual.
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
