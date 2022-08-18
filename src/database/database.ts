import { Sequelize } from 'sequelize'

export const connection = new Sequelize('livraria', 'docker', 'docker', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: false,
  // timezone: '-03:00',
  define: {
    timestamps: false,
  },
})
