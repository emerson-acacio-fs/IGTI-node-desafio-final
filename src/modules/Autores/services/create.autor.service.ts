import {
  autorRepository,
  TFullAutor,
  TCreateAutor,
} from '../repositories/autores.repository'

class CreateAutorService {
  async execute(cliente: TCreateAutor): Promise<TFullAutor> {
    return await autorRepository.create(cliente)
  }
}

export const createAutorService = new CreateAutorService()
