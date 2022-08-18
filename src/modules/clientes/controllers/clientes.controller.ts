import { Request, Response } from 'express'
import { createClienteService } from '../services/create.cliente.service'

class ClienteController {
  async create(request: Request, response: Response) {
    const { nome, tipo, proprietarioId } = request.body
    const listaDeClientes = await createClienteService.execute({
      nome,
      tipo,
      proprietarioId,
    })
    response.send(listaDeClientes)
  }
}

export const clienteController = new ClienteController()
