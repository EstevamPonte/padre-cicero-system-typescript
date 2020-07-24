import { Request, Response } from 'express'
import Pedido from '../schemas/Pedido'

class PedidoController {
  public async index (req: Request, res: Response): Promise<Response> {
    const pedido = await Pedido.find()

    return res.json(pedido)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const pedido = await Pedido.create(req.body)

    return res.json(pedido)
  }

  public async show (req: Request, res: Response) {
    const pedido = await Pedido.findById(req.params.id)
    if (pedido) {
      return res.json(pedido)
    } else {
      return res.json({ Error: 'Não ha pedido com esse id' })
    }
  }

  public async destroy (req: Request, res: Response) {
    await Pedido.deleteOne({ _id: req.params.id })
      .then(pedido => {
        if (pedido.n !== 0) {
          return res.send({ message: 'Pedido deletado com sucesso' })
        } else {
          return res.send({ message: 'Não ha pedido com esse id' })
        }
      })
  }
}

export default new PedidoController()
