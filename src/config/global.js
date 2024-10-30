export default {
  global: {
    componenteFormativo:
      'Evaluación del proceso formativo en el LMS, según orientaciones institucionales',
    descripcionCurso:
      'La evaluación del rendimiento de un instructor virtual es clave para garantizar una educación de calidad, mejorar la experiencia de los aprendices y fomentar el crecimiento profesional del tutor. Hay que tener en cuenta, que dicha evaluación, no es solo del instructor con los aprendices, sino la manera como utiliza las diferentes herramientas que dispone en el LMS.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación en formación virtual',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Momento de cierre de la formación virtual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Juicios evaluativos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Acciones al finalizar el curso',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Seguimiento y reportes',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_04_41311588_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Evaluación en formación virtual',
      referencia:
        'Ángel, W. I. (2020). Guía de orientaciones para la formación en ambientes virtuales de aprendizaje -AVA-. Servicio Nacional de Aprendizaje SENA.',
      tipo:
        'Documento.<br>(Para acceder a este documento desde CompromISO, debe iniciar sesión con su usuario y contraseña. Si no tiene activado el acceso, solicítelo a través de su Centro de Formación.)',
      link: 'http://www.compromiso.sena.edu.co/',
    },
  ],
  glosario: [
    {
      termino: 'Evaluación formativa',
      significado:
        'se aplica durante todo el proceso formativo evaluando los avances del aprendiz, permitiendo guiarlo en su aprendizaje hasta cumplir con los resultados de aprendizaje (es la que se realiza en cada resultado de aprendizaje del proceso formativo).',
    },
    {
      termino: 'Evidencia',
      significado:
        'manifestación del aprendizaje, que refiere a la comprobación de lo que “sabe”, “sabe hacer” y “es” el aprendiz. Pueden ser de conocimiento y de desempeño, de las cuales se pueden inferir los logros de aprendizaje y establecer el desarrollo o no de las competencias (SENA, 2020).',
    },
    {
      termino: 'Instrumento de evaluación',
      significado:
        'conjunto de herramientas utilizadas por el Instructor - tutor para recoger datos relacionados con los resultados de aprendizaje, los criterios de evaluación y las evidencias definidas en el diseño curricular (SENA, 2020).',
    },
    {
      termino: 'Novedad',
      significado:
        'hace referencia a los diferentes casos que se presentan con algunos aprendices durante el proceso formativo, y no le permitieron cumplir con el objetivo de la aprobación de la formación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ángel, W. I. (2019). Guía de orientaciones para la formación en ambientes virtuales de aprendizaje –AVA-. Servicio Nacional de Aprendizaje SENA. (2020).',
      link: '',
    },
    {
      referencia: 'Glosario SENA',
      link: 'https://www.sena.edu.co/es-co/ciudadano/Paginas/glosario.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilmer Ismael Ángel Benavides',
          cargo: 'Líder equipo / Asesor formación virtual',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Aura Andrea Sánchez Suárez',
          cargo: 'E-Pedagoga',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Bibiana Lucía Camargo Romero',
          cargo: 'E-Pedagoga',
          centro: 'Centro de Comercio y Servicios - Regional Tolima ',
        },
        {
          nombre: 'Diana Patricia Carmona Milian',
          cargo: 'E-Pedagoga',
          centro:
            'Centro de Gestión y Desarrollo Sostenible Surcolombiano - Regional Huila',
        },
        {
          nombre: 'Humberto Amaya Alvear',
          cargo: 'E-Pedagogo',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar ',
        },
        {
          nombre: 'Laura Ivonne Rusinque Gamboa',
          cargo: 'E-Pedagoga',
          centro: 'Centro Agropecuario la Granja-Regional Tolima',
        },
        {
          nombre: 'Marisol Báez Solano',
          cargo: 'E-Pedagoga',
          centro: 'Centro de Industria y la Construcción - Regional Tolima',
        },
        {
          nombre: 'María Cecilia Aroca Díaz',
          cargo: 'Soporte de seguimiento académico',
          centro: 'Centro Agroempresarial y Minero - Regional Bolívar',
        },
        {
          nombre: 'Diego Alejandro Córdoba Mavesoy',
          cargo: 'Soporte de diseño y multimedia',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz ',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón ',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador F <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
