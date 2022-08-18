import { Proprietario } from '../model/Proprietario'
import { proprietarioRepository } from '../repositories/proprietarios.repository'

class GetByIdProprietarioService {
  async execute(id: number): Promise<Proprietario | null> {
    return await proprietarioRepository.getById(id)
  }
}

export const getByIdProprietarioService = new GetByIdProprietarioService()
