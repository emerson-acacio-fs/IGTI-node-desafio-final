import {
  livroRepository,
  TFullLivro,
  TCreateLivro,
} from '../repositories/livros.repository'

class CreateLivroService {
  async execute(cliente: TCreateLivro): Promise<TFullLivro> {
    return await livroRepository.create(cliente)
  }
}

export const createLivroService = new CreateLivroService()
