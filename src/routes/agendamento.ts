import { Router } from 'express';
import AgendamentoController from '../controllers/agendamento';
import ValidatorCreateAgendamento from '../validators/CreateAgendamento';

const agendamentoRouter = Router();

const agendamentoController = new AgendamentoController();

agendamentoRouter.get('/:cliente_id', agendamentoController.show);
agendamentoRouter.get('/getAgendamentoCliente/:cliente_id/:data_atendimento', agendamentoController.getAgendamentoDataCliente);
//agendamentoRouter.get('/:agendamento_id', agendamentoController.findID);
agendamentoRouter.get('/getAgendamentoProfissional/:profissional_id/:data_atendimento', agendamentoController.getAgendamentoProfissional);
agendamentoRouter.get('/getAgendamentoData/:data_atendimento', agendamentoController.getAgendamentoData);
// agendamentoRouter.get('/profissional/:profissional_id/:data_atendimento', agendamentoController.getAgendamentoProfissional);
agendamentoRouter.delete('/:agendamento_id', agendamentoController.deletar);
agendamentoRouter.post('/', ValidatorCreateAgendamento, agendamentoController.create);
agendamentoRouter.put('/:agendamento_id', ValidatorCreateAgendamento, agendamentoController.update);

export default agendamentoRouter;