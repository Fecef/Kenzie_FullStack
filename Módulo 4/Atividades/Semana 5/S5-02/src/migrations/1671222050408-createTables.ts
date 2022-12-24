import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1671222050408 implements MigrationInterface {
    name = 'createTables1671222050408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(40) NOT NULL, "email" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_communities" ("id" SERIAL NOT NULL, "memberSince" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "communityId" integer, CONSTRAINT "PK_95d9944e3f0b5de4a4a86151e81" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "communities" ("id" SERIAL NOT NULL, "name" character varying(40) NOT NULL, "description" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fea1fe83c86ccde9d0a089e7ea2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_communities" ADD CONSTRAINT "FK_6831f79b5665664987f384e9207" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_communities" ADD CONSTRAINT "FK_238a4a12b50467986076d287554" FOREIGN KEY ("communityId") REFERENCES "communities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_communities" DROP CONSTRAINT "FK_238a4a12b50467986076d287554"`);
        await queryRunner.query(`ALTER TABLE "users_communities" DROP CONSTRAINT "FK_6831f79b5665664987f384e9207"`);
        await queryRunner.query(`DROP TABLE "communities"`);
        await queryRunner.query(`DROP TABLE "users_communities"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
