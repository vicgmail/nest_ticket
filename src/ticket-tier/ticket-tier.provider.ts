import { DataSource } from 'typeorm';
import { TicketTier } from './entities/ticket-tier.entity';

export const TicketTierProviders = [{
    provide: 'TICKETTIER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TicketTier),
    inject: ['DATA_SOURCE'],
}];