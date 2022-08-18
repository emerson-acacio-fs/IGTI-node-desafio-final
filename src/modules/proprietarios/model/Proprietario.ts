import { connection } from 'database/database'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize'

class Proprietario extends Model<
  InferAttributes<Proprietario>,
  InferCreationAttributes<Proprietario>
> {
  id?: number
  nome: string
  telefone: string
}

function initProprietario(): void {
  Proprietario.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nome: { type: DataTypes.STRING, allowNull: false },
      telefone: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize: connection,
      tableName: 'proprietarios',
      modelName: 'proprietario',
    },
  )
}

export { Proprietario, initProprietario }
