import {
  vendaRepository,
  TFullVenda,
  IListFilters,
} from '../repositories/vendas.repository'

class ListVendaService {
  async execute(filters: IListFilters): Promise<TFullVenda[]> {
    return await vendaRepository.list(filters)
  }
}

export const listVendaService = new ListVendaService()
