import {
  IUpdateAnimal,
  animalRepository,
  TFullAnimal,
} from '../repositories/animais.repository'

class UpdateAnimalService {
  async execute(animal: IUpdateAnimal): Promise<TFullAnimal> {
    return await animalRepository.update(animal)
  }
}

export const updateAnimalService = new UpdateAnimalService()
