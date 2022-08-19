import { Request, Response } from 'express'
import { createVendaService } from '../services/create.venda.service'
import { getByIdVendaService } from '../services/getById.venda.service'
import { listVendaService } from '../services/list.venda.service'

class VendaController {
  async create(request: Request, response: Response) {
    const { valor, data, livro_id, cliente_id } = request.body
    const venda = await createVendaService.execute({
      valor,
      data,
      livro_id,
      cliente_id,
    })

    response.send(venda)
  }
  async list(request: Request, response: Response) {
    const { autorId, clienteId, livroId } = request.query
    const listaDeVendas = await listVendaService.execute({
      autorId: autorId ? parseInt(autorId.toString()) : undefined,
      clienteId: clienteId ? parseInt(clienteId.toString()) : undefined,
      livroId: livroId ? parseInt(livroId.toString()) : undefined,
    })
    response.send(listaDeVendas)
  }
  async findById(request: Request, response: Response) {
    const { id } = request.params
    const venda = await getByIdVendaService.execute(parseInt(id))

    response.send(venda)
  }
}

export const vendaController = new VendaController()
