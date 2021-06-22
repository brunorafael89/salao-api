import { Router } from 'express';
import ClienteController from '../controllers/cliente';
import ValidatorCreateCliente from '../validators/CreateCliente'
import ValidatorUpdateCliente from '../validators/UpdateCliente'

const clienteRouter = Router();

const clienteController = new ClienteController();

clienteRouter.get('/', clienteController.show);
clienteRouter.get('/:cliente_id', clienteController.findID);
clienteRouter.get('/desativar/:cliente_id', clienteController.desativar);
clienteRouter.delete('/:cliente_id', clienteController.deletar);
clienteRouter.post('/', ValidatorCreateCliente, clienteController.create);
clienteRouter.put('/:cliente_id', ValidatorUpdateCliente, clienteController.update);

export default clienteRouter;