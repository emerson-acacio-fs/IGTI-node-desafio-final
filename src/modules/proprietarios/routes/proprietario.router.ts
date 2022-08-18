import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { proprietarioController } from '../controllers/proprietarios.controller'

const proprietariosRoutes = Router()

proprietariosRoutes.get('/', proprietarioController.show)
proprietariosRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      telefone: Joi.string().required(),
    },
  }),
  proprietarioController.create,
)
proprietariosRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  proprietarioController.delete,
)
proprietariosRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  proprietarioController.getById,
)
proprietariosRoutes.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.number().required(),
      nome: Joi.string(),
      telefone: Joi.string(),
    },
  }),
  proprietarioController.update,
)

export { proprietariosRoutes }
