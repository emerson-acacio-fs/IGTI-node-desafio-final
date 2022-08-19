import { connection } from 'database/database'

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize'

class Autor extends Model<
  InferAttributes<Autor>,
  InferCreationAttributes<Autor>
> {
  id?: number
  nome: string
  email: string
  telefone: string
}

function initAutor(): void {
  Autor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nome: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      telefone: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize: connection, tableName: 'autores', modelName: 'autor' },
  )
}

export { Autor, initAutor }
