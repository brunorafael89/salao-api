import { Request, Response } from 'express';
import { hash } from 'bcryptjs';

import ClienteRepository from '../repositories/cliente';
import UsuarioRepository from '../repositories/usuario';

const clienteRepository = new ClienteRepository();
const usuarioRepository = new UsuarioRepository();

class ClienteController {
  public async show(request: Request, response: Response): Promise<Response> {
   const clientes = await clienteRepository.show();
  
    return response.json(clientes);
  }

  
  public async findID(request: Request, response: Response): Promise<Response> {
    const cliente_id: number = Number(request.params.cliente_id);
    const clientes = await clienteRepository.findID(cliente_id);
   
    return response.json(clientes);
  }

  public async deletar(request: Request, response: Response): Promise<Response> {
    const cliente_id: number = Number(request.params.cliente_id);
    await clienteRepository.deletar(cliente_id);
   
    return response.send("Cliente excluído com sucesso!");
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, cpf, data_nasc, sexo, telefone, email, login, senha } = request.body;

    const clienteEncontrado = await clienteRepository.findEmail(email);

    let msg: string[] = [];

    if (clienteEncontrado)
      msg.push("O cliente já possui cadastro no Sistema.")
    
    const cpfEncontrado = await clienteRepository.findCpf(cpf);

    if (cpfEncontrado)
      msg.push("cadastro não pode ser realizado porque o CPF já existe.")
    

    if(msg.length) return response.status(401).json({ erro: msg })

    const retorno = await clienteRepository.create(nome, cpf, data_nasc, sexo, telefone, email);
    const cliente_id = retorno[0];

    const newSenha = await hash(senha, 8);

    await usuarioRepository.create(1, cliente_id, login, newSenha); 
   
    return response.send("Cliente adicionado com sucesso!");
    
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const cliente_id: number = Number(request.params.cliente_id);
    const { nome, cpf, data_nasc, sexo, telefone, email} = request.body;
    
    await clienteRepository.update(cliente_id, nome, cpf, data_nasc, sexo, telefone, email);
   
    return response.send("Cliente atualizada com sucesso!");
  }

}

export default ClienteController;