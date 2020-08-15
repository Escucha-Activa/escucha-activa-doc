module.exports = {
    title: 'ESCUCHA ACTIVA!',
    description: 'Escucha Activa',
    themeConfig: {
      nav: [
        { text: 'Inicio', link: '/docs/inicio/ini001.md' },
        { text: 'Trello', link: 'https://trello.com/b/nJUSWPFN/escucha-activa-develop' },
        { text: 'GitHub', link: 'https://github.com/Escucha-Activa' },
        { text: 'Plataforma', link: 'https://google.com.ar' },
        { text: 'Landing Page', link: 'https://google.com.ar' }
      ],
      sidebar:[
        {
          title: 'Inicio',
          children: [ 
            ['/docs/inicio/ini001.md', 'Inicio']
           ]
        },
        {
          title: 'Arquitectura',
          children: [ 
            ['/docs/arquitectura/arq001.md', 'Diagrama']
           ]
        },
        {
          title: 'Flujos',
          children: [ 
            ['/docs/flujos/f001.md', 'Diagrama']
           ]
        },
        {
          title: 'Pre-plataforma',
          children: [ 
            ['/docs/pre-plataforma/pp001.md', 'Funcionalidades']
           ]
        },
        {
          title: 'Plataforma-cliente',
          children: [ 
            ['/docs/plataforma-cliente/pc001.md', 'Funcionalidades']
           ]
        },
        {
          title: 'Plataforma-docente',
          children: [ 
            ['/docs/plataforma-docente/pd001.md', 'Funcionalidades']
           ]
        }
      ]
    }
}

  