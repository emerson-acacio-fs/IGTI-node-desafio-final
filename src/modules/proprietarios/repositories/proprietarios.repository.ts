import { Proprietario } from '../model/Proprietario'

export type TCreateProprietario = Pick<Proprietario, 'nome' | 'telefone'>
export type TFullProprietario = Proprietario
export interface IUpdateProprietario {
  id: number
  nome?: string
  telefone?: string
}
class ProprietarioRepository {
  async show(): Promise<Proprietario[]> {
    return await Proprietario.findAll()
  }
  async getById(id: number): Promise<Proprietario | null> {
    return await Proprietario.findByPk(id)
  }
  async create(proprietario: TCreateProprietario): Promise<TFullProprietario> {
    return await Proprietario.create(proprietario)
  }
  async delete(id: number): Promise<boolean> {
    const isDeleted = await Proprietario.destroy({
      where: { id },
    })
    return isDeleted ? true : false
  }
  async update(proprietario: IUpdateProprietario): Promise<TFullProprietario> {
    const [, newProprietarios] = await Proprietario.update(
      {
        ...(proprietario.nome ? { nome: proprietario.nome } : {}),
        ...(proprietario.telefone ? { telefone: proprietario.telefone } : {}),
      },
      { where: { id: proprietario.id }, returning: true },
    )
    return newProprietarios[0]
  }
}

export const proprietarioRepository = new ProprietarioRepository()
