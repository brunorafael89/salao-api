import db from '../database/connection';

export default class ProfissionalRepository {
    async show(): Promise<any[]> {
        return await db('dbo.profissional').where({});
    }

    async findID(profissional_id: number): Promise<any[]> {
        return await db('dbo.profissional').where({ profissional_id: profissional_id }).first();
    }

    async findEmail(email: string): Promise<any[]> {
        return await db('dbo.profissional').where({ email }).first();
    }

    async findCpf(cpf: string): Promise<any[]> {
        return await db('dbo.profissional').where({ cpf }).first();
    }

    async deletar(profissional_id: number): Promise<any[]> {
        return await db('dbo.profissional').where({ profissional_id: profissional_id }).del();
    }

    async create(nome: string, data_nasc: string, cpf: string, telefone: string, email: string): Promise<any[]> {
        return await db('dbo.profissional').insert({
            nome,
            data_nasc: new Date(data_nasc),
            cpf,
            telefone,
            email
        })
    }

    async update(profissional_id: number, nome: string, data_nasc: string, telefone: string, email: string): Promise<any[]> {
        return await db('dbo.profissional')
            .where({ profissional_id: profissional_id })
            .update({
                nome,
                data_nasc: new Date(data_nasc),
                telefone,
                email 
        })
    }
}