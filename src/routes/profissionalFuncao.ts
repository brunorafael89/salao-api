import { Router } from 'express';
import ProfissionalFuncaoController from '../controllers/profissionalFuncao';
import ValidatorCreateProfissionalFuncao from '../validators/CreateProfissionalFuncao'

const profissionalFuncaoRouter = Router();

const profissionalFuncaoController = new ProfissionalFuncaoController();

profissionalFuncaoRouter.get('/', profissionalFuncaoController.show);
profissionalFuncaoRouter.get('/:profissional_id', profissionalFuncaoController.findID);
profissionalFuncaoRouter.delete('/:profissional_id', profissionalFuncaoController.deletar);
profissionalFuncaoRouter.post('/', ValidatorCreateProfissionalFuncao, profissionalFuncaoController.create);
profissionalFuncaoRouter.put('/:profissional_id', ValidatorCreateProfissionalFuncao, profissionalFuncaoController.update);

export default profissionalFuncaoRouter;