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
          title: 'Sprint-1',
          children: [ 
            ['/docs/sprints/s001.md', 'Sprint 1']
           ]
        },{
          title: 'Sprint-2',
          children: [ 
            ['/docs/sprints/s002.md', 'Sprint 2']
           ]
        },
        {
          title: 'Sprint-3',
          children: [ 
            ['/docs/sprints/s003.md', 'Sprint 3']
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
        },
        {
          title: 'Reglas de Negocio',
          children: [ 
            ['/docs/reglas/r001.md', 'Reglas de Negocio']
           ]
        }
      ],
    },
    plugins: [
      [
        'vuepress-plugin-medium-zoom',
        {
          selector: '.theme-default-content img',
          delay: 1000,
          options: {
            margin: 24,
            background: '##333333',
            scrollOffset: 0,
          },
        },
      ],
    ]
}

  