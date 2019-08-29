export default class CreateTableExternal {

    async up(schema) {
        await schema.createTable('external', table => {
            table.increments();
            table.string('external_id');
            table.string('provider');
            table.string('credential_id');
        })
    }

    async down(schema) {
        await schema.dropTable('external');
    }
}
