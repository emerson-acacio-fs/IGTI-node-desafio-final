import { clienteRepository } from '../repositories/clientes.repository'

class DeleteClienteService {
  async execute(id: number): Promise<number> {
    return await clienteRepository.delete(id)
  }
}

export const deleteClienteService = new DeleteClienteService()
