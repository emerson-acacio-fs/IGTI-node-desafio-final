import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { clienteController } from '../controllers/clientes.controller'

const clienteRoutes = Router()

clienteRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      tipo: Joi.string().required(),
      proprietarioId: Joi.number().required(),
    },
  }),
  clienteController.create,
)

export { clienteRoutes }
