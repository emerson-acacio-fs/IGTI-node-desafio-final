import {
  animalRepository,
  TCreateServico,
  TFullServico,
} from '../repositories/servicos.repository'

class CreateServicoService {
  async execute(animal: TCreateServico): Promise<TFullServico> {
    return await animalRepository.create(animal)
  }
}

export const createServicoService = new CreateServicoService()
