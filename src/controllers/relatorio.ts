import { Request, Response } from 'express';

class RelatorioController {
  public async relatorioServico(request: Request, response: Response): Promise<Response> {
    try{
      const relatorios = [
        {
          nome: "Suellen Leite",
          data: new Date(),
          nome_servico: "Corte Longo",
          hora: "09:00",          
        },
        {
          nome: "Suellen Leite",
          data: new Date(),
          nome_servico: "Corte Curto",
          hora: "10:00",        
        },
      ]

      return response.json(relatorios);
    } catch(err){
      return response.status(500).send(err);
    }
  }

  public async relatorioComissao(request: Request, response: Response): Promise<Response> {
    try{
      const relatorios = [
        {
          nome: "Suellen Leite",
          data: new Date(),
          nome_servico: "Corte Longo",
          valor: "40,00",
          comissao: "50%",
          valor_comissao: "20,00"          
        },
        {
          nome: "Suellen Leite",
          data: new Date(),
          nome_servico: "Corte Curto",
          valor: "20,00",
          comissao: "50%",
          valor_comissao: "10,00"          
        },
      ]

      return response.json(relatorios);
    } catch(err){
      return response.status(500).send(err);
    }
  }

}

export default RelatorioController;