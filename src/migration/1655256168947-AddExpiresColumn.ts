import { MigrationInterface, QueryRunner } from "typeorm";

export class AddExpiresColumn1655256168947 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todo" ADD COLUMN "expires" DATE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "todo" DROP COLUMN "expires"`
    );
  }
}
