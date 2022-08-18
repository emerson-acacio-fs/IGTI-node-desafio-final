import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { animalController } from '../controllers/animais.controller'

const animalRoutes = Router()

animalRoutes.get('/', animalController.show)
animalRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      tipo: Joi.string().required(),
      proprietarioId: Joi.number().required(),
    },
  }),
  animalController.create,
)
animalRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  animalController.delete,
)
animalRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  animalController.getById,
)
animalRoutes.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.number().required(),
      nome: Joi.string(),
      tipo: Joi.string(),
      proprietarioId: Joi.number(),
    },
  }),
  animalController.update,
)

export { animalRoutes }
