import db from '../database/connection';

export default class PerfilAcessoRepository {
    async show(): Promise<any[]> {
        return await db('dbo.perfil_acesso').where({});
    }

    async findID(perfil_acesso_id: number): Promise<any[]> {
        return await db('dbo.perfil_acesso').where({ perfil_acesso_id: perfil_acesso_id }).first();
    }

    async deletar(perfil_acesso_id: number): Promise<any[]> {
        return await db('dbo.perfil_acesso').where({ perfil_acesso_id: perfil_acesso_id }).del();
    }
}