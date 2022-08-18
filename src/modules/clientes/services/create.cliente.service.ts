import {
  clienteRepository,
  TCreateCliente,
  TFullCliente,
} from '../repositories/clientes.repository'

class CreateClienteService {
  async execute(cliente: TCreateCliente): Promise<TFullCliente> {
    return await clienteRepository.create(cliente)
  }
}

export const createClienteService = new CreateClienteService()
