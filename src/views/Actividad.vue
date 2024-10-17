<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Evaluación del proceso formativo en el LMS, según orientaciones institucionales',
      titulo: 'Cierre de cursos SENA',
      introduccion:
        '<b> Objetivo:</b> evidenciar el accionar formativo del instructor en el cierre del curso, basado en los procesos realizados por medio del LMS SENA.',
      info:
        'Preguntas de opción múltiple: lea los siguientes enunciados y seleccione la respuesta que considere correcta.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: 'No hace parte de uno de los momentos de la evaluación SENA:',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inicio.', esCorrecta: false },
            { id: 'b', texto: 'Retroalimentación.', esCorrecta: true },
            { id: 'c', texto: 'Desarrollo.', esCorrecta: false },
            { id: 'd', texto: 'Cierre.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Aunque la retroalimentación se le realiza al aprendiz constantemente, no es un momento de la evaluación SENA.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Los cuestionarios son instrumentos que se utilizan en evidencias de conocimiento.',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien! Este tipo de instrumentos son utilizados por lo general en evidencias de conocimiento.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Los juicios evaluativos que se manejan en el SENA cuando el aprendiz aprueba o no aprueba un curso, se representan por:',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '0 y 5.', esCorrecta: false },
            { id: 'b', texto: 'A y D.', esCorrecta: true },
            { id: 'c', texto: 'Bien y Mal.', esCorrecta: false },
            { id: 'd', texto: ' D y E.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Al realizar los juicios evaluativos SOFIA Plus cambia el estado del aprendiz de “por certificar” a “en formación".',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! SOFIA Plus realiza este proceso, pero, al contrario, ya que primero está “en formación” y luego lo pasa a “por certificar”.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Los resultados de la efectividad del rol del instructor se dan al finalizar el curso por medio de:',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un correo electrónico.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Una carta enviada al domicilio.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Una lista de chequeo.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Una notificación en SOFIA Plus.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! A través de una lista de chequeo es que se da la evaluación al instructor sobre su desempeño en el curso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Los reportes en el cierre de la formación, se realizan a través del LMS.',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Ya que los reportes se generan, pero a través de SOFIA Plus.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'En el cierre de un curso se da principalmente:',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Las despedidas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Las calificaciones.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Los juicios evaluativos.', esCorrecta: true },
            {
              id: 'd',
              texto: 'El descargue de certificaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Los juicios evaluativos son los que engloban todo el proceso de cierre de un curso.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'En la evolución formativa es dónde se conocen los saberes previos, indicando sobre aspectos tecnológicos y conceptuales.',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Este proceso se da, pero durante la evaluación diagnóstica.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Durante este tipo de evidencias se dan las pruebas del saber hacer:',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'De reflexión.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Producto.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Conocimiento.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Desempeño.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Este tipo de evidencias apunta al saber hacer.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Los instrumentos de evaluación son utilizados para evaluar el resultado del aprendiz en las evidencias que de describen en las guías de aprendizaje.',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien! Esta es la función de los instrumentos de evaluación en el proceso formativo.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha superado la actividad, demostrando que posee conocimientos sólidos sobre la temática tratada en el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar el componente formativo e intentarlo nuevamente.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
