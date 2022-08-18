import { Request, Response } from 'express'
import { createProprietarioService } from '../services/create.proprietario.service'
import { deleteProprietarioService } from '../services/delete.proprietario.service'
import { getByIdProprietarioService } from '../services/getById.proprietario.service'
import { showProprietarioService } from '../services/show.proprietario.service'
import { updateProprietarioService } from '../services/update.proprietario.service'

class ProprietarioController {
  async show(request: Request, response: Response) {
    const listaDeProprietarios = await showProprietarioService.execute()
    response.send(listaDeProprietarios)
  }
  async create(request: Request, response: Response) {
    const { nome, telefone } = request.body
    const listaDeProprietarios = await createProprietarioService.execute({
      nome,
      telefone,
    })
    response.send(listaDeProprietarios)
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params
    const isDeleted = await deleteProprietarioService.execute(parseInt(id))
    response.send(isDeleted)
  }
  async getById(request: Request, response: Response) {
    const { id } = request.params
    const proprietario = await getByIdProprietarioService.execute(parseInt(id))
    response.send(proprietario)
  }
  async update(request: Request, response: Response) {
    const { id, nome, telefone } = request.body
    const listaDeProprietarios = await updateProprietarioService.execute({
      id: parseInt(id),
      nome,
      telefone,
    })
    response.send(listaDeProprietarios)
  }
}

export const proprietarioController = new ProprietarioController()
