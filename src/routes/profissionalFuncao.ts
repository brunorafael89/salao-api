import { Router } from 'express';
import ProfissionalFuncaoController from '../controllers/profissionalFuncao';
import ValidatorCreateProfissionalFuncao from '../validators/CreateProfissionalFuncao'
// import ValidatorCreateProfissionalFuncao from '../validators/UpdateProfissionalFuncao'

const profissionalFuncaoRouter = Router();

const profissionalFuncaoController = new ProfissionalFuncaoController();

profissionalFuncaoRouter.get('/', profissionalFuncaoController.show);
profissionalFuncaoRouter.get('/:funcao_id', profissionalFuncaoController.findFuncao);
profissionalFuncaoRouter.get('/:profissional_id', profissionalFuncaoController.findProfissional);
profissionalFuncaoRouter.delete('/:profissional_id/:funcao_id', profissionalFuncaoController.deletar);
profissionalFuncaoRouter.post('/', ValidatorCreateProfissionalFuncao, profissionalFuncaoController.create);
profissionalFuncaoRouter.put('/:profissional_id/:funcao_id', ValidatorCreateProfissionalFuncao, profissionalFuncaoController.update);

export default profissionalFuncaoRouter;
// ValidatorUpdateProfissionalFuncao
