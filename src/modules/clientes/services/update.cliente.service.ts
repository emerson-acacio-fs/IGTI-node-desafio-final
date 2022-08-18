import {
  clienteRepository,
  TClienteSemSenha,
  TUpdateCliente,
} from '../repositories/clientes.repository'

class UpdateClienteService {
  async execute(cliente: TUpdateCliente): Promise<TClienteSemSenha> {
    return await clienteRepository.update(cliente)
  }
}

export const updateClienteService = new UpdateClienteService()
