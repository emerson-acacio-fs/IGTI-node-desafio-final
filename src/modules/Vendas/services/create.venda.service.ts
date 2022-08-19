import {
  vendaRepository,
  TFullVenda,
  TCreateVenda,
} from '../repositories/vendas.repository'

class CreateVendaService {
  async execute(cliente: TCreateVenda): Promise<TFullVenda> {
    return await vendaRepository.create(cliente)
  }
}

export const createVendaService = new CreateVendaService()
