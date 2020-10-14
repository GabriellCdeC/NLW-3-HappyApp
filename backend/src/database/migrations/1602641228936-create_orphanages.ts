import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602641228936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //REALIZAR ALTERAÇÕES NO BANCO DE DADOS

        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',                    
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //DESFAZ AS ALTERAÇÕES O QUE FOI FEITO NO UP

        await queryRunner.dropTable('orphanages')
    }

}
