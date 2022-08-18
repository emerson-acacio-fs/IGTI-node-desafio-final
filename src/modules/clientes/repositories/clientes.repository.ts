import { Venda } from 'modules/Vendas/model/Venda'
import { AppError } from 'shared/errors/AppError'
import { Cliente } from '../model/Cliete'

export type TCreateCliente = Pick<
  Cliente,
  'nome' | 'senha' | 'email' | 'endereco' | 'telefone'
>
export type TFullCliente = Cliente
export type TClienteSemSenha = Pick<
  Cliente,
  'nome' | 'email' | 'endereco' | 'telefone' | 'id'
>

export type TUpdateCliente = Partial<Cliente>

export type TClienteSemSenhaComVendas = TClienteSemSenha &
  Pick<Cliente, 'vendas'>
class ClienteRepository {
  async create(cliente: TCreateCliente): Promise<TClienteSemSenha> {
    const novoCliente = await Cliente.create(cliente)

    const { id, nome, email, telefone, endereco } = novoCliente
    return { id, nome, email, telefone, endereco }
  }
  async list(): Promise<TClienteSemSenhaComVendas[]> {
    const listaDeClientes = await Cliente.findAll({
      attributes: { exclude: ['senha'] },
      include: { model: Venda, as: 'vendas' },
    })

    return listaDeClientes
  }
  async findByIdWithVendas(
    id: number,
  ): Promise<TClienteSemSenhaComVendas | null> {
    const cliente = await Cliente.findByPk(id, {
      attributes: { exclude: ['senha'] },
      include: { model: Venda, as: 'vendas' },
    })

    return cliente
  }
  async findById(id: number): Promise<TClienteSemSenha | null> {
    const cliente = await Cliente.findByPk(id, {
      attributes: { exclude: ['senha'] },
    })
    return cliente
  }
  async delete(id: number): Promise<number> {
    const listaDeVendas = await Venda.findAll({
      where: { cliente_id: id },
    })

    if (listaDeVendas.length) {
      throw new AppError('Existem vendas atreladas a esse cliente.', 409)
    }

    const sataus = await Cliente.destroy({ where: { id } })

    return sataus
  }
  async update(cliente: TUpdateCliente): Promise<TClienteSemSenha> {
    const [, novoCliente] = await Cliente.update(
      {
        ...(cliente.nome ? { nome: cliente.nome } : {}),
        ...(cliente.email ? { email: cliente.email } : {}),
        ...(cliente.senha ? { senha: cliente.senha } : {}),
        ...(cliente.telefone ? { telefone: cliente.telefone } : {}),
        ...(cliente.endereco ? { endereco: cliente.endereco } : {}),
      },
      { where: { id: cliente.id }, returning: true },
    )

    const { id, nome, email, telefone, endereco } = novoCliente[0]
    return { id, nome, email, telefone, endereco }
  }
}

export const clienteRepository = new ClienteRepository()
