export default class CreateTableBillProduct {

    async up(schema) {
        await schema.createTable('bill_products', table => {
            table.increments();
            table.integer('bill_id');
            table.integer('product_id');
            table.integer('quantity');
            table.integer('price');
            table.string('name');
            table.string('size');
            table.string('color');
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    async down(schema) {
        await schema.dropTable('bill_products');
    }
}
