import { Request, Response } from 'express';
import ProfissionalRepository from '../repositories/profissional';

const profissionalRepository = new ProfissionalRepository();

class ProfissionalController {
  public async show(request: Request, response: Response): Promise<Response> {
   const profissional = await profissionalRepository.show();
  
    return response.json(profissional);
  }

  
  public async findID(request: Request, response: Response): Promise<Response> {
    const cliente_id: number = Number(request.params.cliente_id);
    const profissional = await profissionalRepository.findID(cliente_id);
   
    return response.json(profissional);
  }

  public async deletar(request: Request, response: Response): Promise<Response> {
    const cliente_id: number = Number(request.params.cliente_id);
    await profissionalRepository.deletar(cliente_id);
   
    return response.send("Profissional excluído com sucesso!");
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, data_nasc, cpf, telefone, email } = request.body;

    const profissionalEncontrado = await profissionalRepository.findEmail(email);

    let msg: string[] = [];

    if (profissionalEncontrado)
      msg.push("cadastrado não pode ser realizado porque o email já existe.")
    
    const cpfEncontrado = await profissionalRepository.findCpf(cpf);

    if (cpfEncontrado)
      msg.push("cadastrado não pode ser realizado porque o CPF já existe.")
    

    if(msg.length) return response.status(401).json({ erro: msg })

    await profissionalRepository.create(nome, data_nasc, cpf, telefone, email);
   
    return response.send("Profissional adicionado com sucesso!");
    
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const profissional_id : number = Number(request.params.profissional_id );
    const { nome, data_nasc, cpf, telefone, email} = request.body;
    
    await profissionalRepository.update(profissional_id , nome, data_nasc, cpf, telefone, email);
   
    return response.send("Profissional atualizado com sucesso!");
  }

}

export default ProfissionalController;