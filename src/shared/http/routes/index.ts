import { Router } from 'express'
import { clienteRoutes } from 'modules/clientes/routes/cliente.router'

const routes = Router()

routes.use('/cliente', clienteRoutes)

export { routes }
