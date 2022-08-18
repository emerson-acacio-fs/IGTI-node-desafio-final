import { connection } from 'database/database'
import { Cliente } from 'modules/clientes/model/Cliete'
import { Livro } from 'modules/Livros/model/Livro'

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  ForeignKey,
} from 'sequelize'

class Venda extends Model<
  InferAttributes<Venda>,
  InferCreationAttributes<Venda>
> {
  id?: number
  valor: number
  data: string
  cliente_Id: ForeignKey<number>
  livro_Id: ForeignKey<number>
}

function initVenda(): void {
  Venda.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      data: { type: DataTypes.DATE, allowNull: false },
      valor: { type: DataTypes.DOUBLE, allowNull: false },
    },
    { sequelize: connection, tableName: 'vendas', modelName: 'venda' },
  )
}

function associateVenda(): void {
  Venda.belongsTo(Livro, {
    foreignKey: { allowNull: false, name: 'livro_id' },
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  Venda.belongsTo(Cliente, {
    foreignKey: { allowNull: false, name: 'cliente_id' },
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
}

export { Venda, initVenda, associateVenda }
