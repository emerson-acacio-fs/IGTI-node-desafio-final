import {
  clienteRepository,
  TClienteSemSenha,
} from '../repositories/clientes.repository'

class GeteByIdClienteService {
  async execute(id: number): Promise<TClienteSemSenha | null> {
    return await clienteRepository.findById(id)
  }
}

export const getByIdClienteService = new GeteByIdClienteService()
