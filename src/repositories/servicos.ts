import db from '../database/connection';

export default class ServicosRepository {
    async show(): Promise<any[]> {
        return await db('dbo.servicos').where({});
    }

    async findID(servicos_id: number): Promise<any[]> {
        return await db('dbo.servicos').where({ servicos_id: servicos_id }).first();
    }

    async findNome(nome: string): Promise<any[]> {
        return await db('dbo.servicos').where({ nome }).first();
    }

    async deletar(servicos_id: number): Promise<any[]> {
        return await db('dbo.servicos').where({ servicos_id: servicos_id }).del();
    }

    async create(nome: string, valor: number, comissao: number, tempo_servico: string, funcao_id:string): Promise<any[]> {
        return await db('dbo.servicos').insert({
            nome, 
            valor, 
            comissao, 
            tempo_servico,
            funcao_id
        })
    }

    async update(servicos_id: number, funcao_id: number, nome: string, valor: number, comissao: number, tempo_servico: string): Promise<any[]> {
        return await db('dbo.servicos')
            .where({ servicos_id: servicos_id })
            .update({
                funcao_id,
                nome, 
                valor, 
                comissao, 
                tempo_servico 
        })
    }
}