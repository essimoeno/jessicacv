/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
    firstName: 'Jessica',
    lastName: 'Moreno',
    jobTitle: 'Software Developer',
    city: 'Madrid',
    postalCode: '',
    country: 'España',
    phone: '+34 603842567',
    email: 'jessicamorenomar@gmail.com',
    education: [
      {
        school: 'IES La arboleda',
        degree: 'CFGS Desarrollo de Aplicaciones Web',
        graduationDate: 'SEP 2021 - JUN 2023 | IES La Arboleda',
        description: 'Como estudiante de este grado superior poseo conocimientos de programación en Java, diseño e implantación de bases de datos (SQL) y diseño e implantación de páginas web (HTML, CSS, XML, JSON y JavaScript.'
      },
      {
        school: 'IES La arboleda',
        degree: 'CFGM Imagen y Sonido',
        graduationDate: 'SEP 2018 - JUN 2020 | IES La Arboleda',
        description: 'Realización de proyectos con Adobe Premiere Pro, Adobe Photoshop , ProTools'
      }
    ],
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/jdnichollsc'
      },
      {
        label: 'LinkedIn',
        link: 'https://linkedin.com/in/jdnichollsc'
      }
    ],
    skills: [
      'Java',
      'SQL',
      'JavaScript',
      'HTML',
      'CSS',
      'MVC',
      'PHP',
      'jQuery',
      'Bootstrap',
      'Hibernate',
      'SQL Server',
      'SOAP',
      'REST',
      'Web Service',
      'Subversion',
      'Desarrollo CRM Salesforce',
      'MariaDB',
      'Oracle SQL',
      'Ajax',
      'IBM Maximo for Aviation',
    ],
    languages: ['Español - Nativo', 'Inglés - Nivel Medio'],
    professionalSummary: `Soy una desarrolladora de software recién graduada con muchas ganas de aprender y mejorar mis habilidades , a demás de explorar nuevos métodos de trabajo y tecnologías. Estoy emocionada de embarcarme en este gratificante viaje de crecimiento profesional y descubrir las infinitas posibilidades que este sector tiene para ofrecerme.`,
    employmentHistory: [
      {
        jobTitle: 'Full-stack Developer',
        startDate: 'Mar 2024',
        endDate: 'Trabajando actualmente',
        employer: 'Monty Global Payments S.A.',
        city: 'Madrid',
        achievements: [
          'Java, SQL Server, SOAP, REST, Web Service, APIs, SVN, Spring, JSP, JavaScript, JQuery, Hibernate, Jenkins, HTML, CSS',
          'Trabajo en equipo, Desarrollo de aplicaciones.'
        ]
      },
      {
        jobTitle: 'Asset Management Performance',
        startDate: 'Oct 2023',
        endDate: 'Mar 2024',
        employer: 'Accenture',
        city: 'Madrid',
        achievements: [
          'Gestión de activos, trabajando mediante IBM MAXIMO, consulta, actualización y eliminado mediante Oracle SQL. Realización de scripts con Python y JavaScript',
          'Trabajo en equipo, soporte a cliente internacional.'
        ]
      }, 
      {
        jobTitle: 'Desarrolladora de software',
        startDate: 'Mar 2023',
        endDate: 'Jun 2023',
        employer: 'Accenture',
        city: 'Remote',
        achievements: [
          'Desarrollo con Apex de Salesforce, Test de código, debug y resolución de problemas.',
          'Trabajo en proyecto real realizando diferentes funciones de administración y desarrollo en la plataforma, utilizando la Developer Console del CRM y Visual Studio Code.'
        ]
      }
    ],
    photo: 'https://s3.eu-west-1.amazonaws.com/resumedone-eu-west-1/AxajI58Ph-photo.png',
  }
  
  const formatResume = (r) => ({
    ...r,
    address: [
      r.country,
      r.city,
      r.postalCode
    ].filter(Boolean).join(', ')
  })
  
  new Vue({
    el: "#app",
    data: formatResume(resume)
  });
  
  /**
   * Wait for animatable-component to be loaded (Only for VanillaJS)
   **/
  function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
  }
  if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
  } else animatableLoaded()
