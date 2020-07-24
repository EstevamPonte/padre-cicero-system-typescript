import { Schema, model, Document } from 'mongoose'

interface PedidoInterface extends Document {
  cliente?: string
  cpf?: string
  descricao?: string
  status?: string
  date?: string
}

const PedidoSchema = new Schema({
  cliente: String,
  cpf: String,
  descricao: String,
  status: { type: String, default: 'red' },
  date: String
})

export default model<PedidoInterface>('Pedido', PedidoSchema)
