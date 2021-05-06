import { Request, Response } from 'express';
import ProfissionalFuncaoRepository from '../repositories/profissionalFuncao';

const profissionalFuncaoRepository = new ProfissionalFuncaoRepository();

class ProfissionalController {
  public async show(request: Request, response: Response): Promise<Response> {
   const profissionalFuncao = await profissionalFuncaoRepository.show();
  
    return response.json(profissionalFuncao);
  }

  
  public async findID(request: Request, response: Response): Promise<Response> {
    const profissional_id: number = Number(request.params.profissional_id);
    const profissionalFuncao = await profissionalFuncaoRepository.findProfissional(profissional_id);
   
    return response.json(profissionalFuncao);
  }

  public async deletar(request: Request, response: Response): Promise<Response> {
    const profissional_id: number = Number(request.params.profissional_id);
    await profissionalFuncaoRepository.deletar(profissional_id);
   
    return response.send("Profissional excluído com sucesso!");
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { profissional_id, funcao_id, profissional_funcao_id } = request.body;

    const profissionalEncontrado = await profissionalFuncaoRepository.findProfissional(profissional_id);

    let msg: string[] = [];
    
    const funcaoEncontrada = await profissionalFuncaoRepository.findFuncao(funcao_id);
    
    if (profissionalEncontrado === profissional_id && funcaoEncontrada === funcao_id)
      msg.push("Profissional já cadastrado para esta função.")

    if(msg.length) return response.status(401).json({ erro: msg })

    await profissionalFuncaoRepository.create(profissional_id, funcao_id, profissional_funcao_id);
   
    return response.send("Profissional adicionado com sucesso!");
    
  }

  // public async update(request: Request, response: Response): Promise<Response> {
  //   const profissional_id : number = Number(request.params.profissional_id );
  //   const { nome, data_nasc, cpf, telefone, email} = request.body;
    
  //   await profissionalRepository.update(profissional_id , nome, data_nasc, cpf, telefone, email);
   
  //   return response.send("Profissional atualizado com sucesso!");
  // }

}

export default ProfissionalController;