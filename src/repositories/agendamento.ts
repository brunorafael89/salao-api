import db from '../database/connection';

export default class AgendamentoRepository {
    async show(): Promise<any[]> {
        return await db('dbo.agendamento').where({ cliente_id: 1})
        .join('dbo.servico_agendamento', {
            'dbo.servico_agendamento.agendamento_id': 'dbo.agendamento.agendamento_id'
        })
        .join('dbo.servicos', {
            'dbo.servico_agendamento.servicos_id': 'dbo.servicos.servicos_id'
        })
        .join('dbo.profissional', { 
            'dbo.profissional.profissional_id': 'dbo.servico_agendamento.profissional_id' 
        });
    }

    async findID(agendamento_id: number): Promise<any[]> {
        return await db('dbo.agendamento').where({ agendamento_id: agendamento_id }).first();
    }

    async deletar(agendamento_id: number): Promise<any[]> {
        return await db('dbo.agendamento').where({ agendamento_id: agendamento_id }).del();
    }

    async create(funcionario_id: number, cliente_id: number, data_atendimento: Date, inicio_atendimento: Date, total: number, data_agendamento: Date, horario_agendamento: Date): Promise<any> {
        return await db('dbo.agendamento').insert({
            //funcionario_id,
            cliente_id,
            data_atendimento: new Date(data_atendimento),
            //inicio_atendimento: new Date(inicio_atendimento),
            total,
            data_agendamento: new Date(data_agendamento),
            horario_agendamento: horario_agendamento,
        //})
        }).returning('agendamento_id')
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