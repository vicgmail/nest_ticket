import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1728384226582 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "ticket_tier" ("id" SERIAL NOT NULL, "service_fee" numeric NOT NULL, "buyer_price" numeric NOT NULL, "promoter_receives_price" numeric NOT NULL, CONSTRAINT "PK_3a637a1e713d04b2ed80fc5d78d" PRIMARY KEY ("id"))`,
        );      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE "ticket_tier"`,
        );      
    }


}
