import { Router } from 'express'
import PedidoController from './controller/PedidoController'

const routes = Router()

routes.get('/pedido', (PedidoController.index))
routes.post('/pedido', (PedidoController.create))
routes.get('/pedido/:id', (PedidoController.show))
routes.delete('/pedido/:id', (PedidoController.destroy))

export default routes
