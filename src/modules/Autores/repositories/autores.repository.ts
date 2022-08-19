import { Livro } from 'modules/Livros/model/Livro'
import { AppError } from 'shared/errors/AppError'
import { Autor } from '../model/Autor'

export type TCreateAutor = Pick<Autor, 'nome' | 'email' | 'telefone'>
export type TFullAutor = Autor

export type TUpdateAutor = Partial<Autor>

class AutorRepository {
  async create(autor: TCreateAutor): Promise<TFullAutor> {
    const novoAutor = await Autor.create(autor)

    return novoAutor
  }
  async list(): Promise<TFullAutor[]> {
    const listaDeAutores = await Autor.findAll()

    return listaDeAutores
  }

  async findById(id: number): Promise<TFullAutor | null> {
    const autor = await Autor.findByPk(id)
    return autor
  }
  async delete(id: number): Promise<number> {
    const listaDeLivros = await Livro.findAll({
      where: { autor_id: id },
    })

    if (listaDeLivros.length) {
      throw new AppError('Existem livros atreladas a esse autor.', 409)
    }

    const sataus = await Autor.destroy({ where: { id } })

    return sataus
  }
  async update(autor: TUpdateAutor): Promise<TFullAutor> {
    const [, novoAutor] = await Autor.update(
      {
        ...(autor.nome ? { nome: autor.nome } : {}),
        ...(autor.email ? { email: autor.email } : {}),
        ...(autor.telefone ? { telefone: autor.telefone } : {}),
      },
      { where: { id: autor.id }, returning: true },
    )

    return novoAutor[0]
  }
}

export const autorRepository = new AutorRepository()
