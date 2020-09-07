import { MigrationInterface, QueryRunner, Table } from 'typeorm';
export class ArticleTable1586653096209 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'article',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'content',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      false,
    );
    await queryRunner.query(`INSERT INTO article (id, title, content) VALUES (1,  'test_title_1', 'test_content_1')`);
    await queryRunner.query(`INSERT INTO article (id, title, content) VALUES (2,  'test_title_2', 'test_content_2')`);
    await queryRunner.query(`INSERT INTO article (id, title, content) VALUES (3,  'test_title_3', 'test_content_3')`);
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`DROP TABLE article`);
  }
}