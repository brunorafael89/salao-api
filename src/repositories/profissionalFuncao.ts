import db from '../database/connection';
import tabelas from "../constants/tabelas";

export default class ProfissionalRepository {
    async show(): Promise<any[]> {
        return await db(tabelas.profissionalFuncao).where({});
    }

    async findProfissional(profissional_id: number): Promise<any[]> {
        return await db(tabelas.profissionalFuncao).where({ profissional_id: profissional_id }).first();
    }

    async findFuncao(funcao_id: number): Promise<any[]> {
        return await db(tabelas.profissionalFuncao).where({ funcao_id: funcao_id }).first();
    }

    async deletar(profissional_funcao_id: number): Promise<any[]> {
        return await db(tabelas.profissionalFuncao).where({ profissional_funcao_id: profissional_funcao_id }).del();
    }

    async create(profissional_id: number, funcao_id: number, profissional_funcao_id: number): Promise<any[]> {
        return await db(tabelas.profissionalFuncao).insert({
            profissional_id,
            funcao_id,
            profissional_funcao_id
        })
    }

    async update(profissional_id: number, funcao_id: number, profissional_funcao_id: number): Promise<any[]> {
        return await db(tabelas.profissionalFuncao)
            .where({ profissional_funcao_id: profissional_funcao_id })
            .update({
                profissional_id,
                funcao_id
        })
    }
}