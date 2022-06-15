import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameToExpiredAt1655259018997 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "todo" RENAME COLUMN "expires" TO "expiredAt"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "todo" RENAME COLUMN "expiredAt" TO "expires"`);
  }
}
