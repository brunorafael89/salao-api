import { Request, Response } from 'express';
import AgendamentoRepository from '../repositories/agendamento';

const agendamentoRepository = new AgendamentoRepository();

class AgendamentoController {
  public async show(request: Request, response: Response): Promise<Response> {
   const agendamento = await agendamentoRepository.show();
  

    return response.json(agendamento);
  }

  
  public async findID(request: Request, response: Response): Promise<Response> {
    const agendamento_id: number = Number(request.params.agendamento_id);
    const agendamento = await agendamentoRepository.findID(agendamento_id);
   
    return response.json(agendamento);
  }

  public async deletar(request: Request, response: Response): Promise<Response> {
    const agendamento_id: number = Number(request.params.agendamento_id);
    await agendamentoRepository.deletar(agendamento_id);
   
    return response.send("Agendamento excluído com sucesso!");
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { agendamento_id, funcionario_id, cliente_id, data_atendimento, inicio_atendimento, total, data_agendamento, horario_agendamento } = request.body;

    // const agendamentoEncontrado = await agendamentoRepository.findID(agendamento_id);

    // let msg: string[] = [];

    // if (agendamentoEncontrado)
    //   msg.push("Agendamento não pode ser realizado porque já existe agendamento para este horário.")

    // if(msg.length) return response.status(401).json({ erro: msg })

    await agendamentoRepository.create(funcionario_id, cliente_id, data_atendimento, inicio_atendimento, total, data_agendamento, horario_agendamento);
   
    return response.send("Agendamento adicionado com sucesso!");
    
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const agendamento_id: number = Number(request.params.agendamento_id);
    const {funcionario_id, cliente_id, data_atendimento, inicio_atendimento, total, data_agendamento, horario_agendamento} = request.body;
    
    await agendamentoRepository.update(agendamento_id, funcionario_id, cliente_id, data_atendimento, inicio_atendimento, total, data_agendamento, horario_agendamento);
   
    return response.send("Agendamento atualizado com sucesso!");
  }
}

export default AgendamentoController;