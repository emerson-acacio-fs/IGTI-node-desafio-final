import { connection } from 'database/database'
import { Venda } from 'modules/Vendas/model/Venda'

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
  ForeignKey,
  HasManyGetAssociationsMixin,
} from 'sequelize'

class Cliente extends Model<
  InferAttributes<Cliente>,
  InferCreationAttributes<Cliente>
> {
  id: CreationOptional<number>
  nome: string
  email: string
  senha: string
  telefone: string
  endereco: string
  vendas: HasManyGetAssociationsMixin<Venda>
}

function initCliente(): void {
  Cliente.init(
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
      senha: { type: DataTypes.STRING, allowNull: false },
      endereco: { type: DataTypes.STRING, allowNull: false },
    },
    { sequelize: connection, tableName: 'clientes', modelName: 'cliente' },
  )
}

export { Cliente, initCliente }
