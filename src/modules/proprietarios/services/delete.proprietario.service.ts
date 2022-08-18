import { proprietarioRepository } from '../repositories/proprietarios.repository'

class DeleteProprietarioService {
  async execute(id: number): Promise<boolean> {
    return await proprietarioRepository.delete(id)
  }
}

export const deleteProprietarioService = new DeleteProprietarioService()
