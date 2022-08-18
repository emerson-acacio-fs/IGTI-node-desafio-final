import { Animal } from '../model/Animais'

export type TCreateAnimal = Pick<Animal, 'proprietarioId' | 'nome' | 'tipo'>
export type TFullAnimal = Animal
export interface IUpdateAnimal {
  id: number
  nome?: string
  tipo?: string
  proprietarioId?: number
}
class AnimalRepository {
  async show(proprietarioId?: number): Promise<Animal[]> {
    if (proprietarioId) {
      return await Animal.findAll({ where: { proprietarioId } })
    }
    return await Animal.findAll()
  }
  async getById(id: number): Promise<Animal | null> {
    return await Animal.findByPk(id)
  }
  async create(animal: TCreateAnimal): Promise<TFullAnimal> {
    return await Animal.create(animal)
  }
  async delete(id: number): Promise<boolean> {
    const isDeleted = await Animal.destroy({
      where: { id },
    })
    return isDeleted ? true : false
  }
  async update(animal: IUpdateAnimal): Promise<TFullAnimal> {
    const [, newAnimal] = await Animal.update(
      {
        ...(animal.nome ? { nome: animal.nome } : {}),
        ...(animal.tipo ? { tipo: animal.tipo } : {}),
        ...(animal.proprietarioId
          ? { proprietarioId: animal.proprietarioId }
          : {}),
      },
      { where: { id: animal.id }, returning: true },
    )
    return newAnimal[0]
  }
}

export const animalRepository = new AnimalRepository()
