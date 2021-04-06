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
    const forma_pagamento_id: number = Number(request.params.forma_pagamento_id);
    const formaPagamento = await formaPagamentoRepository.findID(forma_pagamento_id);
   
    return response.json(formaPagamento);
  }

  public async deletar(request: Request, response: Response): Promise<Response> {
    try{
      const forma_pagamento_id: number = Number(request.params.forma_pagamento_id);
      await formaPagamentoRepository.deletar(forma_pagamento_id);
    
      return response.send("Forma de pagamento excluído com sucesso!");
    } catch(err){
      return response.status(500).send(err);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const forma_pagamento = request.body.forma_pagamento;
    
    await formaPagamentoRepository.create(forma_pagamento);
   
    return response.send("Forma de pagamento adicionada com sucesso!");
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const forma_pagamento_id: number = Number(request.params.forma_pagamento_id);
    const forma_pagamento = request.body.forma_pagamento;
    
    await formaPagamentoRepository.update(forma_pagamento_id, forma_pagamento);
   
    return response.send("Forma de pagamento atualizada com sucesso!");
  }

}

export default FormaPagamentoController;