import { livroRepository, TFullLivro } from '../repositories/livros.repository'

class GeteByIdLivroService {
  async execute(id: number): Promise<TFullLivro | null> {
    return await livroRepository.findById(id)
  }
}

export const getByIdLivroService = new GeteByIdLivroService()
