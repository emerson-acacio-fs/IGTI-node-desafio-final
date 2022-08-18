import { Animal } from '../model/Animais'
import { animalRepository } from '../repositories/animais.repository'

class GetByIdAnimalService {
  async execute(id: number): Promise<Animal | null> {
    return await animalRepository.getById(id)
  }
}

export const getByIdAnimalService = new GetByIdAnimalService()
