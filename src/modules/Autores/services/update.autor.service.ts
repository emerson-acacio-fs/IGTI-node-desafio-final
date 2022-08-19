import {
  autorRepository,
  TFullAutor,
  TUpdateAutor,
} from '../repositories/autores.repository'

class UpdateAutorService {
  async execute(autor: TUpdateAutor): Promise<TFullAutor> {
    return await autorRepository.update(autor)
  }
}

export const updateAutorService = new UpdateAutorService()
