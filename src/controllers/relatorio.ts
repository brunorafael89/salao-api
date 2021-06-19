import { Request, Response } from 'express';
import AgendamentoRepository from '../repositories/agendamento';

const agendamentoRepository = new AgendamentoRepository();

class RelatorioController {
  public async relatorioServico(request: Request, response: Response): Promise<Response> {    
    try{
      const profissional_id = Number(request.params.profissional_id);
      const servicos_id = Number(request.params.servicos_id);
      const from = request.params.dataFrom
      const to = request.params.dataTo

      const relatorios = await agendamentoRepository.relatorioServico(servicos_id, profissional_id, from, to)
      
      return response.json(relatorios);
    } catch(err){
      console.log(err)
      return response.status(500).send(err);
    }
  }

  public async relatorioComissao(request: Request, response: Response): Promise<Response> {
    try{
      const profissional_id = request.body.profissional_id
      const from = request.body.data_agendamento
      const to = request.body.data_agendamento

      const relatorios = await agendamentoRepository.relatorioComissao(profissional_id, from, to)
      
      return response.json(relatorios);
    } catch(err){
      return response.status(500).send(err);
    }
  }
}

export default RelatorioController;