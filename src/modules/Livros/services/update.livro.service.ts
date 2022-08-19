import {
  livroRepository,
  TFullLivro,
  TUpdateLivro,
} from '../repositories/livros.repository'

class UpdateLivroService {
  async execute(livro: TUpdateLivro): Promise<TFullLivro> {
    return await livroRepository.update(livro)
  }
}

export const updateLivroService = new UpdateLivroService()
