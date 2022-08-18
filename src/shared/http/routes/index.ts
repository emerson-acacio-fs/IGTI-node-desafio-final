import { Router } from 'express'
import { animalRoutes } from 'modules/animais/routes/animal.router'
import { proprietariosRoutes } from 'modules/proprietarios/routes/proprietario.router'
import { servicoRoutes } from 'modules/servicos/routes/animal.router'

const routes = Router()

routes.use('/proprietario', proprietariosRoutes)
routes.use('/animal', animalRoutes)
routes.use('/servico', servicoRoutes)

export { routes }
