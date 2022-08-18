import { Request, Response } from 'express'
import { createServicoService } from '../services/create.servico.service'
import { showServicoService } from '../services/show.servico.service'

class ServicoController {
  async show(request: Request, response: Response) {
    const { proprietarioId } = request.query

    const listaDeServicos = await showServicoService.execute(
      proprietarioId ? parseInt(proprietarioId.toString()) : undefined,
    )
    response.send(listaDeServicos)
  }
  async create(request: Request, response: Response) {
    const { descricao, valor, animalId } = request.body
    const listaDeServicos = await createServicoService.execute({
      descricao,
      valor,
      animalId,
    })
    response.send(listaDeServicos)
  }
}

export const servicoController = new ServicoController()
