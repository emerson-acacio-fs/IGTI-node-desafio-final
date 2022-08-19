import { Request, Response } from 'express'
import { createLivroService } from '../services/create.livro.service'
import { deleteLivroService } from '../services/delete.livro.service'
import { getByIdLivroService } from '../services/getById.livro.service'
import { listLivroService } from '../services/list.livro.service'
import { updateLivroService } from '../services/update.livro.service'

class LivroController {
  async create(request: Request, response: Response) {
    const { nome, valor, estoque, autor_id } = request.body
    const livro = await createLivroService.execute({
      nome,
      valor,
      estoque,
      autor_id,
    })

    response.send(livro)
  }
  async list(request: Request, response: Response) {
    const { autorId } = request.query
    const listaDeLivros = await listLivroService.execute(
      autorId ? parseInt(autorId.toString()) : undefined,
    )
    response.send(listaDeLivros)
  }
  async update(request: Request, response: Response) {
    const { id, valor, estoque } = request.body
    const livro = await updateLivroService.execute({
      id,
      valor,
      estoque,
    })

    response.send(livro)
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params
    const status = await deleteLivroService.execute(parseInt(id))

    response.send(!!status)
  }
  async findById(request: Request, response: Response) {
    const { id } = request.params
    const livro = await getByIdLivroService.execute(parseInt(id))

    response.send(livro)
  }
}

export const livroController = new LivroController()
