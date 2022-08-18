import { connection } from 'database/database'
import { Autor } from 'modules/Autores/model/Autor'
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
  cliente_id: ForeignKey<number>
  livro_id: ForeignKey<number>
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
      data: { type: DataTypes.DATEONLY, allowNull: false },
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
  Cliente.hasMany(Venda, { as: 'vendas', foreignKey: 'cliente_id' })
}

async function createData(): Promise<void> {
  await Cliente.create<Cliente>({
    nome: 'Giovana Betina Barbosa',
    email: 'giovanabetinabarbosa@gmail.com',
    senha: 'ZjRxDsNQt4',
    telefone: '27998835914',
    endereco: 'Rua Tancredo Neves 639, Serra-ES',
  })
  await Cliente.create<Cliente>({
    nome: 'Gael Geraldo da Conceição',
    email: 'ggconceicao@gmail.com',
    senha: 'MRalkmBOJq',
    telefone: '69994235684',
    endereco: 'Rua Modigliani 148, Porto Velho-RO',
  })
  await Cliente.create<Cliente>({
    nome: 'Francisca Isabel Vieira',
    email: 'franvieira@gmail.com',
    senha: 'kW1bnjci70',
    telefone: '85827093319',
    endereco: 'Rua Dom Henrique 182, São Luís-MA',
  })
  await Cliente.create<Cliente>({
    nome: 'Sarah Carolina da Conceição',
    email: 'ssarahcarolinadaconceicao@gmail.com',
    senha: '54bOsJjloe',
    telefone: '71387384988',
    endereco: 'Rua Poeta Evaristo de Souza 460, Natal-RN',
  })
  await Cliente.create<Cliente>({
    nome: 'Vitor Martin Pinto',
    email: 'vvitormartinpinto@gmail.com',
    senha: 'GGh0SmQ5Wo',
    telefone: '13720467392',
    endereco: 'Rua Quarenta e Nove 356, São Luís-MA',
  })

  //Adicionando autores
  await Autor.create<Autor>({
    nome: 'Carolina Milena Almada',
    email: 'ccarolinamilenaalmada@gmail.com',
    telefone: '83996565550',
  })
  await Autor.create<Autor>({
    nome: 'Yago Raul da Rocha',
    email: 'yyagorauldarocha@gmail.com',
    telefone: '63987932013',
  })
  await Autor.create<Autor>({
    nome: 'César Lucca Alves',
    email: 'cesarluccaalv@gmail.com',
    telefone: '63998823896',
  })

  //Adicionando livros

  await Livro.create<Livro>({
    nome: 'APIs em Node.js',
    valor: 90,
    estoque: 25,
    autor_id: 1,
  })
  await Livro.create<Livro>({
    nome: 'JavaScript Moderno',
    valor: 60,
    estoque: 5,
    autor_id: 1,
  })
  await Livro.create<Livro>({
    nome: 'Express na Prática',
    valor: 45,
    estoque: 35,
    autor_id: 1,
  })
  await Livro.create<Livro>({
    nome: 'Bancos de Dados Relacionais',
    valor: 130,
    estoque: 15,
    autor_id: 2,
  })
  await Livro.create<Livro>({
    nome: 'Bancos de Dados NoSQL',
    valor: 110,
    estoque: 2,
    autor_id: 3,
  })
  await Livro.create<Livro>({
    nome: 'Autenticação e Autorização em APIs',
    valor: 70,
    estoque: 60,
    autor_id: 3,
  })

  //Adicionando vendas

  await Venda.create<Venda>({
    valor: 90,
    data: '2000-08-10',
    cliente_id: 1,
    livro_id: 1,
  })
  await Venda.create<Venda>({
    valor: 60,
    data: '2000-10-20',
    cliente_id: 1,
    livro_id: 2,
  })
  await Venda.create<Venda>({
    valor: 130,
    data: '2000-10-12',
    cliente_id: 1,
    livro_id: 4,
  })
  await Venda.create<Venda>({
    valor: 60,
    data: '2000-01-06',
    cliente_id: 2,
    livro_id: 2,
  })
  await Venda.create<Venda>({
    valor: 45,
    data: '2000-03-02',
    cliente_id: 2,
    livro_id: 3,
  })
  await Venda.create<Venda>({
    valor: 110,
    data: '2000-04-09',
    cliente_id: 2,
    livro_id: 5,
  })
  await Venda.create<Venda>({
    valor: 90,
    data: '2000-02-11',
    cliente_id: 3,
    livro_id: 1,
  })
  await Venda.create<Venda>({
    valor: 60,
    data: '2000-04-15',
    cliente_id: 3,
    livro_id: 2,
  })
  await Venda.create<Venda>({
    valor: 45,
    data: '2000-05-14',
    cliente_id: 3,
    livro_id: 3,
  })
  await Venda.create<Venda>({
    valor: 130,
    data: '2000-06-12',
    cliente_id: 3,
    livro_id: 4,
  })
  await Venda.create<Venda>({
    valor: 110,
    data: '2000-09-19',
    cliente_id: 3,
    livro_id: 5,
  })
  await Venda.create<Venda>({
    valor: 70,
    data: '2000-12-20',
    cliente_id: 3,
    livro_id: 6,
  })
  await Venda.create<Venda>({
    valor: 110,
    data: '2000-11-02',
    cliente_id: 4,
    livro_id: 5,
  })
  await Venda.create<Venda>({
    valor: 70,
    data: '2000-11-09',
    cliente_id: 4,
    livro_id: 6,
  })
  await Venda.create<Venda>({
    valor: 45,
    data: '2000-12-14',
    cliente_id: 5,
    livro_id: 3,
  })
}

export { Venda, initVenda, associateVenda, createData }
