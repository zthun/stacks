module.exports = {
  domains: [
    {
      name: 'circus.local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-cirque-web:80'
      }
    },
    {
      name: 'fashion.local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-fashion-web:80'
      }
    },
    {
      name: 'helpful.local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-helpful-web:80'
      }
    },
    {
      name: 'janitor.local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-janitor-web:80'
      }
    },
    {
      name: 'lumberjacky.local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-lumberjacky-web:80'
      }
    },
    {
      name: 'pokedexii.local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-pokedexii-web:80',
        '/api': 'zthunworks-application-pokedexii-api:3000/api'
      }
    },
    {
      name: 'webigail.local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-webigail-web:80'
      }
    },
    {
      name: 'local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-works-web:80',
        '/api': 'zthunworks-application-works-api:3000/api'
      }
    }
  ]
};
