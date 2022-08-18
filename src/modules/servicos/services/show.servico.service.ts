import {
  animalRepository,
  TFullServico,
} from '../repositories/servicos.repository'

class ShowServicoService {
  async execute(proprietarioId?: number): Promise<TFullServico[]> {
    return await animalRepository.show(proprietarioId)
  }
}

export const showServicoService = new ShowServicoService()
