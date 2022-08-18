import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { servicoController } from '../controllers/animais.controller'

const servicoRoutes = Router()

servicoRoutes.get('/', servicoController.show)
servicoRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      descricao: Joi.string().required(),
      valor: Joi.number().required(),
      animalId: Joi.number().required(),
    },
  }),
  servicoController.create,
)

export { servicoRoutes }
