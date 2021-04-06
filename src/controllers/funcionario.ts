import { Request, Response } from 'express';
import FuncionarioRepository from '../repositories/funcionario';

const funcionarioRepository = new FuncionarioRepository();

class FuncionarioController {
  public async show(request: Request, response: Response): Promise<Response> {
   const funcionarios = await funcionarioRepository.show();
  
    return response.json(funcionarios);
  }

  public async findID(request: Request, response: Response): Promise<Response> {
    const funcionario_id: number = Number(request.params.funcionario_id);
    const funcao = await funcionarioRepository.findID(funcionario_id);
   
     return response.json(funcao);
   }

   public async deletar(request: Request, response: Response): Promise<Response> {
    const funcionario_id: number = Number(request.params.funcionario_id);
    await funcionarioRepository.deletar(funcionario_id);
   
    return response.send("Funcionário excluído com sucesso!");
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { cargo, nome, cpf, data_nasc, telefone, email } = request.body;

    const clienteEncontrado = await funcionarioRepository.findEmail(email);

    let msg: string[] = [];

    if (clienteEncontrado)
      msg.push("O cadastro não pode ser realizado porque o email já existe.")
    
    const cpfEncontrado = await funcionarioRepository.findCpf(cpf);

    if (cpfEncontrado)
      msg.push("O cadastro não pode ser realizado porque o CPF já existe.")
    

    if(msg.length) return response.status(401).json({ erro: msg })

    await funcionarioRepository.create(cargo, nome, cpf, data_nasc, telefone, email);
   
    return response.send("Funcionário adicionado com sucesso!");
    
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const funcionario_id: number = Number(request.params.funcionario_id);
    const { cargo, nome, cpf, data_nasc, telefone, email} = request.body;
    
    await funcionarioRepository.update(funcionario_id, cargo, nome, cpf, data_nasc, telefone, email);
   
    return response.send("Funcionário atualizado com sucesso!");
  }

}

export default FuncionarioController;