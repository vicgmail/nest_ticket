import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TicketTier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal', { scale: 2 })
    service_fee: number;

    @Column('decimal', { scale: 2 })
    buyer_price: number;

    @Column('decimal', { scale: 2 })
    promoter_receives_price: number;
}
