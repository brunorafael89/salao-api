import db from '../database/connection';
import tabelas from "../constants/tabelas";

export default class ClienteRepository {
    async show(): Promise<any[]> {
        return await db(tabelas.cliente).where({});
    }

    async findID(cliente_id: number): Promise<any[]> {
        return await db(tabelas.cliente).where({ cliente_id: cliente_id }).first();
    }

    async findEmail(email: string): Promise<any[]> {
        return await db(tabelas.cliente).where({ email }).first();
    }

    async findCpf(cpf: string): Promise<any[]> {
        return await db(tabelas.cliente).where({ cpf }).first();
    }

    async deletar(cliente_id: number): Promise<any[]> {
        return await db(tabelas.cliente).where({ cliente_id: cliente_id }).del();
    }

    async create(nome: string, cpf: string, data_nasc: string, sexo: string, telefone: string, email: string): Promise<any> {
        return await db(tabelas.cliente).insert({
            nome,
            cpf,
            data_nasc: new Date(data_nasc),
            sexo,
            telefone,
            email
        }).returning('cliente_id')
    }

    async update(cliente_id: number, nome: string, data_nasc: string, sexo: string, telefone: string, email: string): Promise<any[]> {
        return await db(tabelas.cliente)
            .where({ cliente_id: cliente_id })
            .update({
                nome,
                data_nasc: new Date(data_nasc),
                sexo,
                telefone,
                email 
            })
    }
}