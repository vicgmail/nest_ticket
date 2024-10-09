import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Setting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    service_fee_rate: number;

    @Column('decimal', { scale: 2 })
    minimum_fee: number;
}
