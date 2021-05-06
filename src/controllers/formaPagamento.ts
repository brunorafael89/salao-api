import { Request, Response } from 'express';
import FormaPagamentoRepository from '../repositories/formaPagamento';

const formaPagamentoRepository = new FormaPagamentoRepository();

class FormaPagamentoController {
  public async show(request: Request, response: Response): Promise<Response> {
    try{
      const formaPagamento = await formaPagamentoRepository.show();
  
    return response.json(formaPagamento);
    } catch(err){
      return response.status(500).send(err);
    }
   
  }

  
  public async findID(request: Request, response: Response): Promise<Response> {
    const formaPagamento_id: number = Number(request.params.formaPagamento_id);
    const formaPagamento = await formaPagamentoRepository.findID(formaPagamento_id);
   
    return response.json(formaPagamento);
  }

  public async deletar(request: Request, response: Response): Promise<Response> {
    try{
      const formaPagamento_id: number = Number(request.params.formaPagamento_id);
      await formaPagamentoRepository.deletar(formaPagamento_id);
    
      return response.send("Forma de pagamento excluído com sucesso!");
    } catch(err){
      return response.status(500).send(err);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const formaPagamento = request.body.formaPagamento;
    
    await formaPagamentoRepository.create(formaPagamento);
   
    return response.send("Forma de pagamento adicionado com sucesso!");
  }

  async update(request: Request, response: Response): Promise<Response> {
    const formaPagamento_id: number = Number(request.params.formaPagamento_id);
    const formaPagamento = request.body.formaPagamento;
    
    await formaPagamentoRepository.update(formaPagamento_id, formaPagamento);
   
    return response.send("Forma de pagamento atualizado com sucesso!");
  }

}

export default FormaPagamentoController;