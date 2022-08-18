import { Animal } from 'modules/animais/model/Animais'
import { Servico } from '../model/Servicos'

export type TCreateServico = Pick<Servico, 'animalId' | 'descricao' | 'valor'>
export type TFullServico = Servico
export interface IUpdateServico {
  id: number
  descricao?: string
  valor?: number
  animalId?: number
}
class ServicoRepository {
  async show(proprietarioId?: number): Promise<Servico[]> {
    if (proprietarioId) {
      return await Servico.findAll({
        include: [{ model: Animal, where: { proprietarioId } }],
      })
    }
    return await Servico.findAll({ include: [{ model: Animal }] })
  }
  async getById(id: number): Promise<Servico | null> {
    return await Servico.findByPk(id)
  }
  async create(servico: TCreateServico): Promise<TFullServico> {
    return await Servico.create(servico)
  }
  async delete(id: number): Promise<boolean> {
    const isDeleted = await Servico.destroy({
      where: { id },
    })
    return isDeleted ? true : false
  }
  async update(servico: IUpdateServico): Promise<TFullServico> {
    const [, newServico] = await Servico.update(
      {
        ...(servico.descricao ? { nome: servico.descricao } : {}),
        ...(servico.valor ? { tipo: servico.valor } : {}),
        ...(servico.animalId ? { animalId: servico.animalId } : {}),
      },
      { where: { id: servico.id }, returning: true },
    )
    return newServico[0]
  }
}

export const animalRepository = new ServicoRepository()
