import { Router } from 'express'
import { autorRoutes } from 'modules/Autores/routes/autor.router'
import { clienteRoutes } from 'modules/clientes/routes/cliente.router'
import { livroRoutes } from 'modules/Livros/routes/livro.router'
import { vendaRoutes } from 'modules/Vendas/routes/livro.router'

const routes = Router()

routes.use('/cliente', clienteRoutes)
routes.use('/autor', autorRoutes)
routes.use('/livro', livroRoutes)
routes.use('/venda', vendaRoutes)

export { routes }
