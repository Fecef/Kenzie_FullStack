import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1673978828053 implements MigrationInterface {
    name = 'InitialMigration1673978828053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_admin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_c143511e72fac735b8006051e55" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rating" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "recommendation" character varying NOT NULL, "note" integer NOT NULL, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_employer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "is_hired" boolean NOT NULL, "avatar_img" character varying NOT NULL, "gender" character varying, "deletedAt" TIMESTAMP, "addressId" uuid, CONSTRAINT "REL_65f0cb54567ad8ed59a3bacb98" UNIQUE ("addressId"), CONSTRAINT "PK_3f4b66f3b18d4c8d5bd4ff41b2e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "services" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_ba2d347a3168a296416c6c5ccb2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_hired" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "is_hired" boolean NOT NULL, "avatar_img" character varying NOT NULL, "gender" character varying, "deletedAt" TIMESTAMP, "addressId" uuid, CONSTRAINT "REL_8cad5d8c19d83e5f6997272c2c" UNIQUE ("addressId"), CONSTRAINT "PK_c152c63a5d9dee96c681992d539" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employer_proposal_hired" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying NOT NULL, "deletedAt" TIMESTAMP, "employerId" uuid, "hiredId" uuid, "ratingId" uuid, CONSTRAINT "REL_26052233e9db13f4c826790944" UNIQUE ("ratingId"), CONSTRAINT "PK_639510d0f500e0c7a96d5d2455b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_hired_services_services" ("userHiredId" uuid NOT NULL, "servicesId" uuid NOT NULL, CONSTRAINT "PK_a52a5f7e10dc89fee063a36f750" PRIMARY KEY ("userHiredId", "servicesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c8dd583a73e7961ee31836b586" ON "user_hired_services_services" ("userHiredId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cb70ae9672400063a054da864c" ON "user_hired_services_services" ("servicesId") `);
        await queryRunner.query(`ALTER TABLE "user_employer" ADD CONSTRAINT "FK_65f0cb54567ad8ed59a3bacb985" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_hired" ADD CONSTRAINT "FK_8cad5d8c19d83e5f6997272c2cc" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employer_proposal_hired" ADD CONSTRAINT "FK_59e19dc2525fb10ed6c5a49557e" FOREIGN KEY ("employerId") REFERENCES "user_employer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employer_proposal_hired" ADD CONSTRAINT "FK_4dbe4d3e13c0524ad4e15d4c545" FOREIGN KEY ("hiredId") REFERENCES "user_hired"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employer_proposal_hired" ADD CONSTRAINT "FK_26052233e9db13f4c8267909444" FOREIGN KEY ("ratingId") REFERENCES "rating"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_hired_services_services" ADD CONSTRAINT "FK_c8dd583a73e7961ee31836b5862" FOREIGN KEY ("userHiredId") REFERENCES "user_hired"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_hired_services_services" ADD CONSTRAINT "FK_cb70ae9672400063a054da864ce" FOREIGN KEY ("servicesId") REFERENCES "services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_hired_services_services" DROP CONSTRAINT "FK_cb70ae9672400063a054da864ce"`);
        await queryRunner.query(`ALTER TABLE "user_hired_services_services" DROP CONSTRAINT "FK_c8dd583a73e7961ee31836b5862"`);
        await queryRunner.query(`ALTER TABLE "employer_proposal_hired" DROP CONSTRAINT "FK_26052233e9db13f4c8267909444"`);
        await queryRunner.query(`ALTER TABLE "employer_proposal_hired" DROP CONSTRAINT "FK_4dbe4d3e13c0524ad4e15d4c545"`);
        await queryRunner.query(`ALTER TABLE "employer_proposal_hired" DROP CONSTRAINT "FK_59e19dc2525fb10ed6c5a49557e"`);
        await queryRunner.query(`ALTER TABLE "user_hired" DROP CONSTRAINT "FK_8cad5d8c19d83e5f6997272c2cc"`);
        await queryRunner.query(`ALTER TABLE "user_employer" DROP CONSTRAINT "FK_65f0cb54567ad8ed59a3bacb985"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cb70ae9672400063a054da864c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c8dd583a73e7961ee31836b586"`);
        await queryRunner.query(`DROP TABLE "user_hired_services_services"`);
        await queryRunner.query(`DROP TABLE "employer_proposal_hired"`);
        await queryRunner.query(`DROP TABLE "user_hired"`);
        await queryRunner.query(`DROP TABLE "services"`);
        await queryRunner.query(`DROP TABLE "user_employer"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "rating"`);
        await queryRunner.query(`DROP TABLE "user_admin"`);
    }

}
