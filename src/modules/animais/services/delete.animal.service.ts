import { animalRepository } from '../repositories/animais.repository'

class DeleteAnimalService {
  async execute(id: number): Promise<boolean> {
    return await animalRepository.delete(id)
  }
}

export const deleteAnimalService = new DeleteAnimalService()
