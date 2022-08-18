import {
  proprietarioRepository,
  TCreateProprietario,
  TFullProprietario,
} from '../repositories/proprietarios.repository'

class CreateProprietarioService {
  async execute(proprietario: TCreateProprietario): Promise<TFullProprietario> {
    return await proprietarioRepository.create(proprietario)
  }
}

export const createProprietarioService = new CreateProprietarioService()
