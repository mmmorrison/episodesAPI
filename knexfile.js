module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/episodesAPI'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
