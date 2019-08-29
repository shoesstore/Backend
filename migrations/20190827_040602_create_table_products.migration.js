export default class CreateTableProducts {

    async up(schema) {
        await schema.createTable('products', table => {
            table.increments();
            table.string('size');
            table.string('color');
            table.integer('model_id');
            table.integer('quantity');
            table.integer('unit_price');
            table.timestamps();
            table.timestamp('deleted_at');
        });

    }

    async down(schema) {
        await schema.dropTable('products');
    }
}
