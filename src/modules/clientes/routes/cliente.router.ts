import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { clienteController } from '../controllers/clientes.controller'

const clienteRoutes = Router()

clienteRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      telefone: Joi.string().required(),
      endereco: Joi.string().required(),
      senha: Joi.string().required(),
      email: Joi.string().email().required(),
      comfirmacao_senha: Joi.string().required().valid(Joi.ref('senha')),
    },
  }),
  clienteController.create,
)
clienteRoutes.get('/', clienteController.list)
clienteRoutes.get('/:id', clienteController.findById)
clienteRoutes.delete('/:id', clienteController.delete)

clienteRoutes.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.number().integer(),
      nome: Joi.string(),
      telefone: Joi.string(),
      endereco: Joi.string(),
      senha: Joi.string(),
      email: Joi.string().email(),
    },
  }),
  clienteController.update,
)

export { clienteRoutes }
