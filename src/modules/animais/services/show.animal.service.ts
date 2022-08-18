import {
  animalRepository,
  TFullAnimal,
} from '../repositories/animais.repository'

class ShowAnimalService {
  async execute(proprietarioId?: number): Promise<TFullAnimal[]> {
    return await animalRepository.show(proprietarioId)
  }
}

export const showAnimalService = new ShowAnimalService()
