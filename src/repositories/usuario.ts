import db from '../database/connection';

export default class UsuarioRepository {
    async show(): Promise<any[]> {
        return await db('dbo.usuario').where({});
    }

    async findID(usuario_id: number): Promise<any[]> {
        return await db('dbo.usuario').where({ usuario_id: usuario_id }).first();
    }

    async findLogin(login: string): Promise<any> {
        return await db('dbo.usuario').where({ login }).first();
    }

    async deletar(usuario_id: number): Promise<any[]> {
        return await db('dbo.usuario').where({ usuario_id: usuario_id }).del();
    }

    async create( perfil_acesso_id: number, cliente_id: number,login: string, senha: string): Promise<any[]> {
        return await db('dbo.usuario').insert({
            perfil_acesso_id,
            cliente_id,
            login,
            senha
        })
    }

    async update(usuario_id: number, perfil_acesso_id: number, cliente_id: number, funcionario_id: number, profissional_id: number, login: string, senha : string): Promise<any[]> {
        return await db('dbo.usuario')
            .where({ usuario_id: usuario_id })
            .update({
                perfil_acesso_id,
                cliente_id,
                funcionario_id,
                profissional_id,
                login,
                senha 
        })
    }
}