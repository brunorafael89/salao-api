import { Router } from 'express';
import AgendamentoController from '../controllers/agendamento';
import ValidatorCreateAgendamento from '../validators/CreateAgendamento';

const agendamentoRouter = Router();

const agendamentoController = new AgendamentoController();

agendamentoRouter.get('/', agendamentoController.show);
agendamentoRouter.get('/:agendamento_id', agendamentoController.findID);
agendamentoRouter.delete('/:agendamento_id', agendamentoController.deletar);
agendamentoRouter.post('/', ValidatorCreateAgendamento, agendamentoController.create);
agendamentoRouter.put('/:agendamento_id', ValidatorCreateAgendamento, agendamentoController.update);

export default agendamentoRouter;