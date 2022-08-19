import { Venda } from 'modules/Vendas/model/Venda'
import { AppError } from 'shared/errors/AppError'
import { Livro } from '../model/Livro'

export type TCreateLivro = Pick<
  Livro,
  'nome' | 'valor' | 'estoque' | 'autor_id'
>
export type TFullLivro = Livro

export type TUpdateLivro = Partial<Livro>

class LivroRepository {
  async create(livro: TCreateLivro): Promise<TFullLivro> {
    const novoLivro = await Livro.create(livro)

    return novoLivro
  }
  async list(autorId?: number): Promise<TFullLivro[]> {
    const listaDeLivros = await Livro.findAll({
      ...(autorId ? { where: { autor_id: autorId } } : {}),
    })

    return listaDeLivros
  }

  async findById(id: number): Promise<TFullLivro | null> {
    const livro = await Livro.findByPk(id)
    return livro
  }
  async delete(id: number): Promise<number> {
    const listaDeLivros = await Venda.findAll({
      where: { livro_id: id },
    })

    if (listaDeLivros.length) {
      throw new AppError('Existem Vendas atreladas a esse livro.', 409)
    }

    const sataus = await Livro.destroy({ where: { id } })

    return sataus
  }
  async update(livro: TUpdateLivro): Promise<TFullLivro> {
    const [, novoLivro] = await Livro.update(
      {
        ...(livro.nome ? { nome: livro.nome } : {}),
        ...(livro.valor ? { valor: livro.valor } : {}),
        ...(livro.estoque ? { estoque: livro.estoque } : {}),
        ...(livro.autor_id ? { autor_id: livro.autor_id } : {}),
      },
      { where: { id: livro.id }, returning: true },
    )

    return novoLivro[0]
  }
}

export const livroRepository = new LivroRepository()
