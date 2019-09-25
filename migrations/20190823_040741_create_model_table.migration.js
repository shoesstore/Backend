export default class CreateModelTable {

    async up(schema) {
        await schema.createTable('models', table => {
            table.increments();
            table.string('name');
            table.integer('collection_id');
            table.integer('price');
            table.string('status');
            table.string('slug');
            table.specificType('sizes', 'text ARRAY');
            table.specificType('colors', 'text ARRAY');
            table.specificType('images','text ARRAY');
            table.specificType('tags', 'text ARRAY');
            table.text('description');
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    async down(schema) {
        await schema.dropTable('models');
    }
}
