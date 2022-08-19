import { autorRepository, TFullAutor } from '../repositories/autores.repository'

class GeteByIdAutorService {
  async execute(id: number): Promise<TFullAutor | null> {
    return await autorRepository.findById(id)
  }
}

export const getByIdAutorService = new GeteByIdAutorService()
