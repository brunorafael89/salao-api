import { Router } from 'express';
import ProfissionalController from '../controllers/profissional';
import ValidatorCreateProfissional from '../validators/CreateProfissional'

const profissionalRouter = Router();

const profissionalController = new ProfissionalController();

profissionalRouter.get('/', profissionalController.show);
profissionalRouter.get('/:profissional_id', profissionalController.findID);
profissionalRouter.delete('/:profissional_id', profissionalController.deletar);
profissionalRouter.post('/', ValidatorCreateProfissional, profissionalController.create);
profissionalRouter.put('/:profissional_id', ValidatorCreateProfissional, profissionalController.update);

export default profissionalRouter;