import { Request, Response } from 'express'
import { createAnimalService } from '../services/create.animal.service'
import { deleteAnimalService } from '../services/delete.animal.service'
import { getByIdAnimalService } from '../services/getById.animal.service'
import { showAnimalService } from '../services/show.animal.service'
import { updateAnimalService } from '../services/update.animal.service'

class AnimalController {
  async show(request: Request, response: Response) {
    const { proprietarioId } = request.query

    const listaDeAnimais = await showAnimalService.execute(
      proprietarioId ? parseInt(proprietarioId.toString()) : undefined,
    )
    response.send(listaDeAnimais)
  }
  async create(request: Request, response: Response) {
    const { nome, tipo, proprietarioId } = request.body
    const listaDeAnimais = await createAnimalService.execute({
      nome,
      tipo,
      proprietarioId,
    })
    response.send(listaDeAnimais)
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params
    const isDeleted = await deleteAnimalService.execute(parseInt(id))
    response.send(isDeleted)
  }
  async getById(request: Request, response: Response) {
    const { id } = request.params
    const animal = await getByIdAnimalService.execute(parseInt(id))
    response.send(animal)
  }
  async update(request: Request, response: Response) {
    const { id, nome, tipo, proprietarioId } = request.body
    const listaDeAnimais = await updateAnimalService.execute({
      id: parseInt(id),
      nome,
      tipo,
      proprietarioId,
    })
    response.send(listaDeAnimais)
  }
}

export const animalController = new AnimalController()
