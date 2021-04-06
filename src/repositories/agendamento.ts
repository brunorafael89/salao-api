import db from '../database/connection';

export default class AgendamentoRepository {
    async show(): Promise<any[]> {
        return await db('dbo.agendamento').where({});
    }

    async findID(agendamento_id: number): Promise<any[]> {
        return await db('dbo.agendamento').where({ agendamento_id: agendamento_id }).first();
    }

    async deletar(agendamento_id: number): Promise<any[]> {
        return await db('dbo.agendamento').where({ agendamento_id: agendamento_id }).del();
    }

    async create(funcionario_id: number, cliente_id: number, data_atendimento: Date, inicio_atendimento: Date, total: number, data_agendamento: Date, horario_agendamento: Date): Promise<any[]> {
        return await db('dbo.agendamento').insert({
            funcionario_id,
            cliente_id,
            data_atendimento: new Date(data_atendimento),
            inicio_atendimento: new Date(inicio_atendimento),
            total,
            data_agendamento: new Date(data_agendamento),
            horario_agendamento: new Date(horario_agendamento),
        })
    }

    async update(agendamento_id: number,  funcionario_id: number, cliente_id: number, data_atendimento: Date, inicio_atendimento: Date, total: number, data_agendamento: Date, horario_agendamento: Date): Promise<any[]> {
        return await db('dbo.agendamento')
            .where({ agendamento_id: agendamento_id })
            .update({
                funcionario_id,
                cliente_id,
                data_atendimento: new Date(data_atendimento),
                inicio_atendimento,
                total,
                data_agendamento,
                horario_agendamento
            })
    }
}