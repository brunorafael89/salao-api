import db from '../database/connection';
import tabelas from "../constants/tabelas";

export default class AgendamentoRepository {
    async show(cliente_id: Number): Promise<any[]> {
        return await db(tabelas.agendamento).where({ cliente_id: cliente_id})
        .join('servico_agendamento', {
            'servico_agendamento.agendamento_id': 'agendamento.agendamento_id'
        })
        .join(tabelas.servicos, {
            'tabelas.servico_agendamento.servicos_id': 'tabelas.servicos.servicos_id'
        })
        .join(tabelas.profissional, { 
            'tabelas.profissional.profissional_id': 'tabelas.servico_agendamento.profissional_id' 
        });
    }

    async getAgendamentoDataCliente(cliente_id: Number, data_atendimento: string): Promise<any[]> {
        return await db(tabelas.agendamento).where({ cliente_id: cliente_id, data_atendimento: data_atendimento})
        .leftJoin('servico_agendamento', {
            'servico_agendamento.agendamento_id': 'agendamento.agendamento_id'
        })
        .join('servicos', {
            'servico_agendamento.servicos_id': 'servicos.servicos_id'
        })
        .join('profissional', { 
            'profissional.profissional_id': 'servico_agendamento.profissional_id' 
        });
    }

    async getAgendamentoProfissional(profissional_id: Number, data_atendimento: string): Promise<any[]> {
        return await db(tabelas.servico_agendamento).where({ profissional_id: profissional_id })
        .join('agendamento', {
            'servico_agendamento.agendamento_id': 'agendamento.agendamento_id'
        })
        .where({ data_atendimento: data_atendimento })
        .join('servicos', {
            'servico_agendamento.servicos_id': 'servicos.servicos_id'
        })
        .join('dbo.cliente', {
            'dbo.agendamento.cliente_id': 'dbo.cliente.cliente_id'
        })
        //.orderBy("horario_agendamento")
        .select(
            'dbo.cliente.cliente_id',
            'dbo.cliente.nome as nomeCliente',
            'dbo.agendamento.data_atendimento',
            'dbo.agendamento.horario_agendamento',
            'dbo.agendamento.agendamento_id',
            'dbo.servico_agendamento.agendamento_id', 
            'dbo.servicos.servicos_id',
            'dbo.servicos.comissao',
            'dbo.servicos.valor',
            'dbo.servicos.nome as nomeServico',
            'dbo.servicos.tempo_servico',
        );
    }

    async getAgendamentoData(data_atendimento: string): Promise<any[]> {
        return await db('dbo.agendamento').where({ data_atendimento: data_atendimento })
        .join('dbo.servico_agendamento', {
            'dbo.servico_agendamento.agendamento_id': 'dbo.agendamento.agendamento_id'
        })
        .join('dbo.servicos', {
            'dbo.servico_agendamento.servicos_id': 'dbo.servicos.servicos_id'
        })
        .join('dbo.profissional', { 
            'dbo.profissional.profissional_id': 'dbo.servico_agendamento.profissional_id' 
        })
        .join('dbo.cliente', {
            'dbo.agendamento.cliente_id': 'dbo.cliente.cliente_id'
        })
        //.orderBy("horario_agendamento")
        .select(
            'dbo.cliente.cliente_id',
            'dbo.cliente.nome as nomeCliente',
            'dbo.agendamento.data_atendimento',
            'dbo.agendamento.horario_agendamento',
            'dbo.agendamento.agendamento_id',
            'dbo.servico_agendamento.agendamento_id', 
            'dbo.servicos.servicos_id',
            'dbo.servicos.valor',
            'dbo.servicos.nome as nomeServico',
            'dbo.profissional.profissional_id',
            'dbo.profissional.nome as nomeProfissional',
        );
    }

    async findID(agendamento_id: number): Promise<any[]> {
        return await db(tabelas.agendamento).where({ agendamento_id: agendamento_id }).first();
    }

    async deletar(agendamento_id: number): Promise<any[]> {
        return await db(tabelas.agendamento).where({ agendamento_id: agendamento_id }).del();
    }

    async create(funcionario_id: number, cliente_id: number, data_atendimento: Date, inicio_atendimento: Date, total: number, data_agendamento: Date, horario_agendamento: Date): Promise<any> {
        return await db(tabelas.agendamento).insert({
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
        return await db(tabelas.agendamento)
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