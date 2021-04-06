import db from '../database/connection';

export default class PagamentoRepository {
    async show(): Promise<any[]> {
        return await db('dbo.pagamento').where({});
    }

    async findID(pagamento_id: number): Promise<any[]> {
        return await db('dbo.pagamento').where({ pagamento_id: pagamento_id }).first();
    }

    async deletar(pagamento_id: number): Promise<any[]> {
        return await db('dbo.pagamento').where({ pagamento_id: pagamento_id }).del();
    }

    async create(agendamento_id: number, forma_pagamento_id: number, total: number, autorizado: boolean): Promise<any[]> {
        return await db('dbo.pagamento').insert({
            agendamento_id, 
            forma_pagamento_id, 
            total, 
            autorizado
        })
    }

    async update(pagamento_id: number, agendamento_id: number, forma_pagamento_id: number, total: number, autorizado: boolean): Promise<any[]> {
        return await db('dbo.pagamento')
            .where({ pagamento_id: pagamento_id })
            .update({
                pagamento_id,
                agendamento_id, 
                forma_pagamento_id, 
                total, 
                autorizado
            })
    }
}