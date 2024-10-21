<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-4
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Evaluación en formación virtual
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p La evaluación en la formación virtual se realiza durante todo el proceso formativo, ya que se evalúa de manera procesual el alcance de los conocimientos y habilidades en cada resultado de aprendizaje, a medida que se avanza en el desarrollo de la formación.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La evaluación es el fundamento para determinar el nivel de competencia alcanzado y permite la toma de decisiones con base en la información recolectada, a través de los instrumentos de evaluación.
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i  Evaluación en la formación ]

    .row.justify-content-center.mb-4
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img2_1.svg', alt='')
    
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Evaluación SENA
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p Los tipos de evaluación en la formación virtual SENA, se aplican en concordancia con el momento de formación. Al inicio, durante el desarrollo o el cierre del programa de formación. A continuación, la explicación al respecto: 
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Inicio")
            .col-lg-12.mb-4.mb-md-0
              p #[b La evaluación diagnostica:] se orienta a conocer los saberes previos desde el punto de vista tecnológico y conceptual; es decir, a nivel del manejo de herramientas tecnológicas y el LMS, como también algunos conceptos de la temática del curso.
              p Se aplica antes de dar inicio a las temáticas de la formación y su objetivo es reconocer los aprendizajes con los que el aprendiz llega al proceso formativo.
              p #[b Evaluación formativa:] se aplica durante todo el proceso educativo, evaluando los avances del aprendiz, permitiendo guiarlo en su formación, hasta alcanzar el o los resultados de aprendizaje definidos para cada programa.

          .row(titulo="Desarrollo del programa")
            .col-lg-12.mb-4.mb-md-0
              p Durante el desarrollo del curso la evaluación formativa recolecta evidencias de aprendizaje entregadas por el aprendiz y como su nombre indica, deben demostrar la apropiación de los contenidos o aprendizajes. Hay tres tipos de evidencia: de conocimiento, de desempeño y de producto.
              p #[b Evidencias de conocimiento:] permiten medir el saber que ha alcanzado el aprendiz sobre la temática. Están relacionadas con el saber, teorías, principios y conceptos que le permiten el buen desempeño.
              p #[b Evidencias de desempeño:] pruebas del saber hacer, relativas al cómo el aprendiz ejecuta una actividad (procesos) y al resultado obtenido (producto), en donde pone en juego sus conocimientos y habilidades.

          .row(titulo="Cierre")
            .col-lg-12.mb-4.mb-md-0
              p #[b Evidencias de producto:] relacionadas con el hacer o aplicaciones del saber, esto es habilidades y destrozas.
              p #[b Evaluación sumativa:] se aplica al cierre del proceso formativo, es aquella que reúne los resultados obtenidos de todas las evidencias. La valoración de cada uno de los resultados de aprendizaje a lo largo del proceso formativo, son los que al final determinan el certificado del aprendiz.
          
      .col-lg-4.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')

    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Instrumentos de evaluación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p Los instrumentos de evaluación son las diferentes herramientas utilizadas por el instructor - tutor para recoger información clara, concreta y eficaz de cada una de las evidencias de aprendizaje, definidas en la guía de aprendizaje del proceso formativo.
        P Permite medir el nivel de apropiación de los conocimientos que los aprendices adquieren durante el proceso de aprendizaje y el desarrollo de las diferentes competencias.
        P Los instrumentos de evaluación utilizados en el proceso formativo dependen del tipo de evidencia que se esté trabajando. Algunos ejemplos se relacionan a continuación:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
          .tarjeta.color-secundario.bg1-1.w-100
            .text-black.p-4
              h4.text-center(style="color:#000000") Evidencia Conocimiento.
              p.text-center(style="color:#000000") Instrumento: cuestionario.
              p.text-center(style="color:#000000") Instrumento: rúbrica de evaluación. 

              
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
          .tarjeta.color-secundario.bg1-1.w-100
            .text-black.p-4
              h4.text-center(style="color:#000000") Evidencia Desempeño
              p.text-center(style="color:#000000") Instrumento: lista de chequeo.
              p.text-center(style="color:#000000") Instrumento: rúbrica de evaluación (Ejemplo rúbrica TIGRE).
              
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
          .tarjeta.color-secundario.bg1-1.w-100
            .text-black.p-4
              h4.text-center(style="color:#000000") Evidencia Producto
              p.text-center(style="color:#000000") Instrumento: lista de verificación.
              p.text-center(style="color:#000000") Instrumento: rúbrica de evaluación.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p Los instrumentos de evaluación deben brindar al aprendiz seguridad y confianza en la valoración de las evidencias presentadas.
        p A continuación, se podrá conocer el procedimiento para la creación de algunos instrumentos de evaluación en la plataforma LMS SENA, por medio del siguiente video:

    
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/temas/ico.svg', alt='Imagen decorativa')
      h5.mb-0 Crear una evaluación

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kjAVQM-fwp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
