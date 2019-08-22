export default class CreateCredentialTable {

    async up(schema) {
        await schema.createTable('credential', table => {
            table.increments();
            table.string('username');
            table.string('password');
            table.string('api_token');
            table.timestamps();
            table.dateTime('deleted_at');
        })
    }

    async down(schema) {
        await schema.dropTable('credential');

    }
}
