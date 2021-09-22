import { Router } from 'express';
import ServicosController from '../controllers/servicos';
import ValidatorCreateServicos from '../validators/CreateServicos'

const servicosRouter = Router();

const servicosController = new ServicosController();

servicosRouter.get('/', servicosController.show);
servicosRouter.get('/:servicos_id', servicosController.findID);
<<<<<<< HEAD
// servicosRouter.get('/nomeServico/:nome', servicosController.findNome);
servicosRouter.get('/nomeServico/:nome', servicosController.findPesquisa);
=======
servicosRouter.get('/nomeServico/:nome', servicosController.findNome);
>>>>>>> c2f0046a8ecffd4818d99116f9b6bc83aba20ff4
servicosRouter.delete('/:servicos_id', servicosController.deletar);
servicosRouter.post('/', ValidatorCreateServicos, servicosController.create);
servicosRouter.put('/:servicos_id', ValidatorCreateServicos, servicosController.update);

export default servicosRouter;