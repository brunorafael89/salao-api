import db from '../database/connection';
import tabelas from "../constants/tabelas";
import { date } from 'yup';

export default class AgendamentoRepository {
    async show(cliente_id: Number): Promise<any[]> {
        return await db(tabelas.agendamento).where({ cliente_id: cliente_id})
        .join('servico_agendamento', {
            'servico_agendamento.agendamento_id': 'agendamento.agendamento_id'
        })
        .join('servicos', {
            'servico_agendamento.servicos_id': 'servicos.servicos_id'
        })
        .join('profissional', { 
            'profissional.profissional_id': 'servico_agendamento.profissional_id' 
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
        .join('cliente', {
            'agendamento.cliente_id': 'cliente.cliente_id'
        })
        //.orderBy("horario_agendamento")
        .select(
            'cliente.cliente_id',
            'cliente.nome as nomeCliente',
            'agendamento.data_atendimento',
            'agendamento.horario_agendamento',
            'agendamento.agendamento_id',
            'servico_agendamento.agendamento_id', 
            'servicos.servicos_id',
            'servicos.comissao',
            'servicos.valor',
            'servicos.nome as nomeServico',
            'servicos.tempo_servico',
        );
    }

    async getAgendamentoData(data_atendimento: string): Promise<any[]> {
        return await db(tabelas.agendamento).where({ data_atendimento: data_atendimento })
        .join('servico_agendamento', {
            'servico_agendamento.agendamento_id': 'agendamento.agendamento_id'
        })
        .join('servicos', {
            'servico_agendamento.servicos_id': 'servicos.servicos_id'
        })
        .join('profissional', { 
            'profissional.profissional_id': 'servico_agendamento.profissional_id' 
        })
        .join('cliente', {
            'agendamento.cliente_id': 'cliente.cliente_id'
        })
        //.orderBy("horario_agendamento")
        .select(
            'cliente.cliente_id',
            'cliente.nome as nomeCliente',
            'agendamento.data_atendimento',
            'agendamento.horario_agendamento',
            'agendamento.agendamento_id',
            'servico_agendamento.agendamento_id', 
            'servicos.servicos_id',
            'servicos.valor',
            'servicos.nome as nomeServico',
            'profissional.profissional_id',
            'profissional.nome as nomeProfissional',
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

    async relatorioServico(profissional_id: number, servico_id: number, from: Date, to: Date): Promise<any[]> {
        return await db(tabelas.agendamento)
        .select(
            'profissional.nome as nome_profissional',
            'agendamento.data_agendamento',
            'agendamento.horario_agendamento',
            'servicos.nome as nome_servico',
        )
        .join('servico_agendamento', {
            'servico_agendamento.agendamento_id': 'agendamento.agendamento_id'
        })
        .join('servicos', {
            'servico_agendamento.servicos_id': 'servicos.servicos_id'
        })
        .join('profissional', { 
            'profissional.profissional_id': 'servico_agendamento.profissional_id' 
        })
        .where({ servico_id: servico_id, profissional_id: profissional_id }).andWhereBetween('data_agendamento', [from, to]);
        //.orderBy("horario_agendamento")
    }
}