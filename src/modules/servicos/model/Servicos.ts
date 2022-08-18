import { connection } from 'database/database'
import { Animal } from 'modules/animais/model/Animais'

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  ForeignKey,
} from 'sequelize'

class Servico extends Model<
  InferAttributes<Servico>,
  InferCreationAttributes<Servico>
> {
  id?: number
  descricao: string
  valor: number
  animalId: ForeignKey<number>
}

function initServico(): void {
  Servico.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      descricao: { type: DataTypes.STRING, allowNull: false },
      valor: { type: DataTypes.DOUBLE, allowNull: false },
    },
    { sequelize: connection, tableName: 'servicos', modelName: 'servico' },
  )
}
function associateServico(): void {
  Servico.belongsTo(Animal, { foreignKey: { allowNull: false } })
}

export { Servico, initServico, associateServico }
