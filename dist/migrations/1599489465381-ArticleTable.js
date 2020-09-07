"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleTable1586653096209 = void 0;
const typeorm_1 = require("typeorm");
class ArticleTable1586653096209 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), false);
        await queryRunner.query(`INSERT INTO article (id, title, content) VALUES (1,  'test_title_1', 'test_content_1')`);
        await queryRunner.query(`INSERT INTO article (id, title, content) VALUES (2,  'test_title_2', 'test_content_2')`);
        await queryRunner.query(`INSERT INTO article (id, title, content) VALUES (3,  'test_title_3', 'test_content_3')`);
    }
    async down(queryRunner) {
        queryRunner.query(`DROP TABLE article`);
    }
}
exports.ArticleTable1586653096209 = ArticleTable1586653096209;
//# sourceMappingURL=1599489465381-ArticleTable.js.map