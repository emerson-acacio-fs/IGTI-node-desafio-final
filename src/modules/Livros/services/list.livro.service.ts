import { livroRepository, TFullLivro } from '../repositories/livros.repository'

class ListLivroService {
  async execute(autorId?: number): Promise<TFullLivro[]> {
    return await livroRepository.list(autorId)
  }
}

export const listLivroService = new ListLivroService()
