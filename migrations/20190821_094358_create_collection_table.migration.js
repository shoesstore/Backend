export default class CreateCollectionTable {

    async up(schema) {
        await schema.createTable('collections', table => {
            table.increments();
            table.integer('parent_id');
            table.string('name');
            table.string('slug');
            table.specificType('related_slugs', 'text ARRAY');
            table.timestamps();
            table.timestamp('deleted_at');
        });
    }

    async down(schema) {
        await schema.dropTable('collections');
    }
}
