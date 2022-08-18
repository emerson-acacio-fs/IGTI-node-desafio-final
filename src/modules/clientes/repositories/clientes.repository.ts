import { Cliente } from '../model/Cliete'

export type TCreateCliente = Pick<Cliente, 'proprietarioId' | 'nome' | 'tipo'>
export type TFullCliente = Cliente
export interface IUpdateCliente {
  id: number
  nome?: string
  tipo?: string
  proprietarioId?: number
}
class ClienteRepository {
  async show(proprietarioId?: number): Promise<Cliente[]> {
    if (proprietarioId) {
      return await Cliente.findAll({ where: { proprietarioId } })
    }
    return await Cliente.findAll()
  }
  async getById(id: number): Promise<Cliente | null> {
    return await Cliente.findByPk(id)
  }
  async create(cliente: TCreateCliente): Promise<TFullCliente> {
    return await Cliente.create(cliente)
  }
  async delete(id: number): Promise<boolean> {
    const isDeleted = await Cliente.destroy({
      where: { id },
    })
    return isDeleted ? true : false
  }
  async update(cliente: IUpdateCliente): Promise<TFullCliente> {
    const [, newCliente] = await Cliente.update(
      {
        ...(cliente.nome ? { nome: cliente.nome } : {}),
        ...(cliente.tipo ? { tipo: cliente.tipo } : {}),
        ...(cliente.proprietarioId
          ? { proprietarioId: cliente.proprietarioId }
          : {}),
      },
      { where: { id: cliente.id }, returning: true },
    )
    return newCliente[0]
  }
}

export const clienteRepository = new ClienteRepository()
