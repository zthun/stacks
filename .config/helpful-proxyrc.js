module.exports = {
  domains: [
    {
      name: 'local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-works-web:80',
        '/api': 'zthunworks-application-works-api:3000/api'
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
      name: 'fashion.local.zthunworks.com',
      paths: {
        '/': 'zthunworks-application-fashion-web:80'
      }
    }
  ]
};
