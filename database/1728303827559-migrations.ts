import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1728303827559 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "setting" ("id" SERIAL NOT NULL, "service_fee_rate" integer NOT NULL, "minimum_fee" numeric NOT NULL, CONSTRAINT "PK_fcb21187dc6094e24a48f677bed" PRIMARY KEY ("id"))`,
        );      
        await queryRunner.query(
            `INSERT INTO "setting" ("service_fee_rate", "minimum_fee") VALUES (10, 10)`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE "setting"`,
        );      
    }

}
