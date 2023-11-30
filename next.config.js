const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,

      env: {
        mongodb_username: 'letanlocjp1001',
        mongodb_password: 'UJmTZeHkdMe1PjqR',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    }
  }

  return {
    reactStrictMode: true,

    env: {
      mongodb_username: 'letanlocjp1001',
      mongodb_password: 'UJmTZeHkdMe1PjqR',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  }
}
