import { autorRepository } from '../repositories/autores.repository'

class DeleteAutorService {
  async execute(id: number): Promise<number> {
    return await autorRepository.delete(id)
  }
}

export const deleteAutorService = new DeleteAutorService()
