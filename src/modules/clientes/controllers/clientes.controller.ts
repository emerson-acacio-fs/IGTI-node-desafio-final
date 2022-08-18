import { Request, Response } from 'express'
import { createClienteService } from '../services/create.cliente.service'
import { deleteClienteService } from '../services/delete.cliente.service'
import { getByIdClienteService } from '../services/getById.cliente.service'
import { listClienteService } from '../services/list.cliente.service'
import { updateClienteService } from '../services/update.cliente.service'

class ClienteController {
  async create(request: Request, response: Response) {
    const { nome, email, senha, endereco, telefone } = request.body
    const cliente = await createClienteService.execute({
      nome,
      email,
      senha,
      endereco,
      telefone,
    })

    response.send(cliente)
  }
  async list(request: Request, response: Response) {
    const listaDeClientes = await listClienteService.execute()
    response.send(listaDeClientes)
  }
  async update(request: Request, response: Response) {
    const { id, nome, email, senha, endereco, telefone } = request.body
    const cliente = await updateClienteService.execute({
      id,
      nome,
      email,
      senha,
      endereco,
      telefone,
    })

    response.send(cliente)
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params
    const status = await deleteClienteService.execute(parseInt(id))

    response.send(!!status)
  }
  async findById(request: Request, response: Response) {
    const { id } = request.params
    const cliente = await getByIdClienteService.execute(parseInt(id))

    response.send(cliente)
  }
}

export const clienteController = new ClienteController()
