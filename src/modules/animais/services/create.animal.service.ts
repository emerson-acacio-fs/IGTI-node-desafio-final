import {
  animalRepository,
  TCreateAnimal,
  TFullAnimal,
} from '../repositories/animais.repository'

class CreateAnimalService {
  async execute(animal: TCreateAnimal): Promise<TFullAnimal> {
    return await animalRepository.create(animal)
  }
}

export const createAnimalService = new CreateAnimalService()
