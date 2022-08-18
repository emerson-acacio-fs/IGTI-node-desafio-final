import {
  proprietarioRepository,
  TFullProprietario,
} from '../repositories/proprietarios.repository'

class ShowProprietarioService {
  async execute(): Promise<TFullProprietario[]> {
    return await proprietarioRepository.show()
  }
}

export const showProprietarioService = new ShowProprietarioService()
