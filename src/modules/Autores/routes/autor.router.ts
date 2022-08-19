import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { autorController } from '../controllers/autores.controller'

const autorRoutes = Router()

autorRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      telefone: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  autorController.create,
)
autorRoutes.get('/', autorController.list)
autorRoutes.get('/:id', autorController.findById)
autorRoutes.delete('/:id', autorController.delete)

autorRoutes.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.number().integer(),
      nome: Joi.string(),
      telefone: Joi.string(),
      email: Joi.string().email(),
    },
  }),
  autorController.update,
)

export { autorRoutes }
