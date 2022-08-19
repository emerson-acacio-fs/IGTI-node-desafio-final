import { autorRepository, TFullAutor } from '../repositories/autores.repository'

class ListAutorService {
  async execute(): Promise<TFullAutor[]> {
    return await autorRepository.list()
  }
}

export const listAutorService = new ListAutorService()
