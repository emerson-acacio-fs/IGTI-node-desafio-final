import {
  IUpdateProprietario,
  proprietarioRepository,
  TFullProprietario,
} from '../repositories/proprietarios.repository'

class UpdateProprietarioService {
  async execute(proprietario: IUpdateProprietario): Promise<TFullProprietario> {
    return await proprietarioRepository.update(proprietario)
  }
}

export const updateProprietarioService = new UpdateProprietarioService()
