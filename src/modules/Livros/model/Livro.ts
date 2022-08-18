import { connection } from 'database/database'
import { Autor } from 'modules/Autores/model/Autor'

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  ForeignKey,
} from 'sequelize'

class Livro extends Model<
  InferAttributes<Livro>,
  InferCreationAttributes<Livro>
> {
  id?: number
  nome: string
  valor: number
  estoque: number
  autor_Id: ForeignKey<number>
}

function initLivro(): void {
  Livro.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nome: { type: DataTypes.STRING, allowNull: false },
      valor: { type: DataTypes.DOUBLE, allowNull: false },
      estoque: { type: DataTypes.INTEGER, allowNull: false },
    },
    { sequelize: connection, tableName: 'livros', modelName: 'livro' },
  )
}

function associateLivro(): void {
  Livro.belongsTo(Autor, {
    foreignKey: { allowNull: false, name: 'autor_id' },
    onDelete: 'NO ACTION',
  })
}

export { Livro, initLivro, associateLivro }
