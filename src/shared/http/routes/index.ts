import { Router } from 'express'
import { autorRoutes } from 'modules/Autores/routes/autor.router'
import { clienteRoutes } from 'modules/clientes/routes/cliente.router'

const routes = Router()

routes.use('/cliente', clienteRoutes)
routes.use('/autor', autorRoutes)

export { routes }
