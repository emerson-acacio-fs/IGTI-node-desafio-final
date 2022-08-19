import { vendaRepository, TFullVenda } from '../repositories/vendas.repository'

class GeteByIdVendaService {
  async execute(id: number): Promise<TFullVenda | null> {
    return await vendaRepository.findById(id)
  }
}

export const getByIdVendaService = new GeteByIdVendaService()
