import { Request, Response } from 'express'
import { createAutorService } from '../services/create.autor.service'
import { deleteAutorService } from '../services/delete.autor.service'
import { getByIdAutorService } from '../services/getById.autor.service'
import { listAutorService } from '../services/list.autor.service'
import { updateAutorService } from '../services/update.autor.service'

class AutorController {
  async create(request: Request, response: Response) {
    const { nome, email, telefone } = request.body
    const autor = await createAutorService.execute({
      nome,
      email,
      telefone,
    })

    response.send(autor)
  }
  async list(request: Request, response: Response) {
    const listaDeAutores = await listAutorService.execute()
    response.send(listaDeAutores)
  }
  async update(request: Request, response: Response) {
    const { id, nome, email, telefone } = request.body
    const autor = await updateAutorService.execute({
      id,
      nome,
      email,
      telefone,
    })

    response.send(autor)
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params
    const status = await deleteAutorService.execute(parseInt(id))

    response.send(!!status)
  }
  async findById(request: Request, response: Response) {
    const { id } = request.params
    const autor = await getByIdAutorService.execute(parseInt(id))

    response.send(autor)
  }
}

export const autorController = new AutorController()
