import {
  clienteRepository,
  TClienteSemSenha,
  TCreateCliente,
} from '../repositories/clientes.repository'

class CreateClienteService {
  async execute(cliente: TCreateCliente): Promise<TClienteSemSenha> {
    return await clienteRepository.create(cliente)
  }
}

export const createClienteService = new CreateClienteService()
