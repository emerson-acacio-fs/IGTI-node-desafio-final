import {
  clienteRepository,
  TClienteSemSenhaComVendas,
} from '../repositories/clientes.repository'

class ListClienteService {
  async execute(): Promise<TClienteSemSenhaComVendas[]> {
    return await clienteRepository.list()
  }
}

export const listClienteService = new ListClienteService()
