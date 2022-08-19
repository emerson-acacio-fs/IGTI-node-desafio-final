import { Cliente } from 'modules/clientes/model/Cliete'
import { Livro } from 'modules/Livros/model/Livro'
import { AppError } from 'shared/errors/AppError'
import { Venda } from '../model/Venda'

export type TCreateVenda = Pick<
  Venda,
  'valor' | 'data' | 'livro_id' | 'cliente_id'
>
export type TFullVenda = Venda

export type TUpdateVenda = Partial<Venda>

export interface IListFilters {
  autorId?: number
  clienteId?: number
  livroId?: number
}

class VendaRepository {
  async create(venda: TCreateVenda): Promise<TFullVenda> {
    const livro = await Livro.findByPk(venda.livro_id)

    const cliente = await Cliente.findByPk(venda.cliente_id)

    if (!livro) {
      throw new AppError('Esse livro não existe', 404)
    }

    if (!cliente) {
      throw new AppError('Esse cliente não existe', 404)
    }

    if (livro.estoque <= 0) {
      throw new AppError('Não tem estoque para esse livro', 400)
    }
    const novoVenda = await Venda.create(venda)
    console.log(venda.data)
    await Livro.update(
      { estoque: livro.estoque - 1 },
      { where: { id: livro.id } },
    )
    return novoVenda
  }
  async list({
    autorId,
    livroId,
    clienteId,
  }: IListFilters): Promise<TFullVenda[]> {
    if (livroId) {
      const listaDeVendas = await Venda.findAll({
        where: { livro_id: livroId },
      })

      return listaDeVendas
    }

    if (clienteId) {
      const listaDeVendas = await Venda.findAll({
        where: { cliente_id: clienteId },
      })

      return listaDeVendas
    }
    if (autorId) {
      const listaDeVendas = await Venda.findAll({
        include: [{ model: Livro, where: { autor_id: autorId } }],
      })
      return listaDeVendas
    }
    const listaDeVendas = await Venda.findAll()

    return listaDeVendas
  }

  async findById(id: number): Promise<TFullVenda | null> {
    const venda = await Venda.findByPk(id)
    return venda
  }
}

export const vendaRepository = new VendaRepository()
