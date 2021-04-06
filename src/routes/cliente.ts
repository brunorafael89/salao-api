import { Router } from 'express';
import ClienteController from '../controllers/cliente';
import ValidatorCreateCliente from '../validators/CreateCliente'

const clienteRouter = Router();

const clienteController = new ClienteController();

clienteRouter.get('/', clienteController.show);
clienteRouter.get('/:cliente_id', clienteController.findID);
clienteRouter.delete('/:cliente_id', clienteController.deletar);
clienteRouter.post('/', ValidatorCreateCliente, clienteController.create);
clienteRouter.put('/:cliente_id', ValidatorCreateCliente, clienteController.update);

export default clienteRouter;