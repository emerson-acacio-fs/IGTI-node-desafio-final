import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { livroController } from '../controllers/livros.controller'

const livroRoutes = Router()

livroRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      valor: Joi.number().required(),
      estoque: Joi.number().integer().required(),
      autor_id: Joi.number().integer().required(),
    },
  }),
  livroController.create,
)
livroRoutes.get('/', livroController.list)
livroRoutes.get('/:id', livroController.findById)
livroRoutes.delete('/:id', livroController.delete)

livroRoutes.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.number().integer(),
      valor: Joi.number(),
      estoque: Joi.number().integer(),
      nome: Joi.forbidden(),
      autor_id: Joi.forbidden(),
    },
  }),
  livroController.update,
)

export { livroRoutes }
