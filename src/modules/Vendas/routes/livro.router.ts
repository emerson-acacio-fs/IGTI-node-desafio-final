import { celebrate, Joi, Segments } from 'celebrate'
import { Router } from 'express'
import { vendaController } from '../controllers/vendas.controller'

const vendaRoutes = Router()

vendaRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      data: Joi.string().required(),
      valor: Joi.number().required(),
      livro_id: Joi.number().integer().required(),
      cliente_id: Joi.number().integer().required(),
    },
  }),
  vendaController.create,
)
vendaRoutes.get('/', vendaController.list)
vendaRoutes.get('/:id', vendaController.findById)

export { vendaRoutes }
