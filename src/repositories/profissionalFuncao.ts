import db from '../database/connection';

export default class ProfissionalFuncaoRepository {
    async show(): Promise<any[]> {
        return await db('dbo.profissional_funcao').where({}).orderBy("funcao_id");
    }

    async findFuncao(funcao_id: number): Promise<any[]> {
        return await db('dbo.profissional_funcao').where({ funcao_id: funcao_id }).join('dbo.profissional', { 
            'dbo.profissional.profissional_id': 'dbo.profissional_funcao.profissional_id' 
        });;
    }
    async findProfissional(profissional_id: number): Promise<any[]> {
        return await db('dbo.profissional_funcao').where({ profissional_id: profissional_id }).first();
    }

    async findProfissionalFuncao(profissional_id: number, funcao_id: number): Promise<any[]> {
        return await db('dbo.profissional_funcao').where({ profissional_id: profissional_id, funcao_id: funcao_id }).first();
    }

    async deletar(funcao_id: number, profissional_id: number): Promise<any[]> {
        return await db('dbo.profissional_funcao').where({ funcao_id: funcao_id, profissional_id: profissional_id }).del();
    }
    async deletarPorProfissional(profissional_id: number): Promise<any[]> {
        return await db('dbo.profissional_funcao').where({ profissional_id: profissional_id }).del();
    }

    async create(funcao_id: number, profissional_id: number): Promise<any[]> {
        return await db('dbo.profissional_funcao').insert({
            funcao_id: funcao_id, profissional_id: profissional_id
        })
    }

    async update(funcao_id: number, profissional_id: number, funcao_idOld: number, profissional_idOld: number): Promise<any[]> {
        return await db('dbo.profissional_funcao')
            .where({ funcao_id: funcao_idOld, profissional_id: profissional_idOld })
            .update({
                funcao_id: funcao_id, 
                profissional_id: profissional_id
            })
    }
}