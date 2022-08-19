import { livroRepository } from '../repositories/livros.repository'

class DeleteLivroService {
  async execute(id: number): Promise<number> {
    return await livroRepository.delete(id)
  }
}

export const deleteLivroService = new DeleteLivroService()
